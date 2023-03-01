import{_ as p,c as l,o as e,a as i}from"./app.7b1062b7.js";const t="/assets/new-default-vpc.711b726c.png",a="/assets/new-default-vpc2.8be9b8a2.png",c="/assets/new-vpc.5cd16bc2.png",s="/assets/new-vpc-preview.0bec26fa.png",r="/assets/new-vpc2.52da0f0c.png",f=JSON.parse('{"title":"VPC の開始方法","description":"","frontmatter":{},"headers":[{"level":2,"title":"デフォルトのVPCの作成方法","slug":"デフォルトのvpcの作成方法","link":"#デフォルトのvpcの作成方法","children":[]},{"level":2,"title":"デフォルトのVPC以外のVPCの作成方法方法","slug":"デフォルトのvpc以外のvpcの作成方法方法","link":"#デフォルトのvpc以外のvpcの作成方法方法","children":[]}],"relativePath":"aws/vpc/new-vpc.md","lastUpdated":1677663646000}'),n={name:"aws/vpc/new-vpc.md"},o=i('<h1 id="vpc-の開始方法" tabindex="-1">VPC の開始方法 <a class="header-anchor" href="#vpc-の開始方法" aria-hidden="true">#</a></h1><h2 id="デフォルトのvpcの作成方法" tabindex="-1">デフォルトのVPCの作成方法 <a class="header-anchor" href="#デフォルトのvpcの作成方法" aria-hidden="true">#</a></h2><p>最初、デフォルトのVPCが既に作成されていますが、削除してしまった場合は再作成することができます。</p><ol><li><p>「お使いのVPC」をクリック</p></li><li><p>「アクション」⇒「デフォルト VPC を作成」をクリック</p></li></ol><p><img src="'+t+'" alt="デフォルトVPCを作成"></p><ol start="3"><li>「デフォルト VPC を作成」をクリック</li></ol><p><img src="'+a+'" alt="デフォルトVPCを作成"></p><h2 id="デフォルトのvpc以外のvpcの作成方法方法" tabindex="-1">デフォルトのVPC以外のVPCの作成方法方法 <a class="header-anchor" href="#デフォルトのvpc以外のvpcの作成方法方法" aria-hidden="true">#</a></h2><ol><li>「VPC」⇒「お使いのVPC」⇒「VPC を作成」</li></ol><p><img src="'+c+'" alt="VPCを作成"></p><ol start="2"><li>VPC の設定 <ol><li><p>作成するリソース<br> サブネットなど、EC2を作成する時必要なので、「VPCなど」を選択</p></li><li><p>名前タグの自動生成<br> サブネットなどの名前の先頭に追加する文字列、自由に設定すればいい</p></li><li><p>IPv4 CIDR ブロック<br> IP4 の IP とサイズを決定する。<br> サイズは16〜28設定可能、デフォルトの16でいいでしょう。</p></li><li><p>IPv6 CIDR ブロック<br> なくてもいいけど、あったほうがいいと思うし、無料だから、「Amazon 提供の IPv6 CIDR ブロック」を選択しましょう。</p></li><li><p>テナンシー 「デフォルト」でいいでしょう。</p></li><li><p>アベイラビリティゾーン (AZ) の数<br> 可用性を高めるため、2以上必要ですが、一番多い「3」にしましょう。</p></li><li><p>パブリックサブネットの数 「3」にしましょう。</p></li><li><p>プライベートサブネットの数<br> パブリックサブネットより多く設定したほうがいいと思いますが、同じく「3」で十分でしょう。</p></li><li><p>NAT ゲートウェイ ($) よくわからないので、とりあえずデフォルトの「なし」にします。</p></li><li><p>VPC エンドポイント<br> S3を操作する可能性があるので、「S3ゲートウェイ」にしましょう。</p></li><li><p>DNS オプション<br> デフォルトで全部チェックが入ってるので、そのままにしましょう。</p></li></ol></li></ol><p>プレビューは下記となります。</p><p><img src="'+s+'" alt="プレビュー"></p><ol start="3"><li>「VPC を作成」をクリック</li></ol><p><img src="'+r+'" alt="VPC を作成"></p>',15),_=[o];function d(v,P,C,V,h,m){return e(),l("div",null,_)}const g=p(n,[["render",d]]);export{f as __pageData,g as default};
