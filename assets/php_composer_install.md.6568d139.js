import{_ as s,o as a,c as p,Q as e}from"./chunks/framework.419948d5.js";const o="/assets/composer-version.9616c915.png",y=JSON.parse('{"title":"Composer インストール","description":"","frontmatter":{},"headers":[],"relativePath":"php/composer/install.md","filePath":"php/composer/install.md","lastUpdated":1693881311000}'),n={name:"php/composer/install.md"},l=e(`<h1 id="composer-インストール" tabindex="-1">Composer インストール <a class="header-anchor" href="#composer-インストール" aria-label="Permalink to &quot;Composer インストール&quot;">​</a></h1><h2 id="linux-でインストール" tabindex="-1">Linux でインストール <a class="header-anchor" href="#linux-でインストール" aria-label="Permalink to &quot;Linux でインストール&quot;">​</a></h2><h3 id="インストールファイルのダウンロードと実行" tabindex="-1">インストールファイルのダウンロードと実行 <a class="header-anchor" href="#インストールファイルのダウンロードと実行" aria-label="Permalink to &quot;インストールファイルのダウンロードと実行&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">php</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;copy(&#39;https://getcomposer.org/installer&#39;, &#39;composer-setup.php&#39;);&quot;</span></span>
<span class="line"><span style="color:#B392F0;">php</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;if (hash_file(&#39;sha384&#39;, &#39;composer-setup.php&#39;) === &#39;e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02&#39;) { echo &#39;Installer verified&#39;; } else { echo &#39;Installer corrupt&#39;; unlink(&#39;composer-setup.php&#39;); } echo PHP_EOL;&quot;</span></span>
<span class="line"><span style="color:#B392F0;">php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">composer-setup.php</span></span>
<span class="line"><span style="color:#B392F0;">php</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;unlink(&#39;composer-setup.php&#39;);&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">php</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;copy(&#39;https://getcomposer.org/installer&#39;, &#39;composer-setup.php&#39;);&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">php</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;if (hash_file(&#39;sha384&#39;, &#39;composer-setup.php&#39;) === &#39;e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02&#39;) { echo &#39;Installer verified&#39;; } else { echo &#39;Installer corrupt&#39;; unlink(&#39;composer-setup.php&#39;); } echo PHP_EOL;&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">composer-setup.php</span></span>
<span class="line"><span style="color:#6F42C1;">php</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;unlink(&#39;composer-setup.php&#39;);&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="グローバル設定" tabindex="-1">グローバル設定 <a class="header-anchor" href="#グローバル設定" aria-label="Permalink to &quot;グローバル設定&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">composer.phar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/bin/composer</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">composer.phar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/bin/composer</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="バージョン確認" tabindex="-1">バージョン確認 <a class="header-anchor" href="#バージョン確認" aria-label="Permalink to &quot;バージョン確認&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">composer</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">composer</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+o+'" alt="Composerバージョン確認"></p>',9),r=[l];function t(c,i,h,d,u,b){return a(),p("div",null,r)}const E=s(n,[["render",t]]);export{y as __pageData,E as default};