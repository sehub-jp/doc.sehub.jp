import{_ as a,c as s,o as e,N as n}from"./chunks/framework.0799945b.js";const m=JSON.parse('{"title":"入門","description":"","frontmatter":{},"headers":[],"relativePath":"oss/hugo/start.md","lastUpdated":1681448897000}'),t={name:"oss/hugo/start.md"},l=n('<h1 id="入門" tabindex="-1">入門 <a class="header-anchor" href="#入門" aria-label="Permalink to &quot;入門&quot;">​</a></h1><h2 id="サイト作成" tabindex="-1">サイト作成 <a class="header-anchor" href="#サイト作成" aria-label="Permalink to &quot;サイト作成&quot;">​</a></h2><h3 id="testsite-というサイトを作成" tabindex="-1"><code>testsite</code> というサイトを作成 <a class="header-anchor" href="#testsite-というサイトを作成" aria-label="Permalink to &quot;`testsite` というサイトを作成&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">hugo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">site</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">testsite</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="testsite-のルートパスに移動" tabindex="-1"><code>testsite</code> のルートパスに移動 <a class="header-anchor" href="#testsite-のルートパスに移動" aria-label="Permalink to &quot;`testsite` のルートパスに移動&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">testsite</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-リポジトリ初期化" tabindex="-1">Git リポジトリ初期化 <a class="header-anchor" href="#git-リポジトリ初期化" aria-label="Permalink to &quot;Git リポジトリ初期化&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="ananke-テーマを-themes-ディレクトリにクローンし、git-サブモジュールとしてプロジェクトに追加" tabindex="-1">Ananke テーマを themes ディレクトリにクローンし、Git サブモジュールとしてプロジェクトに追加 <a class="header-anchor" href="#ananke-テーマを-themes-ディレクトリにクローンし、git-サブモジュールとしてプロジェクトに追加" aria-label="Permalink to &quot;Ananke テーマを themes ディレクトリにクローンし、Git サブモジュールとしてプロジェクトに追加&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submodule</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/theNewDynamic/gohugo-theme-ananke</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">themes/ananke</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="サイトの設定ファイルに1行を追加し、現在のテーマを指定します" tabindex="-1">サイトの設定ファイルに1行を追加し、現在のテーマを指定します <a class="header-anchor" href="#サイトの設定ファイルに1行を追加し、現在のテーマを指定します" aria-label="Permalink to &quot;サイトの設定ファイルに1行を追加し、現在のテーマを指定します&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">theme = &#39;ananke&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config.toml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="ローカルサーバーを起動して、サイトを確認します" tabindex="-1">ローカルサーバーを起動して、サイトを確認します <a class="header-anchor" href="#ローカルサーバーを起動して、サイトを確認します" aria-label="Permalink to &quot;ローカルサーバーを起動して、サイトを確認します&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">hugo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="コンテンツ追加" tabindex="-1">コンテンツ追加 <a class="header-anchor" href="#コンテンツ追加" aria-label="Permalink to &quot;コンテンツ追加&quot;">​</a></h2><h2 id="サイト設定" tabindex="-1">サイト設定 <a class="header-anchor" href="#サイト設定" aria-label="Permalink to &quot;サイト設定&quot;">​</a></h2><h2 id="サイトを公開" tabindex="-1">サイトを公開 <a class="header-anchor" href="#サイトを公開" aria-label="Permalink to &quot;サイトを公開&quot;">​</a></h2>',17),o=[l];function r(i,p,c,d,h,u){return e(),s("div",null,o)}const C=a(t,[["render",r]]);export{m as __pageData,C as default};
