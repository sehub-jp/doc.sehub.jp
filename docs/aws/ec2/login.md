---
---

# EC2 インスタンスに接続

## SSH で接続

::: tip
キーペアファイルの権限が open すぎるとエラーになるので、`600` 権限で十分でしょう。

`XXXX.pem` はインスタンス起動時指定したキーペアです。
:::

```bash
chmod 600 XXXX.pem
ssh -i XXXX.pem ec2-user@EC2インスタンスのIPアドレス
```

## SSM 接続

### amazon-ssm-agentサービス起動
SSM 接続は `amazon-ssm-agent` サービスが必要です。
Amazon Linux 2022 でデフォルト上記サービスが未起動なので、起動しましょう。
::: tip
最新のバージョンでは `amazon-ssm-agent` サービスがインストールされているし、自動起動に設定されています。
:::
```bash
service amazon-ssm-agent start
```
再起動しても自動起動するように設定します。

```bash
chkconfig amazon-ssm-agent on
```

### SSM ロール作成
1. 「IAM」⇒「ロール」を開く

1. 「ロールを作成」押下

      ![ロールを作成](/aws/ec2/new-role.png)

1. 信頼されたエンティティを選択

      信頼されたエンティティタイプは `AWS のサービス` を選択

      ユースケースは `EC2` を選択

      「次へ」押下

1. 許可を追加

      `SSM` で検索して、`AmazonEC2RoleforSSM` と `AmazonSSMManagedInstanceCore` を選択

      ![ポリシー選択](/aws/ec2/policy.png)

      「次へ」押下

1. 名前、確認、および作成

      ##### ロール名
      自由に設定すればいい、一旦 `SSM` にします。

      ほかの設定はデフォルトでOKなので、そのまま「ロールを作成」押下

### EC2インスタンスにSSMロール追加
1. 「IAM ロールを変更」開く

      ![IAM ロールを変更](/aws/ec2/add-role.png)

1. ロール更新

      作成した SSM ロールを選択して、「ロールの更新」押下

      ![ロール更新](/aws/ec2/role-update.png)

### AWS Systems Manager セットアップ

1. 「Systems Manager」⇒「高速セットアップ」を開く

      ![SSM セットアップ](/aws/ec2/ssm.png)

2. Host Management の「作成」押下

      全部デフォルトでいいので、そのまま「作成」ボタン押下

### EC2 インスタンスに接続

![EC2 インスタンスに接続](/aws/ec2/ec2-login.png)

`セッションマネージャ` タブの「接続」ボタン押下

![セッションマネージャでログイン](/aws/ec2/session-login.png)

正常にログインできるはず、お楽しみに！
