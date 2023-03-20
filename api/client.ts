import {
  Cookie,
  CookieJar,
  wrapFetch,
} from "https://deno.land/x/another_cookiejar@v5.0.3/mod.ts";

import type { Request } from "./requests.ts";

export class Client {
  private fetch: typeof fetch;

  /**
   * @param site The root URL of the MediaWiki site.
   */
  constructor(public site: string | URL, private headers?: Headers) {
    const cookie = headers?.get("cookie");
    this.headers?.delete("cookie");
    this.fetch = wrapFetch({
      cookieJar: cookie != undefined
        ? new CookieJar([Cookie.from(cookie)])
        : undefined,
    });
  }

  private get apiUrl() {
    const url = this.site instanceof URL ? this.site : new URL(this.site);
    return url.toString();
  }

  /**
   * Invokes a raw request and returns its `Response`.
   */
  // deno-lint-ignore no-explicit-any
  async invokeRaw(method: "POST" | "GET", params: Record<string, any>) {
    const data = method == "POST" ? new FormData() : undefined;
    if (data) {
      for (const [key, value] of Object.entries(params)) {
        data.set(key, value);
      }
    }
    return await this.fetch(
      `${this.apiUrl}${
        method == "GET" ? `?${new URLSearchParams(Object.entries(params))}` : ""
      }`,
      {
        method,
        headers: this.headers,
        body: data,
      },
    );
  }

  /**
   * Invokes a request.
   */
  async invoke(
    [isPost, params]: Request,
  ) {
    params.format = "json";
    const method = isPost ? "POST" : "GET";
    return await (await this.invokeRaw(method, params)).json();
  }
}
