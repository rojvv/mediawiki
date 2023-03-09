import * as path from "https://deno.land/std@0.178.0/path/mod.ts";

import { Project } from "https://deno.land/x/ts_morph@17.0.1/mod.ts";
import { resolveIdentifier, resolveType } from "./utils.ts";

const source = new Project().createSourceFile(
  path.join(
    path.dirname(path.fromFileUrl(import.meta.url)),
    "..",
    "api",
    "requests.ts",
  ),
  undefined,
  { overwrite: true },
);

source.addStatements(["// deno-fmt-ignore-file", "// deno-lint-ignore-file"]);

source.addInterface({
  name: "Params",
  isExported: true,
  properties: [{
    name: "[key: string]",
    type: "any",
  }],
});

const { paraminfo: { modules } } = await (await fetch(
  "https://mediawiki.org/w/api.php?action=paraminfo&modules=*&format=json",
)).json();

for (const module of modules) {
  source.addInterface({
    isExported: true,
    name: `Params${resolveIdentifier(module.name, true)}`,
    extends: ["Params"],
    properties:
      // deno-lint-ignore no-explicit-any
      module.parameters.map((v: any) => ({
        name: resolveIdentifier(`${module.prefix || ""}${v.name}`),
        type: resolveType(v.type),
        hasQuestionToken: v.required == undefined,
      })),
  });
}

source.addTypeAlias({
  isExported: true,
  name: "Request",
  typeParameters: [{ name: "T extends Params", default: "Params" }],
  type: "[boolean, T]",
});

for (const module of modules) {
  source.addFunction({
    isExported: true,
    name: resolveIdentifier(module.name),
    parameters: [
      {
        name: "params",
        type: `Params${resolveIdentifier(module.name, true)}`,
      },
    ],
    returnType: `Request<Params${resolveIdentifier(module.name, true)}>`,
    statements: [
      `return [${
        module.mustbeposted != undefined
      }, { ...params, action: "${module.name}" }];`,
    ],
  });
}

await source.save();
