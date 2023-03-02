import{_ as n,c as s,o as a,a as e}from"./app.eef814b5.js";const i="/aws/ec2/nginx/install.png",l="/aws/ec2/nginx/status.png",t="/aws/ec2/nginx/http-status.png",C=JSON.parse('{"title":"Nginx セットアップ","description":"","frontmatter":{},"headers":[{"level":2,"title":"インストール","slug":"インストール","link":"#インストール","children":[]},{"level":2,"title":"起動","slug":"起動","link":"#起動","children":[{"level":3,"title":"Nginx サービスを起動","slug":"nginx-サービスを起動","link":"#nginx-サービスを起動","children":[]},{"level":3,"title":"Nginx サービス状態確認","slug":"nginx-サービス状態確認","link":"#nginx-サービス状態確認","children":[]},{"level":3,"title":"ブラウザで Nginx の状態確認","slug":"ブラウザで-nginx-の状態確認","link":"#ブラウザで-nginx-の状態確認","children":[]},{"level":3,"title":"Nginx サービスを自動起動に設定","slug":"nginx-サービスを自動起動に設定","link":"#nginx-サービスを自動起動に設定","children":[]}]}],"relativePath":"aws/ec2/nginx.md","lastUpdated":1677726733000}'),c={name:"aws/ec2/nginx.md"},p=e(`<h1 id="nginx-セットアップ" tabindex="-1">Nginx セットアップ <a class="header-anchor" href="#nginx-セットアップ" aria-hidden="true">#</a></h1><h2 id="インストール" tabindex="-1">インストール <a class="header-anchor" href="#インストール" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Amazon Linux 2022 では、<code>yum</code> も使えますが、せっかくだから、後継の <code>dnf</code> を使います。</p><p>※実際は違いがないらしいですが、、</p></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+i+`" alt="Nginxインストール"></p><p>現時点で <code>1.22</code> バージョンになっています</p><h2 id="起動" tabindex="-1">起動 <a class="header-anchor" href="#起動" aria-hidden="true">#</a></h2><h3 id="nginx-サービスを起動" tabindex="-1">Nginx サービスを起動 <a class="header-anchor" href="#nginx-サービスを起動" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="nginx-サービス状態確認" tabindex="-1">Nginx サービス状態確認 <a class="header-anchor" href="#nginx-サービス状態確認" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+l+'" alt="Nginxサービス状態"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>●</code> が表示されたら、正常動いている状態。</p><p><code>○</code> が表示されたら、起動していない状態。</p></div><h3 id="ブラウザで-nginx-の状態確認" tabindex="-1">ブラウザで Nginx の状態確認 <a class="header-anchor" href="#ブラウザで-nginx-の状態確認" aria-hidden="true">#</a></h3><p>ブラウザから EC2 インスタンスのアドレスをアクセスして、下記のような画面が表示されたら、OK.</p><p><img src="'+t+`" alt="ブラウザでNginx状態確認"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>https</code> はまだ未設定なので、<code>http</code> しか表示できません。</p></div><h3 id="nginx-サービスを自動起動に設定" tabindex="-1">Nginx サービスを自動起動に設定 <a class="header-anchor" href="#nginx-サービスを自動起動に設定" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">chkconfig</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,19),o=[p];function r(d,h,g,u,x,b){return a(),s("div",null,o)}const _=n(c,[["render",r]]);export{C as __pageData,_ as default};