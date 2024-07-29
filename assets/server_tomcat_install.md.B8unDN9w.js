import{_ as a,c as s,o as i,a2 as e}from"./chunks/framework.BX_emVE_.js";const u=JSON.parse('{"title":"Tomcat のインストール","description":"","frontmatter":{},"headers":[],"relativePath":"server/tomcat/install.md","filePath":"server/tomcat/install.md","lastUpdated":1707472303000}'),t={name:"server/tomcat/install.md"},n=e('<h1 id="tomcat-のインストール" tabindex="-1">Tomcat のインストール <a class="header-anchor" href="#tomcat-のインストール" aria-label="Permalink to &quot;Tomcat のインストール&quot;">​</a></h1><h2 id="amazon-linux-2023でインストール" tabindex="-1">Amazon Linux 2023でインストール <a class="header-anchor" href="#amazon-linux-2023でインストール" aria-label="Permalink to &quot;Amazon Linux 2023でインストール&quot;">​</a></h2><h3 id="インストール" tabindex="-1">インストール <a class="header-anchor" href="#インストール" aria-label="Permalink to &quot;インストール&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tomcat9</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="サービス起動" tabindex="-1">サービス起動 <a class="header-anchor" href="#サービス起動" aria-label="Permalink to &quot;サービス起動&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tomcat9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="tomcatを自動起動に設定" tabindex="-1">Tomcatを自動起動に設定 <a class="header-anchor" href="#tomcatを自動起動に設定" aria-label="Permalink to &quot;Tomcatを自動起動に設定&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chkconfig</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tomcat9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',8),l=[n];function h(r,o,d,p,c,k){return i(),s("div",null,l)}const b=a(t,[["render",h]]);export{u as __pageData,b as default};
