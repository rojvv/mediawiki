# Bot

> A high-level wrapper around [API](../api/README.md)

## Example

### Get a page

This bot is supported for getting the content of a page from a wiki site.

For example, get a page named "Cat" from English Wikipedia:

```typescript
import { Bot, SiteUrl } from "https://deno.land/x/mediawiki/bot/mod.ts";

const bot = new Bot(SiteUrl.wikipedia("en")); // wikipedia site
const page = await bot.page("Cat"); // Get the "Cat" page
console.log(page.text); // Print the content of the page
```

### Login

If you'd like to edit or delete a page, you'd better log in, or your IP will be
disclosed.

Currently, only
[BotPassword](https://www.mediawiki.org/wiki/Manual:Bot_passwords) is supported
to log in.

```typescript
const bot = new Bot(SiteUrl.wikipedia("en"));
await bot.login("bot_account", "bot_password"); // Login to the wiki site
```

### Edit a page

You can edit a page via this bot.

```typescript
const bot = new Bot(SiteUrl.wikipedia("en"));
await bot.login("bot_account", "bot_password");

const page = await bot.page("Some page");
page.text = "This is new content"; // Change the content

await page.save({ summary: "New Edit" }); // Publish your changes
```

### Delete a page

You can also delete a page.

```typescript
const page = await bot.page("Some page");
await page.delete(); // Delete a page
```

### Get category

You can get a list of page names in a category.

```typescript
const category = await bot.category("Cats");
console.log(category.articles); // Print all page names in the category.
```

## APIs

### Bot

- `login(botAccount: string, botPassword: string): Promise<void>`

  Login to the wiki site via username and
  [bot password](https://www.mediawiki.org/wiki/Manual:Bot_passwords).

- `page(title: string): Promise<Page>`

  Get a page instance.

- `category(title: string): Promise<Category>`

  Get a category instance.

### Page

- `text: string`

  The content of the page. If you want to edit the page, you can change the
  value of this property.

- `save(params?: {summary?: string, minor?: boolean, bot?: boolean}): Promise<void>`

  Publish your changes on `text`.

  `summary`: The summary of the edit.

  `minor`: Mark this edit as a minor edit.

  `bot`: Mark this edit as a bot edit.

- `delete(params?: {reason?: string}): Promise<void>`

  Delete the page.

  `reason`: The reason for deleting the page.

### Category

- `articles: string[]`

  Get a list of page names in the category.

### SiteUrl

You can specify the wiki site by SiteUrl.

- `static wikipedia(code='en'): string`

  Get API URL of Wikipedia with language code. Default language is English.

- `static mediawiki(): string`

  Get API URL of MediaWiki.

- `static fandom(communityName: string, code = 'en'): string`

  Get API URL of Fandom with community name and language code. Default language
  is English.
