import{_ as a,o as s,c as e,Q as t}from"./chunks/framework.419948d5.js";const n="/aws/ec2/security.png",o="/aws/ec2/inband.png",_=JSON.parse('{"title":"Amazon Linux 2022 初期設定","description":"","frontmatter":{},"headers":[],"relativePath":"aws/ec2/setup.md","filePath":"aws/ec2/setup.md","lastUpdated":1693790116000}'),l={name:"aws/ec2/setup.md"},p=t('<h1 id="amazon-linux-2022-初期設定" tabindex="-1">Amazon Linux 2022 初期設定 <a class="header-anchor" href="#amazon-linux-2022-初期設定" aria-label="Permalink to &quot;Amazon Linux 2022 初期設定&quot;">​</a></h1><h2 id="タイムゾーン設定" tabindex="-1">タイムゾーン設定 <a class="header-anchor" href="#タイムゾーン設定" aria-label="Permalink to &quot;タイムゾーン設定&quot;">​</a></h2><p>タイムゾーンはデフォルトで <code>UTC</code> なので、東京タイムゾーンに変更します。</p><h3 id="現在のタイムゾーン設定を確認" tabindex="-1">現在のタイムゾーン設定を確認 <a class="header-anchor" href="#現在のタイムゾーン設定を確認" aria-label="Permalink to &quot;現在のタイムゾーン設定を確認&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">timedatectl</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">timedatectl</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="使用可能のタイムゾーン一覧表示" tabindex="-1">使用可能のタイムゾーン一覧表示 <a class="header-anchor" href="#使用可能のタイムゾーン一覧表示" aria-label="Permalink to &quot;使用可能のタイムゾーン一覧表示&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">timedatectl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list-timezones</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">timedatectl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list-timezones</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="タイムゾーン設定-1" tabindex="-1">タイムゾーン設定 <a class="header-anchor" href="#タイムゾーン設定-1" aria-label="Permalink to &quot;タイムゾーン設定&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">timedatectl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set-timezone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Asia/Tokyo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">timedatectl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set-timezone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Asia/Tokyo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="セキュリティグループ設定" tabindex="-1">セキュリティグループ設定 <a class="header-anchor" href="#セキュリティグループ設定" aria-label="Permalink to &quot;セキュリティグループ設定&quot;">​</a></h2><h3 id="「インバウンドルールの編集」を開く" tabindex="-1">「インバウンドルールの編集」を開く <a class="header-anchor" href="#「インバウンドルールの編集」を開く" aria-label="Permalink to &quot;「インバウンドルールの編集」を開く&quot;">​</a></h3><p><img src="'+n+'" alt="インバウンドルールの編集"></p><h3 id="http-と-https-のポートを開放" tabindex="-1">HTTP と HTTPS のポートを開放 <a class="header-anchor" href="#http-と-https-のポートを開放" aria-label="Permalink to &quot;HTTP と HTTPS のポートを開放&quot;">​</a></h3><p><img src="'+o+'" alt="ポート開放"></p><h3 id="ルールを保存" tabindex="-1">ルールを保存 <a class="header-anchor" href="#ルールを保存" aria-label="Permalink to &quot;ルールを保存&quot;">​</a></h3><p>「ルールを保存」ボタン押下で <code>http</code> と <code>https</code> でアクセスできるようになります。</p>',16),i=[p];function r(c,d,h,u,m,b){return s(),e("div",null,i)}const g=a(l,[["render",r]]);export{_ as __pageData,g as default};
