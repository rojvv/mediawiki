# API [![](https://shield.deno.dev/x/grammy)](https://deno.land/x/grammy)

> A MediaWiki API wrapper with TypeScript type declarations.

## Introduction

Seaching in English Wikipedia for a phrase is as simple as:

```ts
import * as api from "https://deno.land/x/mediawiki/api/mod.ts";

await new api.Client("https://en.wikipedia.org").invoke(
  api.query({ list: "search", srsearch: "Hello" })
);
```

The main file exports:

- The main and the most important class: `Client`, which can be used to invoke API requests and store session credentials.
- Various functions that you can pass their returned values to the `invoke` method of `Client`.

The exported functions are named by the available actions on the MediaWiki API. The types of their parameters are declared, which lets you know about the names of the available parameters and their possible values without having to go back to the API documentation every time.

For more details on usage, you can see [src/test.ts](./src/test.ts).

## Plans

- [ ] Make it possible to get the cookies of the current session of a `Client`.
