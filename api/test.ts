import {
  assert,
  assertInstanceOf,
  assertEquals,
} from "https://deno.land/std@0.140.0/testing/asserts.ts";

import { cleanEnv, str } from "https://deno.land/x/envalid@v0.0.3/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

import { Client, edit, login, query } from "./mod.ts";

const env = cleanEnv(Deno.env.toObject(), {
  USERNAME: str(),
  LGNAME: str(),
  LGPASSWORD: str(),
});

Deno.test("API url", async () => {
  { // Wikipedia
    const client = new Client("https://www.wikipedia.org");
    const url = client['apiUrl'];
    assertEquals(url, "https://www.wikipedia.org/w/api.php");
  }

  { // Fandom
    { // With pathname of index page
      const client = new Client("https://youtube.fandom.com/wiki/YouTube_Wiki");
      const url = client['apiUrl'];
      assertEquals(url, "https://youtube.fandom.com/api.php");
    }
    { // Without pathname
      const client = new Client("https://harrypotter.fandom.com/");
      const url = client['apiUrl'];
      assertEquals(url, "https://harrypotter.fandom.com/api.php");
    }
  }

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
