import * as requests from "../api/requests.ts";
import { Client } from "../api/client.ts";
import { FandomLanguage, WikipediaLanguage } from "./types.ts";

export class SiteUrl {
  static fandom(communityName: string, language: FandomLanguage = "en") {
    if (/^[a-zA-Z0-9\-]{0,50}$/.test(communityName)) {
      return `https://${communityName}.fandom.com/${language}/api.php`;
    } else {
      throw new Error("Invalid Fandom site name");
    }
  }

  static mediawiki() {
    return "https://www.mediawiki.org/w/api.php";
  }

  static wikipedia(language: WikipediaLanguage = "en") {
    return `https://${language}.wikipedia.org/w/api.php`;
  }
}

export class Bot {
  public readonly client: Client;
  private _csrftoken = "+\\";

  constructor(public readonly url: string) {
    // TODO: Validate if the url is a wiki site
    this.client = new Client(this.url);
  }

  // Getter and settter for csrftoken
  private set csrftoken(token: string) {
    this._csrftoken = token;
  }
  public get csrftoken() {
    return this._csrftoken;
  }

  /**
   * Get a page from the wiki site.
   * @param title Title of the article.
   * @returns Page information.
   */
  async page(title: string): Promise<Page> {
    const res = await this.client.invoke(
      requests.query({
        titles: title,
        prop: "revisions",
        rvprop: "content",
        rvslots: "main",
      }),
    );
    const pageId = Object.keys(res.query.pages)[0];

    if (pageId === "-1") { // Page not exist
      throw new Error(`No such page: ${title}`);
    } else {
      const text = res.query.pages[pageId].revisions[0].slots.main["*"];
      return new Page(
        this,
        title,
        text,
        Number(pageId),
      );
    }
  }

  /**
   * Get a category from the wiki site.
   * @param title Name of the category
   * @returns Category information
   */
  async category(title: string): Promise<Category> {
    const { query: { categorymembers: members } } = await this.client.invoke(
      requests.query({
        list: "categorymembers",
        cmtitle: `Category:${title}`,
        cmlimit: 500,
        cmprop: "title",
      }),
    );

    // TODO Handles different "ns" (namespace)
    const articles = [];
    for (const m of members) {
      if (m.ns === 0) {
        articles.push(m.title);
      }
    }
    return new Category(articles);
  }

  /**
   * Login via bot account & bot password.
   * For more information, see https://www.mediawiki.org/wiki/Special:BotPasswords
   * @param botAccount An account that has 'Bot password'
   * @param botPassword Bot password
   */
  async login(botAccount: string, botPassword: string) {
    // Login step reference https://www.mediawiki.org/wiki/API:Edit#Example
    // Step 1. Get login token
    const { query: { tokens: { logintoken: lgtoken } } } = await this.client
      .invoke(
        requests.query({ meta: "tokens", type: "login" }),
      );

    // Step 2. Login with bot account, bot password, and login token
    await this.client.invoke(
      requests.login({
        lgname: botAccount,
        lgpassword: botPassword,
        lgtoken: lgtoken,
      }),
    );

    // Step 3. Get CSRF token
    const { query: { tokens: { csrftoken: csrftoken } } } = await this.client
      .invoke(
        requests.query({ meta: "tokens" }),
      );

    if (csrftoken === "+\\") { // Login failed
      throw new Error("Login Failed");
    } else {
      this.csrftoken = csrftoken; // Login Success
    }
  }
}

class Page {
  constructor(
    private bot: Bot,
    public readonly title: string,
    public text: string,
    public readonly pageId: number,
  ) {
  }

  /**
   * Save the page
   * @param params
   * @member {string} summary Summary of this edit. This message will show on the `history` page.
   * @member {boolean} minor Mark this edit as a minor edit
   * @member {boolean} bot Mark this edit as a bot edit
   */
  public async save(
    params?: { summary?: string; minor?: boolean; bot?: boolean },
  ) {
    const resp = await this.bot.client.invoke(
      requests.edit({
        title: this.title,
        text: this.text,
        token: this.bot.csrftoken,
        ...params,
      }),
    );

    if (resp?.edit?.result !== "Success") { // Edit failed
      const message = resp?.error?.info ?? "";
      throw new Error(`Save Page Failed. ${message}`);
    }
  }

  /**
   * Delete a page
   * @param params
   * @member {string} reason The summary of the deletion
   */
  public async delete(params?: { reason?: string }) {
    const resp = await this.bot.client.invoke(
      requests.delete_({
        title: this.title,
        token: this.bot.csrftoken,
        ...params,
      }),
    );

    if (resp?.error) { // Delete failed
      const message = resp?.error?.info ?? "";
      throw new Error(`Delete page failed. ${message}`);
    }
  }
}

class Category {
  constructor(public readonly articles: string[]) {
  }

  // TODO Retrieve the content of the category
  // TODO List the subcategory
}
