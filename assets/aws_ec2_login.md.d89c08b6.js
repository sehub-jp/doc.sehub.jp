import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.419948d5.js";const o="/aws/ec2/new-role.png",p="/aws/ec2/policy.png",l="/aws/ec2/add-role.png",c="/aws/ec2/role-update.png",t="/aws/ec2/ssm.png",r="/aws/ec2/ec2-login.png",i="/aws/ec2/session-login.png",F=JSON.parse('{"title":"EC2 インスタンスに接続","description":"","frontmatter":{},"headers":[],"relativePath":"aws/ec2/login.md","filePath":"aws/ec2/login.md","lastUpdated":1693790116000}'),d={name:"aws/ec2/login.md"},m=n(`<h1 id="ec2-インスタンスに接続" tabindex="-1">EC2 インスタンスに接続 <a class="header-anchor" href="#ec2-インスタンスに接続" aria-label="Permalink to &quot;EC2 インスタンスに接続&quot;">​</a></h1><h2 id="ssh-で接続" tabindex="-1">SSH で接続 <a class="header-anchor" href="#ssh-で接続" aria-label="Permalink to &quot;SSH で接続&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>キーペアファイルの権限が open すぎるとエラーになるので、<code>600</code> 権限で十分でしょう。</p><p><code>XXXX.pem</code> はインスタンス起動時指定したキーペアです。</p></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">XXXX.pem</span></span>
<span class="line"><span style="color:#B392F0;">ssh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">XXXX.pem</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ec2-user@EC2インスタンスのIPアドレス</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">600</span><span style="color:#24292E;"> </span><span style="color:#032F62;">XXXX.pem</span></span>
<span class="line"><span style="color:#6F42C1;">ssh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">XXXX.pem</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ec2-user@EC2インスタンスのIPアドレス</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="ssm-接続" tabindex="-1">SSM 接続 <a class="header-anchor" href="#ssm-接続" aria-label="Permalink to &quot;SSM 接続&quot;">​</a></h2><h3 id="amazon-ssm-agentサービス起動" tabindex="-1">amazon-ssm-agentサービス起動 <a class="header-anchor" href="#amazon-ssm-agentサービス起動" aria-label="Permalink to &quot;amazon-ssm-agentサービス起動&quot;">​</a></h3><p>SSM 接続は <code>amazon-ssm-agent</code> サービスが必要です。 Amazon Linux 2022 でデフォルト上記サービスが未起動なので、起動しましょう。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>最新のバージョンでは <code>amazon-ssm-agent</code> サービスがインストールされているし、自動起動に設定されています。</p></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">service</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">amazon-ssm-agent</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">service</span><span style="color:#24292E;"> </span><span style="color:#032F62;">amazon-ssm-agent</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>再起動しても自動起動するように設定します。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">chkconfig</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">amazon-ssm-agent</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">on</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">chkconfig</span><span style="color:#24292E;"> </span><span style="color:#032F62;">amazon-ssm-agent</span><span style="color:#24292E;"> </span><span style="color:#032F62;">on</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="ssm-ロール作成" tabindex="-1">SSM ロール作成 <a class="header-anchor" href="#ssm-ロール作成" aria-label="Permalink to &quot;SSM ロール作成&quot;">​</a></h3><ol><li><p>「IAM」⇒「ロール」を開く</p></li><li><p>「ロールを作成」押下</p><p><img src="`+o+'" alt="ロールを作成"></p></li><li><p>信頼されたエンティティを選択</p><p>信頼されたエンティティタイプは <code>AWS のサービス</code> を選択</p><p>ユースケースは <code>EC2</code> を選択</p><p>「次へ」押下</p></li><li><p>許可を追加</p><p><code>SSM</code> で検索して、<code>AmazonEC2RoleforSSM</code> と <code>AmazonSSMManagedInstanceCore</code> を選択</p><p><img src="'+p+'" alt="ポリシー選択"></p><p>「次へ」押下</p></li><li><p>名前、確認、および作成</p><h5 id="ロール名" tabindex="-1">ロール名 <a class="header-anchor" href="#ロール名" aria-label="Permalink to &quot;ロール名&quot;">​</a></h5><p>自由に設定すればいい、一旦 <code>SSM</code> にします。</p><p>ほかの設定はデフォルトでOKなので、そのまま「ロールを作成」押下</p></li></ol><h3 id="ec2インスタンスにssmロール追加" tabindex="-1">EC2インスタンスにSSMロール追加 <a class="header-anchor" href="#ec2インスタンスにssmロール追加" aria-label="Permalink to &quot;EC2インスタンスにSSMロール追加&quot;">​</a></h3><ol><li><p>「IAM ロールを変更」開く</p><p><img src="'+l+'" alt="IAM ロールを変更"></p></li><li><p>ロール更新</p><p>作成した SSM ロールを選択して、「ロールの更新」押下</p><p><img src="'+c+'" alt="ロール更新"></p></li></ol><h3 id="aws-systems-manager-セットアップ" tabindex="-1">AWS Systems Manager セットアップ <a class="header-anchor" href="#aws-systems-manager-セットアップ" aria-label="Permalink to &quot;AWS Systems Manager セットアップ&quot;">​</a></h3><ol><li><p>「Systems Manager」⇒「高速セットアップ」を開く</p><p><img src="'+t+'" alt="SSM セットアップ"></p></li><li><p>Host Management の「作成」押下</p><p>全部デフォルトでいいので、そのまま「作成」ボタン押下</p></li></ol><h3 id="ec2-インスタンスに接続-1" tabindex="-1">EC2 インスタンスに接続 <a class="header-anchor" href="#ec2-インスタンスに接続-1" aria-label="Permalink to &quot;EC2 インスタンスに接続&quot;">​</a></h3><p><img src="'+r+'" alt="EC2 インスタンスに接続"></p><p><code>セッションマネージャ</code> タブの「接続」ボタン押下</p><p><img src="'+i+'" alt="セッションマネージャでログイン"></p><p>正常にログインできるはず、お楽しみに！</p>',22),h=[m];function g(u,E,y,b,S,_){return a(),e("div",null,h)}const v=s(d,[["render",g]]);export{F as __pageData,v as default};