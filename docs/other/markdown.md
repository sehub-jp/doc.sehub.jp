---
---
# Markdown

## 画像
### 構文
``` md
![alt用テキスト](画像URL)
```
### 実例
#### md構文
``` md
![Markdownのロゴ](https://www.markdown.jp/assets/img/markdown-mark.png)
```
#### 効果
![Markdownのロゴ](https://www.markdown.jp/assets/img/markdown-mark.png)

## ソースコード
### コードスパン
`` ` `` (バッククォート)で囲む

例：

```md
これは `ソースコード` です
```
表示結果：

これは `ソースコード` です

::: tip
コードスパン内に `` ` `` を使う場合、開始・終了のバッククオートを `n+1` 個で囲みます

例えば、

``` ``Use `code` in your Markdown file.`` ```　の書き方だと、表示する時、

``Use `code` in your Markdown file.`` になります。
:::

### コードブロック
`` ``` `` 或いは `` ~~~ ``
