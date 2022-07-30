---
---

# クイックスタート

## さあ、初めてのSpring Bootプロジェクトを作成しましょう
::: tip
OS          : **macOS**  
IDE         : **VS Code**  
Spring Boot : **2.7.2**  
Java        : **17**
:::

## 1. `F1` キーで「コマンドパレート」を起動
![Javaプロジェクト作成](/public/spring-boot/spring-boot-new-1.png)

## 2. `Java:Create Java Project...` を選択
![Javaプロジェクト作成](/public/spring-boot/spring-boot-new-2.png)

## 3. プロジェクト種類を選択
`Spring Boot` を選択
![Javaプロジェクト種類選択](/public/spring-boot/spring-boot-new-3.png)

## 4. ビルドツール選択
`Maven` と `Gradle` のどちらを選択します、どちらでも構いません、個人的には `Gradle` 派なので、`Gradle` を選択します。
![ビルドツール選択](/public/spring-boot/spring-boot-new-4.png)

## 5. Spring Boot のバージョンを選択します
現時点の安定版は無難なので「2.7.2」を選択します 
![Spring Bootバージョン選択](/public/spring-boot/spring-boot-new-5.png)

## 6. 開発言語を選択します
使い慣れた `Java` を選択します、`Kotlin` や `Groovy` も使う人が増えてる感じですが、、、
![開発言語選択](/public/spring-boot/spring-boot-new-6.png)

## 7. グループIDを入力します
![グループID設定](/public/spring-boot/spring-boot-new-7.png)
自由に入力すればいいです、どうでもいいかな？
::: tip
ドメインの逆順は一般的だそうです
:::
一応 `jp.sehub` にします。
![グループID設定](/public/spring-boot/spring-boot-new-7.1.png)

## 8. Artifact Id を入力します
![Artifact Id設定](/public/spring-boot/spring-boot-new-8.png)
自由に設定すればいい、いちおう `spring-boot-tutorial` にします。
![Artifact Id設定](/public/spring-boot/spring-boot-new-8.1.png)

## 9. パケージ種類を選択します
![パケージ種類選択](/public/spring-boot/spring-boot-new-9.png)
どちらでもいいです、`war` のデプロイに慣れたので、`war` にします。`jar` は `java -jar` で直接実行できるので、便利ですね👍
![パケージ種類選択](/public/spring-boot/spring-boot-new-9.1.png)

## 10. Javaバージョンを選択します
必要に応じて選択しましょう、一応 `17` を選択します
![Javaバージョン選択](/public/spring-boot/spring-boot-new-10.png)

## 11. 依頼パケージを選択します
後で追加でも可能なので、必要に応じて選択しましょう、一応 Webアプリケーションを作るので最低限のものを選択します
* Spring Boot DevTools  
ローカル開発に必要
* Lombok  
`@Data` など便利！
* Spring Web  
Webアプリケーション必要
* Thymeleaf  
テンプレートエンジン
![依頼パケージ選択](/public/spring-boot/spring-boot-new-11.png)

## 12. `Enter`キー押下で保存する場所を選択して、プロジェクト作成完了です
ソース構成は下記のようです。
![ソース構成](/public/spring-boot/spring-boot-new-12.png)

## 13. Controller作成
`src/main/java/jp/sehub/springboottutorial/controller` フォルダを作成し、その中に `IndexController.java` を作成します。
![Controller作成](/public/spring-boot/spring-boot-new-13.png)
ソースは下記となります。
```java{7-8,11,13}
package jp.sehub.springboottutorial.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class IndexController {
  
  @GetMapping("")
  public String index() {
    return "index";
  }
}
```
* 7行目の
```java
@Controller
```
は、このクラスは `Controller` であることを宣言します。

* 8行目の
```java
@RequestMapping("/")
```
は、このクラスのアクションは全部 `/` からであることを宣言します。
`RequestMapping` は `Get` や `Post` など全部対応します。

* 11行目の
```java
@GetMapping("")
```
は、`Get` リクエストのみ対応します。
`GetMapping` のパスは `""` なので、8行の `/` はこのアクションのパスになります。

* 13行目の
```java
return "index";
```
は、`index` というテンプレートを表示するという意味です。

## 14. indexテンプレート作成
![index.html作成](/public/spring-boot/spring-boot-new-14.png)
`src/main/resources/templates` フォルダに `index.html` ファイルを作成します。  
*内容は何でも構いません、一応下記のように作ります*
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spring Boot チュートリアル</title>
</head>
<body>
  これは最初のページだよ。
</body>
</html>
```

## 15. プロジェクト実行します
`Spring Boot Dashboard` プラグインは便利なので、インストールしておきましょう
![Spring Boot Dashboardインストール](/public/spring-boot/spring-boot-new-15.png)
プロジェクトを起動します。
![Springboot起動](/public/spring-boot/spring-boot-new-15.1.png)
起動後、ブラウザで `http://localhost:8080/` を開いて、画面が表示されたら、おめでとう！:tada: