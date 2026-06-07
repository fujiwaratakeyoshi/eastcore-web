// base パス対応ヘルパー
// 本番(eastcore.jp)は base="/" なので素通り。
// GitHub Pages(/eastcore-web/)では先頭に base を付与してリンク切れを防ぐ。
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // 末尾スラッシュ除去
  if (!path.startsWith("/")) return path; // 外部URL/mailto/tel/#はそのまま
  return `${base}${path}`;
}
