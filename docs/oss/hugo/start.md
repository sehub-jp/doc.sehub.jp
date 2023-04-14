---
---

# 入門
## サイト作成
### `testsite` というサイトを作成
```bash
hugo new site testsite
```

### `testsite` のルートパスに移動
```bash
cd testsite
```

### Git リポジトリ初期化
```bash
git init
```

### Ananke テーマを themes ディレクトリにクローンし、Git サブモジュールとしてプロジェクトに追加
```bash
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke themes/ananke
```

### サイトの設定ファイルに1行を追加し、現在のテーマを指定します
```bash
echo "theme = 'ananke'" >> config.toml
```

### ローカルサーバーを起動して、サイトを確認します
```bash
hugo server
```

## コンテンツ追加
## サイト設定
## サイトを公開