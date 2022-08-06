
# Thymeleafってなに？

## Thymeleaf紹介
とりあえず[公式ページ](https://www.thymeleaf.org/)見てみましょう
>Thymeleaf is a modern server-side Java template engine for both web and standalone environments.

まあ、意味分かりますよね、、

簡単にまとめてみると
1. 名前：Thymeleaf　読み方：タイムリーフ
1. サーバーサイトの Java テンプレートエンジンの一つ
1. Spring Boot で使用推奨されている

以上。

## 導入方法
### 依頼追加
[SpringBoot紹介](../boot-quick-start.html#_11-依頼パケージを選択します)で説明したように、プロジェクト作成時Thymeleafを選択して導入できます。

もちろん、プロジェクト作成後でも簡単にThymeleafを導入できます。
build.gradle に１行追加するだけです。
```java
implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
```

### Html タグ設定
html ファイルの `html` タグに下記要素を追加
```html
xmlns:th="//www.thymeleaf.org/"
```
修正後の html ファイルはこんな感じ（2行目）
```html{2}
<!DOCTYPE html>
<html lang="ja" xmlns:th="//www.thymeleaf.org/">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spring Boot チュートリアル</title>
</head>
```

## 使ってみよう
### Controller を修正して画面へメッセージを渡す
修正後のコードはこんな感じ（13、14行）
```java{13-14}
package jp.sehub.springboottutorial.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class IndexController {
  
  @GetMapping("")
  public String index(Model model) {
    model.addAttribute("msg","これはテスト用のメッセージだよ！");
    return "index";
  }
}
```

### 画面上で Controller から渡されたメッセージを表示する
下記ソースを追加する
```html
<div th:text="${msg}">メッセージ内容</div>
```
修正後の html ファイルはこんな感じ（11行は追加された内容）
```html{11}
<!DOCTYPE html>
<html lang="ja" xmlns:th="//www.thymeleaf.org/">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spring Boot チュートリアル</title>
</head>
<body>
  これは最初のページだよ。
  <div th:text="${msg}">メッセージ内容</div>
</body>
</html>
```
じゃあ、画面を開いて、メッセージが表示されるかどうかを確認しよう  
絶対表示されるでしょう。。。