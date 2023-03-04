import{_ as s,c as a,o as e,a as n}from"./app.0a213bc2.js";const m=JSON.parse('{"title":"パッケージマネジャー","description":"","frontmatter":{},"headers":[{"level":2,"title":"Homebrew","slug":"homebrew","link":"#homebrew","children":[{"level":3,"title":"説明","slug":"説明","link":"#説明","children":[]},{"level":3,"title":"インストール方法","slug":"インストール方法","link":"#インストール方法","children":[]},{"level":3,"title":"コマンド説明","slug":"コマンド説明","link":"#コマンド説明","children":[]}]}],"relativePath":"env/pkg.md","lastUpdated":1677907770000}'),l={name:"env/pkg.md"},p=n(`<h1 id="パッケージマネジャー" tabindex="-1">パッケージマネジャー <a class="header-anchor" href="#パッケージマネジャー" aria-hidden="true">#</a></h1><h2 id="homebrew" tabindex="-1">Homebrew <a class="header-anchor" href="#homebrew" aria-hidden="true">#</a></h2><h3 id="説明" tabindex="-1">説明 <a class="header-anchor" href="#説明" aria-hidden="true">#</a></h3><p>macOS（またはLinux）用パッケージマネージャー</p><h3 id="インストール方法" tabindex="-1">インストール方法 <a class="header-anchor" href="#インストール方法" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">/bin/bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>M1(M2) 搭載の Mac の場合、更に以下のコマンドが必要です。</p></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eval &quot;$(/opt/homebrew/bin/brew shellenv)&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="コマンド説明" tabindex="-1">コマンド説明 <a class="header-anchor" href="#コマンド説明" aria-hidden="true">#</a></h3><h4 id="バージョン確認" tabindex="-1">バージョン確認 <a class="header-anchor" href="#バージョン確認" aria-hidden="true">#</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="パッケージインストール" tabindex="-1">パッケージインストール <a class="header-anchor" href="#パッケージインストール" aria-hidden="true">#</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">パッケージ名</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>例：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,15),r=[p];function t(o,i,c,d,h,b){return e(),a("div",null,r)}const C=s(l,[["render",t]]);export{m as __pageData,C as default};
