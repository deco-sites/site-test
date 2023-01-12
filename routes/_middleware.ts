import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 457,
  site: "site-test",
  domains: ["deco-sites-site-test.deno.dev"],
});