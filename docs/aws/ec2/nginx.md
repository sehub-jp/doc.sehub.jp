---
---

# Nginx セットアップ

## インストール
::: tip
Amazon Linux 2022 では、`yum` も使えますが、せっかくだから、後継の `dnf` を使います。

※実際は違いがないらしいですが、、
:::

```bash
dnf install nginx
```

![Nginxインストール](/public/aws/ec2/nginx/install.png)

現時点で `1.22` バージョンになっています

## 起動
### Nginx サービスを起動
```bash
service nginx start
```

### Nginx サービス状態確認
```bash
service nginx status
```
![Nginxサービス状態](/public/aws/ec2/nginx/status.png)

::: tip
`●` が表示されたら、正常動いている状態。

`○` が表示されたら、起動していない状態。
:::

### ブラウザで Nginx の状態確認

ブラウザから EC2 インスタンスのアドレスをアクセスして、下記のような画面が表示されたら、OK.

![ブラウザでNginx状態確認](/public/aws/ec2/nginx/http-status.png)

::: tip
`https` はまだ未設定なので、`http` しか表示できません。
:::

### Nginx サービスを自動起動に設定
```bash
chkconfig nginx on
```