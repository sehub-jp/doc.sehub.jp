---
---
# Git コマンド

## 初期化
### 構文
`git init`

### 実例
```bash
git init
```

## ファイル追加
### 構文
`git add`

### 実例
```bash
git add .
```

## コミット
### 構文
`git commit`

### 実例
```bash
git commit -m "これはコメントです。"
```

## リモートリポジトリ追加
### 構文
`git remote add [追加するリモートリポジトリ名] [追加したいリポジトリ]`

### 実例
```bash
git remote add origin git@github.com:sehub-jp/doc.sehub.jp.git"
```

## プッシュ
### 構文
`git push`

### 実例
```bash
git push origin main
```

## ブランチ変更
### 構文
`git branch -m`

### 実例
```bash
git branch -m "dev"
```