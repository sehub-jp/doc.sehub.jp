---
---

# PHP をインストール

## Amazon Linux 2022 で PHP をインストール

### PHP バージョン確認
```bash
dnf list php*
```
![PHPバージョン確認](/public/php/al2022-php.png)

最新の `PHP8.1` が入っていますね、Amazon Linux 2022 Good!

### PHP インストール
```bash
dnf install php php-cli
```

### バージョン確認
```bash
php -v
```
![PHPバージョン確認](/public/php/php-v.png)