import{_ as s,c as a,o as e,V as i}from"./chunks/framework.SIcx0bZA.js";const t="/assets/postgres-version.AeXNmIk3.png",n="/assets/postgres14.jLyHr-fH.png",k=JSON.parse('{"title":"Amazon Linux2 で PostgreSQL をインストール","description":"","frontmatter":{},"headers":[],"relativePath":"db/postgresql/install.md","filePath":"db/postgresql/install.md","lastUpdated":1664441256000}'),l={name:"db/postgresql/install.md"},p=i('<h1 id="amazon-linux2-で-postgresql-をインストール" tabindex="-1">Amazon Linux2 で PostgreSQL をインストール <a class="header-anchor" href="#amazon-linux2-で-postgresql-をインストール" aria-label="Permalink to &quot;Amazon Linux2 で PostgreSQL をインストール&quot;">​</a></h1><h2 id="postgresql-のバージョン確認" tabindex="-1">PostgreSQL のバージョン確認 <a class="header-anchor" href="#postgresql-のバージョン確認" aria-label="Permalink to &quot;PostgreSQL のバージョン確認&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list postgres</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上記コマンドで <code>PostgreSQL</code> の関連パケージのバージョンを確認できます。 <img src="'+t+'" alt="Amazon-yum-postgres"></p><p>現在、まだ 9.2 バージョンが分かりました。</p><p>9.2はさすが古すぎるので、<code>amazon-linux-extras</code> を使いましょう。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">amazon-linux-extras</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上記コマンドで <code>amazon-linux-extras</code> のパケージとバージョンを確認できます <img src="'+n+'" alt="Amazon-yum-postgres14"></p><p>よし、バージョン14使えますね🎉</p><h2 id="amazon-linux-extras-で-postgresqlをインストール" tabindex="-1">amazon-linux-extras で PostgreSQLをインストール <a class="header-anchor" href="#amazon-linux-extras-で-postgresqlをインストール" aria-label="Permalink to &quot;amazon-linux-extras で PostgreSQLをインストール&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">amazon-linux-extras</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install postgres14</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>続いて、yum で PostgreSQL のパケージをインストール</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install postgresql-server postgresql-devel</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上記コマンドで PostgreSQL をインストールします。</p><h2 id="初期化" tabindex="-1">初期化 <a class="header-anchor" href="#初期化" aria-label="Permalink to &quot;初期化&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postgresql-setup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> initdb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上記コマンドでデータベースを初期化します。</p><h2 id="サービス起動" tabindex="-1">サービス起動 <a class="header-anchor" href="#サービス起動" aria-label="Permalink to &quot;サービス起動&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postgresql start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="サービス状態確認" tabindex="-1">サービス状態確認 <a class="header-anchor" href="#サービス状態確認" aria-label="Permalink to &quot;サービス状態確認&quot;">​</a></h2><p>サービスが正常に起動できたかどうは下記コマンド確認</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postgresql status</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>緑色の <code>active (running)</code> が表示されたら、OKです。</p><h2 id="サービスを自動起動" tabindex="-1">サービスを自動起動 <a class="header-anchor" href="#サービスを自動起動" aria-label="Permalink to &quot;サービスを自動起動&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chkconfig</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postgresql on</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上記コマンドでサーバー再起動の時、<code>PostgreSQL</code> のサービスが自動起動するようにします。</p>',26),r=[p];function o(h,d,c,u,g,b){return e(),a("div",null,r)}const v=s(l,[["render",o]]);export{k as __pageData,v as default};
