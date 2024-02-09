---
---

# Nginx の設定

## Virtual Hosts 設定
# TODO

## HTTPS 設定
### certbot インストール
```bash
sudo dnf install certbot python3-certbot-nginx
```

### SSL証明書発行
```bash
sudo certbot --nginx -d sehub.jp -d *.sehub.jp
```
