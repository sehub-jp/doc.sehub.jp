---
---

# Amazon Linux 2022 初期設定

## タイムゾーン設定

タイムゾーンはデフォルトで `UTC` なので、東京タイムゾーンに変更します。

### 現在のタイムゾーン設定を確認

```bash
timedatectl
```

### 使用可能のタイムゾーン一覧表示

```bash
timedatectl list-timezones
```

### タイムゾーン設定

```bash
sudo timedatectl set-timezone Asia/Tokyo
```

## セキュリティグループ設定
### 「インバウンドルールの編集」を開く

![インバウンドルールの編集](/aws/ec2/security.png)

### HTTP と HTTPS のポートを開放

![ポート開放](/aws/ec2/inband.png)

### ルールを保存

「ルールを保存」ボタン押下で `http` と `https` でアクセスできるようになります。