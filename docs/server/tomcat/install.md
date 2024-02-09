---
---
# Tomcat のインストール

## Amazon Linux 2023でインストール
### インストール
```bash
sudo dnf install tomcat9
```

### サービス起動
```bash
sudo service tomcat9 start
```

### Tomcatを自動起動に設定
```bash
sudo chkconfig tomcat9 on
```