import * as path from "https://deno.land/std@0.140.0/path/mod.ts";

import { Project } from "https://deno.land/x/ts_morph@15.0.0/mod.ts";
import { resolveIdentifier, resolveType } from "./utils.ts";

const source = new Project().createSourceFile(
  path.join(
    path.dirname(path.fromFileUrl(import.meta.url)),
    "..",
    "requests.ts",
  ),
);

source.addStatements(["// deno-lint-ignore-file"]);

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
    name: `Params${resolveIdentifier(module.name)}`,
    extends: ["Params"],
    properties:
      // deno-lint-ignore no-explicit-any
      module.parameters.map((v: any) => ({
        name: resolveIdentifier(v.name),
        type: resolveType(v.type),
        hasQuestionToken: Boolean(v.required),
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
        type: `Params${resolveIdentifier(module.name)}`,
      },
    ],
    returnType: `Request<Params${resolveIdentifier(module.name)}>`,
  }).setBodyText(
    `return [${
      module.mustbeposted != undefined
    }, { ...params, action: "${module.name}" }];`,
  );
}

await source.save();
