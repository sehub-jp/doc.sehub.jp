import{_ as t,o as a,c as e,N as s}from"./chunks/framework.45fdf5ea.js";const _=JSON.parse('{"title":"権限","description":"","frontmatter":{},"headers":[],"relativePath":"linux/cmd/permission.md","lastUpdated":1689381046000}'),r={name:"linux/cmd/permission.md"},l=s('<h1 id="権限" tabindex="-1">権限 <a class="header-anchor" href="#権限" aria-label="Permalink to &quot;権限&quot;">​</a></h1><h2 id="sudo" tabindex="-1">sudo <a class="header-anchor" href="#sudo" aria-label="Permalink to &quot;sudo&quot;">​</a></h2><h3 id="意味" tabindex="-1">意味 <a class="header-anchor" href="#意味" aria-label="Permalink to &quot;意味&quot;">​</a></h3><p>スーパーユーザ（或いは他のユーザ）の権限でコマンドを実行する</p><h3 id="構文" tabindex="-1">構文 <a class="header-anchor" href="#構文" aria-label="Permalink to &quot;構文&quot;">​</a></h3><p>sudo [オプション] [実行するコマンド]</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上記コマンドはスーパーユーザー権限で php をインストールする</p><h3 id="オプション" tabindex="-1">オプション <a class="header-anchor" href="#オプション" aria-label="Permalink to &quot;オプション&quot;">​</a></h3><table><thead><tr><th>オプション</th><th style="text-align:left;">説明</th></tr></thead><tbody><tr><td>-A<br>--askpass</td><td style="text-align:left;">パスワードを入力する時、コマンドラインではなく、指定されたプログラムを使う</td></tr><tr><td>-b<br>--background</td><td style="text-align:left;">バックグラウンドでコマンドを実行する</td></tr><tr><td>-h<br>--help</td><td style="text-align:left;">ヘルプ情報を表示する</td></tr><tr><td>-u<br>--user</td><td style="text-align:left;">指定されたユーザーの権限でコマンドを実行する</td></tr><tr><td>-i</td><td style="text-align:left;">root権限に切り替え</td></tr></tbody></table>',11),n=[l];function o(d,i,p,c,h,u){return a(),e("div",null,n)}const m=t(r,[["render",o]]);export{_ as __pageData,m as default};