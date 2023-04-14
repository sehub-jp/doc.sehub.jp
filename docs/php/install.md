---
---

# PHP をインストール

## Amazon Linux 2023 で PHP をインストール

### PHP バージョン確認
```bash
dnf list php*
```
![PHPバージョン確認](/public/php/al2023-php.png)

最新の `PHP8.2` が入ってないですが、まあ、8.1 でもいいか、Amazon Linux 2023 Good!

### PHP インストール
```bash
dnf install php php-cli
```

### バージョン確認
```bash
php -v
```
![PHPバージョン確認](/public/php/php-v.png)