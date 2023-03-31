import{_ as s,c as a,o as n,N as l}from"./chunks/framework.0799945b.js";const m=JSON.parse('{"title":"Thymeleafってなに？","description":"","frontmatter":{},"headers":[],"relativePath":"java/springboot/thymeleaf/index.md","lastUpdated":1680242226000}'),p={name:"java/springboot/thymeleaf/index.md"},o=l(`<h1 id="thymeleafってなに" tabindex="-1">Thymeleafってなに？ <a class="header-anchor" href="#thymeleafってなに" aria-label="Permalink to &quot;Thymeleafってなに？&quot;">​</a></h1><h2 id="thymeleaf紹介" tabindex="-1">Thymeleaf紹介 <a class="header-anchor" href="#thymeleaf紹介" aria-label="Permalink to &quot;Thymeleaf紹介&quot;">​</a></h2><p>とりあえず<a href="https://www.thymeleaf.org/" target="_blank" rel="noreferrer">公式ページ</a>見てみましょう</p><blockquote><p>Thymeleaf is a modern server-side Java template engine for both web and standalone environments.</p></blockquote><p>まあ、意味分かりますよね、、</p><p>簡単にまとめてみると</p><ol><li>名前：Thymeleaf　読み方：タイムリーフ</li><li>サーバーサイトの Java テンプレートエンジンの一つ</li><li>Spring Boot で使用推奨されている</li></ol><p>以上。</p><h2 id="導入方法" tabindex="-1">導入方法 <a class="header-anchor" href="#導入方法" aria-label="Permalink to &quot;導入方法&quot;">​</a></h2><h3 id="依頼追加" tabindex="-1">依頼追加 <a class="header-anchor" href="#依頼追加" aria-label="Permalink to &quot;依頼追加&quot;">​</a></h3><p><a href="./../boot-quick-start.html#_11-依頼パケージを選択します">SpringBoot紹介</a>で説明したように、プロジェクト作成時Thymeleafを選択して導入できます。</p><p>もちろん、プロジェクト作成後でも簡単にThymeleafを導入できます。 build.gradle に１行追加するだけです。</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">implementation </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">org.springframework.boot:spring-boot-starter-thymeleaf</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="html-タグ設定" tabindex="-1">Html タグ設定 <a class="header-anchor" href="#html-タグ設定" aria-label="Permalink to &quot;Html タグ設定&quot;">​</a></h3><p>html ファイルの <code>html</code> タグに下記要素を追加</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">xmlns:th=&quot;//www.thymeleaf.org/&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修正後の html ファイルはこんな感じ（2行目）</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ja</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns:th</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//www.thymeleaf.org/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IE=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Spring Boot チュートリアル</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="使ってみよう" tabindex="-1">使ってみよう <a class="header-anchor" href="#使ってみよう" aria-label="Permalink to &quot;使ってみよう&quot;">​</a></h2><h3 id="controller-を修正して画面へメッセージを渡す" tabindex="-1">Controller を修正して画面へメッセージを渡す <a class="header-anchor" href="#controller-を修正して画面へメッセージを渡す" aria-label="Permalink to &quot;Controller を修正して画面へメッセージを渡す&quot;">​</a></h3><p>修正後のコードはこんな感じ（13、14行）</p><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#F78C6C;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">jp</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">sehub</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springboottutorial</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">controller</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">stereotype</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Controller</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">ui</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">Model</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">web</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">bind</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">annotation</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">GetMapping</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">org</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">springframework</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">web</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">bind</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">annotation</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">RequestMapping</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Controller</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">RequestMapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IndexController</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">GetMapping</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Model</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">model</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    model</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addAttribute</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">msg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">これはテスト用のメッセージだよ！</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="画面上で-controller-から渡されたメッセージを表示する" tabindex="-1">画面上で Controller から渡されたメッセージを表示する <a class="header-anchor" href="#画面上で-controller-から渡されたメッセージを表示する" aria-label="Permalink to &quot;画面上で Controller から渡されたメッセージを表示する&quot;">​</a></h3><p>下記ソースを追加する</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">th:text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${msg}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">メッセージ内容</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修正後の html ファイルはこんな感じ（11行は追加された内容）</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ja</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns:th</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//www.thymeleaf.org/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IE=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Spring Boot チュートリアル</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  これは最初のページだよ。</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">th:text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\${msg}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">メッセージ内容</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>じゃあ、画面を開いて、メッセージが表示されるかどうかを確認しよう<br> 絶対表示されるでしょう。。。</p>`,28),e=[o];function t(r,c,D,F,y,i){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{m as __pageData,u as default};