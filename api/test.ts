import {
  assert,
  assertEquals,
  assertInstanceOf,
} from "https://deno.land/std@0.178.0/testing/asserts.ts";

import { cleanEnv, str } from "https://deno.land/x/envalid@0.1.2/mod.ts";
import "https://deno.land/std@0.178.0/dotenv/load.ts";

import { Client, edit, login, query } from "./mod.ts";

const env = cleanEnv(Deno.env.toObject(), {
  USERNAME: str(),
  LGNAME: str(),
  LGPASSWORD: str(),
});

Deno.test("search", async () => {
  const client = new Client("https://ku.wikipedia.org");
  const result = await client.invoke(
    query({ list: "search", srsearch: "Kurdistan" }),
  );
  assertInstanceOf(result.query.search, Array);
});

Deno.test("login and edit", async () => {
  const client = new Client("https://test.wikipedia.org");
  const { query: { tokens: { logintoken: lgtoken } } } = await client.invoke(
    query({ meta: "tokens", type: "login" }),
  );
  await client.invoke(
    login({ lgname: env.LGNAME, lgpassword: env.LGPASSWORD, lgtoken }),
  );
  const { query: { tokens: { csrftoken: token } } } = await client.invoke(
    query({ meta: "tokens" }),
  );
  const { edit: { newrevid } } = await client.invoke(
    edit({
      token,
      title: `User:${env.LGNAME.split("@")[0]}`,
      text: new Date().toISOString(),
    }),
  );
  assert(typeof newrevid == "number");
});
