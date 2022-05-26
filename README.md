# MWB

<div align="center">

A MediaWiki API wrapper with TypeScript type declarations of the requests for making it easier to build bots that can run using [Deno](https://deno.land).

[On deno.land](https://deno.land/x/mwb) &middot; [License](./LICENSE)

</div>

## Introduction

Seaching in English Wikipedia for a phrase is as simple as:

```ts
import * as mwb from "https://deno.land/x/mwb/mod.ts";

await new mwb.Client("https://en.wikipedia.org").invoke(
  mwb.query({ list: "search", srsearch: "Hello" })
);
```

The main file exports:

- The main and the most important class: `Client`, which can be used to invoke API requests and store session credentials.
- Various functions that you can pass their returned values to the `invoke` method of `Client`.

The exported functions are named by the available actions on the MediaWiki API. The types of their parameters are declared, which lets you know about the names of the available parameters and their possible values without having to go back to the API documentation every time.

For more details on usage, you can see [src/test.ts](./src/test.ts).

## Plans

- [ ] Add helpers for Event Streams.
- [ ] Make it possible to get the cookies of the current session of a `Client`.

## Feedback

To share your feedback, feel free to create an issue or leave me a message on [my talk page](https://wikitech.wikimedia.org/wiki/User_talk:Roj_im). Pull requests are welcome as always :)
