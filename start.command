#!/bin/bash
# ダブルクリックで開発サーバーを起動し、ブラウザを自動で開く
cd "$(dirname "$0")" || exit 1
if [ ! -d node_modules ]; then
  echo "依存をインストールしています..."
  npm install
fi
# 起動後にブラウザを開く
( sleep 2 && open "http://localhost:4321/" ) &
npm run dev
