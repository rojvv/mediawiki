import * as requests from "../api/requests.ts";
import {Client} from "../api/client.ts";

type FamilyCode = "ar" | "cs" | "da" | "de" | "el" | "en" | "es" | "et" | "fa" | "fi" | "fr" | "he" | "hu" | "is" | "it" | "ja" | "ko" | "lt" | "lv" | "nl" | "nn" | "no" | "pl" | "pt" | "pt-br" | "ru" | "sk" | "sv" | "tr" | "uk" | "zh" | "zh-tw";

export class SiteUrl {
    static fandom(communityName: string, code: FamilyCode = 'en') {
        if (communityName.match(/^[a-zA-Z0-9\-]{0,50}$/)) {
            return `https://${communityName}.fandom.com/${code}/api.php`;
        } else {
            throw new Error("Invalid Fandom site name");
        }
    }

    static mediawiki() {
        return "https://www.mediawiki.org/w/api.php";
    }

    static wikipedia(code: FamilyCode = 'en') {
        return `https://${code}.wikipedia.org/w/api.php`
    }
}

export default class Bot {
    static site(url: string): Site {
        return new Site(url);
    }

    static async page(site: Site, title: string): Promise<Page> {
        const res = await site.client.invoke(
            requests.query({
                titles: title,
                prop: "revisions",
                rvprop: "content",
                rvslots: "main"
            })
        );
        const revisionId = Object.keys(res.query.pages)[0];
        const text = res.query.pages[revisionId]["revisions"][0]["slots"]["main"]["*"];
        return new Page(
            site, title, text, Number(revisionId)
        );
    }

    static async category(source: Site, title: string): Promise<Category> {
        const res = await source.client.invoke(
            requests.query({
                list: "categorymembers",
                cmtitle: `Category:${title}`,
                cmlimit: 500,
                cmprop: "title",
            })
        );

        const members = res.query.categorymembers;
        const articles = []
        for (const m of members) articles.push(m.title);
        return new Category(articles);
    }
}

class Site {
    public readonly url: string = "";
    client: Client;
    csrftoken = "";

    constructor(url: string, code?: string) {
        this.url = url;
        this.client = new Client(this.url);
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
        const {query: {tokens: {logintoken: lgtoken}}} = await this.client.invoke(
            requests.query({meta: "tokens", type: "login"}),
        );

        // Step 2. Login with bot account, bot password, and login token
        await this.client.invoke(
            requests.login({lgname: botAccount, lgpassword: botPassword, lgtoken: lgtoken}),
        );

        // Step 3. Get CSRF token
        const {query: {tokens: {csrftoken: csrftoken}}} = await this.client.invoke(
            requests.query({meta: "tokens"}),
        );
        this.csrftoken = csrftoken;
    }
}

class Page {

    private site: Site;
    public readonly title: string;
    public text: string;
    public readonly revisionId: number;

    constructor(site: Site, title: string, text: string, revisionId: number) {
        this.site = site;
        this.title = title;
        this.text = text;
        this.revisionId = revisionId;
    }

    /**
     * Save the page
     * @param summary Summary of this edit. This message will show on the `history` page.
     * @param minor Mark this edit as a minor edit
     * @param botFlag Mark this edit as a bot edit
     */
    public async save(summary?: string, minor?: boolean, botFlag?: boolean) {
        await this.site.client.invoke(
            requests.edit({
                title: this.title,
                text: this.text,
                summary: summary,
                minor: minor,
                token: this.site.csrftoken,
            })
        );
    }

    /**
     * Delete a page
     * @param reason The summary of the deletion
     */
    public async delete(reason?: string) {
        await this.site.client.invoke(
            requests.delete_({
                title: this.title,
                reason: reason,
                token: this.site.csrftoken,
            })
        );
    }
}

class Category {
    public readonly articles;

    constructor(articles: string[]) {
        this.articles = articles
    }
}
