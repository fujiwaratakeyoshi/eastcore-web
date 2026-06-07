import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// 本番ドメイン（公開時に eastcore.jp へ差し替え予定）
// サイトマップ・正規URL・OGP生成に使用する
export default defineConfig({
  site: "https://eastcore.jp",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
