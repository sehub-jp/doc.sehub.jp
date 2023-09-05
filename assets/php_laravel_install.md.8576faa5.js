import{_ as s,o as a,c as l,Q as e}from"./chunks/framework.419948d5.js";const m=JSON.parse('{"title":"インストール","description":"","frontmatter":{},"headers":[],"relativePath":"php/laravel/install.md","filePath":"php/laravel/install.md","lastUpdated":1681448897000}'),p={name:"php/laravel/install.md"},o=e(`<h1 id="インストール" tabindex="-1">インストール <a class="header-anchor" href="#インストール" aria-label="Permalink to &quot;インストール&quot;">​</a></h1><h2 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;MacOS&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>前提：<a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noreferrer">Docker Desktop</a>インストール済</p></div><h3 id="インストール-1" tabindex="-1">インストール <a class="header-anchor" href="#インストール-1" aria-label="Permalink to &quot;インストール&quot;">​</a></h3><p>下記コマンドで最新の Laravel をインストールできます。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://laravel.build/example-app&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://laravel.build/example-app&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>example-app</code> は新規作成するプロジェクト名です。</p><p>新規作成するプロジェクト名には <code>.</code> があると、エラーになるので要注意</p></div><h3 id="起動" tabindex="-1">起動 <a class="header-anchor" href="#起動" aria-label="Permalink to &quot;起動&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">example-app</span></span>
<span class="line"><span style="color:#B392F0;">./vendor/bin/sail</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">example-app</span></span>
<span class="line"><span style="color:#6F42C1;">./vendor/bin/sail</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>起動できたら、<a href="http://localhost/" target="_blank" rel="noreferrer">http://localhost/</a> にアクセスして確認しましょう。</p><h3 id="オプション-サービス選択" tabindex="-1">オプション（サービス選択） <a class="header-anchor" href="#オプション-サービス選択" aria-label="Permalink to &quot;オプション（サービス選択）&quot;">​</a></h3><p><code>with</code> オプションでサービスを指定することができます。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://laravel.build/example-app?with=pgsql,redis&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://laravel.build/example-app?with=pgsql,redis&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使えるサービスは下記となります</p><ul><li>mysql</li><li>pgsql</li><li>mariadb</li><li>redis</li><li>memcached</li><li>meilisearch</li><li>minio</li><li>selenium</li><li>mailpit</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>指定しない場合は、デフォルトで <code>mysql</code>, <code>redis</code>, <code>meilisearch</code>, <code>mailpit</code> と <code>selenium</code> が設定されます。</p></div>`,16),n=[o];function t(c,r,i,d,h,u){return a(),l("div",null,n)}const y=s(p,[["render",t]]);export{m as __pageData,y as default};