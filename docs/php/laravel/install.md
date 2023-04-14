---
---

# インストール

## MacOS
:::info
前提：[Docker Desktop](https://www.docker.com/products/docker-desktop/)インストール済
:::

### インストール
下記コマンドで最新の Laravel をインストールできます。
```bash
curl -s "https://laravel.build/example-app" | bash
```

:::tip
`example-app` は新規作成するプロジェクト名です。

新規作成するプロジェクト名には `.` があると、エラーになるので要注意
:::

### 起動
```bash
cd example-app
./vendor/bin/sail up
```
起動できたら、http://localhost/ にアクセスして確認しましょう。

### オプション（サービス選択）
`with` オプションでサービスを指定することができます。
```bash
curl -s "https://laravel.build/example-app?with=pgsql,redis" | bash
```
使えるサービスは下記となります
* mysql
* pgsql
* mariadb
* redis
* memcached
* meilisearch
* minio
* selenium
* mailpit

:::tip
指定しない場合は、デフォルトで `mysql`, `redis`, `meilisearch`, `mailpit` と `selenium` が設定されます。 
:::