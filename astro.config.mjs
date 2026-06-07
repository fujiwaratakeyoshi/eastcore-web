import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// site/base は環境変数で上書き可能（既定は本番 eastcore.jp / ルート）。
// GitHub Pages プレビュー時は Actions が SITE / BASE_PATH を渡す。
const SITE = process.env.SITE ?? "https://eastcore.jp";
const BASE_PATH = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site: SITE,
  base: BASE_PATH,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
