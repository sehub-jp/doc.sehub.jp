---
---
# Amazon Linux2 で PostgreSQL をインストール

## PostgreSQL のバージョン確認

```bash
yum list postgres*
```
上記コマンドで `PostgreSQL` の関連パケージのバージョンを確認できます。
![Amazon-yum-postgres](/public/postgres/postgres-version.png)

現在、まだ 9.2 バージョンが分かりました。

9.2はさすが古すぎるので、`amazon-linux-extras` を使いましょう。

```bash
amazon-linux-extras list
```
上記コマンドで `amazon-linux-extras` のパケージとバージョンを確認できます
![Amazon-yum-postgres14](/public/postgres/postgres14.png)

よし、バージョン14使えますね🎉

## amazon-linux-extras で PostgreSQLをインストール
```bash
amazon-linux-extras install postgres14
```
続いて、yum で PostgreSQL のパケージをインストール
```bash
yum install postgresql-server postgresql-devel
```
上記コマンドで PostgreSQL をインストールします。

## 初期化
```bash
postgresql-setup initdb
```
上記コマンドでデータベースを初期化します。

## サービス起動
```bash
service postgresql start
```

## サービス状態確認
サービスが正常に起動できたかどうは下記コマンド確認
```bash
service postgresql status
```
緑色の `active (running)` が表示されたら、OKです。

## サービスを自動起動
```bash
chkconfig postgresql on
```
上記コマンドでサーバー再起動の時、`PostgreSQL` のサービスが自動起動するようにします。