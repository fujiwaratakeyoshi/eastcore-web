// 会社情報の一元管理（全ページで参照）
export const company = {
  name: "株式会社イーストコア",
  nameEn: "EastCore Inc.",
  tagline: "粉体・固体の表面物性分析と、世界でも数少ないフリーズドライ測定を。",
  description:
    "株式会社イーストコアは、水蒸気吸着測定装置・フリーズドライ顕微鏡をはじめとする科学測定機器のメーカーです。大手製薬企業をはじめとする研究開発現場に、医薬・化学分野の問題解決をサポートします。",
  established: "2003年5月13日（平成15年）",
  capital: "1,000万円",
  zip: "〒108-0074",
  address: "東京都港区高輪4-20-10",
  tel: "03-3444-9828",
  fax: "03-3441-2639",
  // メールはスパム対策のため分割して保持し、表示時に結合する
  emailUser: "info",
  emailDomain: "eastcore.jp",
  businessHours: "平日 10:00〜17:00（土日祝休み）",
  business:
    "水蒸気吸着測定装置、フリーズドライ顕微鏡ステージ、インバースガスクロマトグラフィー、小型造粒装置、温湿度コントロール顕微鏡ステージの販売",
} as const;

export const emailAddress = `${company.emailUser}@${company.emailDomain}`;

// 主な導入実績（大手製薬）
export const clients = [
  "アステラス製薬",
  "エーザイ",
  "大塚製薬",
  "塩野義製薬",
  "第一三共",
  "武田薬品工業",
  "中外製薬",
] as const;

// グローバルナビゲーション
export const nav = [
  { label: "製品情報", href: "/products/" },
  { label: "導入実績", href: "/results/" },
  { label: "会社概要", href: "/company/" },
  { label: "資料ダウンロード", href: "/download/" },
  { label: "お問い合わせ", href: "/contact/" },
] as const;
