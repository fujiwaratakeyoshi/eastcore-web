# eastcore-web — 株式会社イーストコア コーポレートサイト（新規）

集客・問い合わせ増加を目的に、Astro で新規構築したコーポレートサイト。
完成後に既存ドメイン `eastcore.jp` へ差し替える前提。

## 技術スタック
- **Astro 5**（静的サイト生成 / 高速・SEOに強い）
- `@astrojs/sitemap`（製品ページを含む sitemap 自動生成）
- 依存は最小限。CSSは独自設計システム（`src/styles/global.css`）

## 起動方法
- `start.command` をダブルクリック（自動で `npm install` → 開発サーバ起動 → ブラウザを開く）
- または手動:
  ```bash
  npm install
  npm run dev      # http://localhost:4321/
  npm run build    # dist/ に本番ビルド
  npm run preview  # ビルド結果をプレビュー
  ```

## ページ構成
| URL | 内容 |
|---|---|
| `/` | トップ（実績訴求・課題訴求・製品一覧・選ばれる理由・CTA） |
| `/products/` | 製品一覧 |
| `/products/{e301,fd301,sgl101,grh,igc}/` | 各製品詳細（用途・特長・仕様・FAQ・関連製品） |
| `/results/` | 導入実績 |
| `/company/` | 会社概要（地図つき） |
| `/contact/` | お問い合わせフォーム |
| `/download/` | 資料請求フォーム（リード獲得） |
| `/privacy/` | プライバシーポリシー |
| `/404` | 404ページ |

## 編集ポイント（データ一元管理）
- 会社情報: `src/data/company.ts`
- 製品情報（仕様・FAQ・キーワード）: `src/data/products.ts`
  - ⚠️ 仕様の「※要確認」項目は**公式カタログの実数値に差し替えること**

## 環境変数（`.env`）
| 変数 | 説明 |
|---|---|
| `PUBLIC_FORM_ENDPOINT` | フォーム送信先（Formspree等のURL）。未設定だとフォームは無効＆該当ページは noindex |
| `PUBLIC_NOINDEX` | `1` でサイト全体を noindex（**公開検証中は1のまま、本番公開時に 0 か空にする**） |

## 公開前チェックリスト
- [ ] `src/data/products.ts` の仕様「※要確認」をカタログ値に差し替え
- [ ] `PUBLIC_FORM_ENDPOINT` を設定（フォーム稼働）
- [ ] OGP画像 `public/ogp.png`（1200×630）を用意
- [ ] 製品写真・実機画像を差し込み（現状はプレースホルダ）
- [ ] 本番公開時に `PUBLIC_NOINDEX=0`
- [ ] 公開後、Google Search Console に `https://eastcore.jp/sitemap-index.xml` を送信
- [ ] GA4 等のアクセス解析を設置

## 旧サイトからの主な改善点
- 製品ページが **sitemap に全件収録**（旧サイトは製品・ニュースが未収録だった）
- 全ページに最適化された title / description / OGP / 構造化データ（JSON-LD）
- 研究者の検索語（吸湿性評価・崩壊温度 等）を意識したテキスト量とキーワード設計
- 資料請求フォームによる**リード獲得導線**を新設
- 各ページに問い合わせ・デモ依頼の CTA を配置
