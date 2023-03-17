import{_ as e,c as p,o as a,N as o}from"./chunks/framework.1e6a71f2.js";const c="/aws/ec2/new-instans.png",l="/aws/ec2/new-key.png",i="/aws/ec2/new-key-detail.png",t="/aws/ec2/ec2-instans.png",w=JSON.parse('{"title":"EC2 の開始方法","description":"","frontmatter":{},"headers":[],"relativePath":"aws/ec2/new-ec2.md","lastUpdated":1679022747000}'),s={name:"aws/ec2/new-ec2.md"},d=o('<h1 id="ec2-の開始方法" tabindex="-1">EC2 の開始方法 <a class="header-anchor" href="#ec2-の開始方法" aria-label="Permalink to &quot;EC2 の開始方法&quot;">​</a></h1><h2 id="インスタンスを起動" tabindex="-1">インスタンスを起動 <a class="header-anchor" href="#インスタンスを起動" aria-label="Permalink to &quot;インスタンスを起動&quot;">​</a></h2><h3 id="_1-「インスタンスを起動」ボタン押下" tabindex="-1">1. 「インスタンスを起動」ボタン押下 <a class="header-anchor" href="#_1-「インスタンスを起動」ボタン押下" aria-label="Permalink to &quot;1. 「インスタンスを起動」ボタン押下&quot;">​</a></h3><p><img src="'+c+'" alt="インスタンスを起動"></p><h3 id="_2-設定値" tabindex="-1">2. 設定値 <a class="header-anchor" href="#_2-設定値" aria-label="Permalink to &quot;2. 設定値&quot;">​</a></h3><ol><li><p>名前とタグ</p><p>自由に設定すればいい。</p></li><li><p>アプリケーションおよび OS イメージ (Amazon マシンイメージ)</p><p>自分に合うイメージを選択しましょう。</p><p>Amazon Linux 2 を使い慣れたけど、PHP など古いバージョンしか入ってないので、</p><p>今回は次世代の Amazon Linux 2022 にします。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>al2022</code> で検索すれば出て来る</p><p>※今回は ARM バージョンを使う</p></div></li><li><p>インスタンスタイプ</p><p>今回は比較的に安い <code>t4g</code> を使います。</p></li><li><p>キーペア (ログイン)</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>最新のバージョンでは <code>amazon-ssm-agent</code> 既にインストールされているのでこの手順がなくても大丈夫です。</p></div><p>SSM（AWS Systems Manager）を使ってキーなしでもいいですが、Amazon Linux 2022 はデフォルトで <code>amazon-ssm-agent</code> サービスが起動してないのでキー必須になります。 既存キーがない場合は、「新しいキーペアの作成」で新しいキーペアを作成します。</p><h4 id="キーペア作成" tabindex="-1">キーペア作成 <a class="header-anchor" href="#キーペア作成" aria-label="Permalink to &quot;キーペア作成&quot;">​</a></h4><ol><li><p>「新しいキーペアの作成」押下</p><p><img src="'+l+'" alt="新しいキーペアの作成"></p></li><li><p>詳細設定</p><ol><li><p>キーペア名</p><p>自由に設定すればいい。</p></li><li><p>キーペアのタイプ</p><p>どちらでもいい、新しい <code>ED25519</code> にします。</p></li><li><p>プライベートキーファイル形式</p><p><code>PuTTY</code> 使わないので、<code>.pem</code> にします。</p><p><code>PuTTY</code> を使う場合は <code>.ppk</code> にしましょう。</p></li></ol><p><img src="'+i+'" alt="キーペア作成詳細設定"></p><p>こんな感じ、「キーペアを作成」押下で新しいキーペアをダウンロードします。</p></li></ol></li><li><p>ネットワーク設定</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>「編集」押下で編集可能な状態になる</p></div><ul><li><p>VPC</p><p><a href="/aws/vpc/new-vpc.html">VPC の開始方法</a> で作成したVPCを選択</p></li><li><p>サブネット</p><p>外部からアクセスする必要なので、<code>public</code> のサブネットを選択しましょう。</p></li><li><p>パブリック IP の自動割り当て</p><p><code>有効化</code> にしましょう。</p></li><li><p>IPv6 IP を自動で割り当てる</p><p><code>有効化</code> にしましょう。</p></li><li><p>ファイアウォール (セキュリティグループ)</p><p><code>セキュリティグループを作成する</code> と <code>既存のセキュリティグループを選択する</code> どちらでもいい。</p></li><li><p>インバウンドセキュリティグループのルール</p><p>デフォルトで <code>ssh</code> できるように <code>22</code> ポート許容になっているので、最低限これでいいでしょう。（ほかは起動後追加可能）</p></li></ul><p>その他の設定はとりあえずデフォルトでインスタンスを起動します。</p><p>起動後、下記のように表示されます。</p><p><img src="'+t+'" alt="インスタンス起動後"></p></li></ol>',6),n=[d];function r(_,m,h,u,P,b){return a(),p("div",null,n)}const f=e(s,[["render",r]]);export{w as __pageData,f as default};
