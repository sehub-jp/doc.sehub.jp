import{_ as s,c as a,o as e,a2 as i}from"./chunks/framework.BX_emVE_.js";const n="/assets/composer-version.DCEFLkUQ.png",m=JSON.parse('{"title":"Composer インストール","description":"","frontmatter":{},"headers":[],"relativePath":"php/composer/install.md","filePath":"php/composer/install.md","lastUpdated":1693881311000}'),p={name:"php/composer/install.md"},t=i(`<h1 id="composer-インストール" tabindex="-1">Composer インストール <a class="header-anchor" href="#composer-インストール" aria-label="Permalink to &quot;Composer インストール&quot;">​</a></h1><h2 id="linux-でインストール" tabindex="-1">Linux でインストール <a class="header-anchor" href="#linux-でインストール" aria-label="Permalink to &quot;Linux でインストール&quot;">​</a></h2><h3 id="インストールファイルのダウンロードと実行" tabindex="-1">インストールファイルのダウンロードと実行 <a class="header-anchor" href="#インストールファイルのダウンロードと実行" aria-label="Permalink to &quot;インストールファイルのダウンロードと実行&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;copy(&#39;https://getcomposer.org/installer&#39;, &#39;composer-setup.php&#39;);&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;if (hash_file(&#39;sha384&#39;, &#39;composer-setup.php&#39;) === &#39;e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02&#39;) { echo &#39;Installer verified&#39;; } else { echo &#39;Installer corrupt&#39;; unlink(&#39;composer-setup.php&#39;); } echo PHP_EOL;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> composer-setup.php</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;unlink(&#39;composer-setup.php&#39;);&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="グローバル設定" tabindex="-1">グローバル設定 <a class="header-anchor" href="#グローバル設定" aria-label="Permalink to &quot;グローバル設定&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> composer.phar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/composer</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="バージョン確認" tabindex="-1">バージョン確認 <a class="header-anchor" href="#バージョン確認" aria-label="Permalink to &quot;バージョン確認&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+n+'" alt="Composerバージョン確認"></p>',9),l=[t];function r(h,o,d,c,k,u){return e(),a("div",null,l)}const F=s(p,[["render",r]]);export{m as __pageData,F as default};
