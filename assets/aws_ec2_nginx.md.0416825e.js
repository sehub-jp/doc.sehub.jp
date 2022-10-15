import{_ as s,c as a,o as n,a as e}from"./app.d5ad85b3.js";var i="/assets/install.4d9141e7.png",l="/assets/status.832f2bc1.png",c="/assets/http-status.249741b7.png";const b=JSON.parse('{"title":"Nginx \u30BB\u30C3\u30C8\u30A2\u30C3\u30D7","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB","slug":"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"},{"level":2,"title":"\u8D77\u52D5","slug":"\u8D77\u52D5"},{"level":3,"title":"Nginx \u30B5\u30FC\u30D3\u30B9\u3092\u8D77\u52D5","slug":"nginx-\u30B5\u30FC\u30D3\u30B9\u3092\u8D77\u52D5"},{"level":3,"title":"Nginx \u30B5\u30FC\u30D3\u30B9\u72B6\u614B\u78BA\u8A8D","slug":"nginx-\u30B5\u30FC\u30D3\u30B9\u72B6\u614B\u78BA\u8A8D"},{"level":3,"title":"\u30D6\u30E9\u30A6\u30B6\u3067 Nginx \u306E\u72B6\u614B\u78BA\u8A8D","slug":"\u30D6\u30E9\u30A6\u30B6\u3067-nginx-\u306E\u72B6\u614B\u78BA\u8A8D"},{"level":3,"title":"Nginx \u30B5\u30FC\u30D3\u30B9\u3092\u81EA\u52D5\u8D77\u52D5\u306B\u8A2D\u5B9A","slug":"nginx-\u30B5\u30FC\u30D3\u30B9\u3092\u81EA\u52D5\u8D77\u52D5\u306B\u8A2D\u5B9A"}],"relativePath":"aws/ec2/nginx.md","lastUpdated":1665827834000}'),p={name:"aws/ec2/nginx.md"},r=e(`<h1 id="nginx-\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7" tabindex="-1">Nginx \u30BB\u30C3\u30C8\u30A2\u30C3\u30D7 <a class="header-anchor" href="#nginx-\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7" aria-hidden="true">#</a></h1><h2 id="\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" tabindex="-1">\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB <a class="header-anchor" href="#\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Amazon Linux 2022 \u3067\u306F\u3001<code>yum</code> \u3082\u4F7F\u3048\u307E\u3059\u304C\u3001\u305B\u3063\u304B\u304F\u3060\u304B\u3089\u3001\u5F8C\u7D99\u306E <code>dnf</code> \u3092\u4F7F\u3044\u307E\u3059\u3002</p><p>\u203B\u5B9F\u969B\u306F\u9055\u3044\u304C\u306A\u3044\u3089\u3057\u3044\u3067\u3059\u304C\u3001\u3001</p></div><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">dnf install nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><img src="`+i+`" alt="Nginx\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"></p><p>\u73FE\u6642\u70B9\u3067 <code>1.22</code> \u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u306A\u3063\u3066\u3044\u307E\u3059</p><h2 id="\u8D77\u52D5" tabindex="-1">\u8D77\u52D5 <a class="header-anchor" href="#\u8D77\u52D5" aria-hidden="true">#</a></h2><h3 id="nginx-\u30B5\u30FC\u30D3\u30B9\u3092\u8D77\u52D5" tabindex="-1">Nginx \u30B5\u30FC\u30D3\u30B9\u3092\u8D77\u52D5 <a class="header-anchor" href="#nginx-\u30B5\u30FC\u30D3\u30B9\u3092\u8D77\u52D5" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">service nginx start</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="nginx-\u30B5\u30FC\u30D3\u30B9\u72B6\u614B\u78BA\u8A8D" tabindex="-1">Nginx \u30B5\u30FC\u30D3\u30B9\u72B6\u614B\u78BA\u8A8D <a class="header-anchor" href="#nginx-\u30B5\u30FC\u30D3\u30B9\u72B6\u614B\u78BA\u8A8D" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">service nginx status</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><img src="`+l+'" alt="Nginx\u30B5\u30FC\u30D3\u30B9\u72B6\u614B"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>\u25CF</code> \u304C\u8868\u793A\u3055\u308C\u305F\u3089\u3001\u6B63\u5E38\u52D5\u3044\u3066\u3044\u308B\u72B6\u614B\u3002</p><p><code>\u25CB</code> \u304C\u8868\u793A\u3055\u308C\u305F\u3089\u3001\u8D77\u52D5\u3057\u3066\u3044\u306A\u3044\u72B6\u614B\u3002</p></div><h3 id="\u30D6\u30E9\u30A6\u30B6\u3067-nginx-\u306E\u72B6\u614B\u78BA\u8A8D" tabindex="-1">\u30D6\u30E9\u30A6\u30B6\u3067 Nginx \u306E\u72B6\u614B\u78BA\u8A8D <a class="header-anchor" href="#\u30D6\u30E9\u30A6\u30B6\u3067-nginx-\u306E\u72B6\u614B\u78BA\u8A8D" aria-hidden="true">#</a></h3><p>\u30D6\u30E9\u30A6\u30B6\u304B\u3089 EC2 \u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u3001\u4E0B\u8A18\u306E\u3088\u3046\u306A\u753B\u9762\u304C\u8868\u793A\u3055\u308C\u305F\u3089\u3001OK.</p><p><img src="'+c+`" alt="\u30D6\u30E9\u30A6\u30B6\u3067Nginx\u72B6\u614B\u78BA\u8A8D"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>https</code> \u306F\u307E\u3060\u672A\u8A2D\u5B9A\u306A\u306E\u3067\u3001<code>http</code> \u3057\u304B\u8868\u793A\u3067\u304D\u307E\u305B\u3093\u3002</p></div><h3 id="nginx-\u30B5\u30FC\u30D3\u30B9\u3092\u81EA\u52D5\u8D77\u52D5\u306B\u8A2D\u5B9A" tabindex="-1">Nginx \u30B5\u30FC\u30D3\u30B9\u3092\u81EA\u52D5\u8D77\u52D5\u306B\u8A2D\u5B9A <a class="header-anchor" href="#nginx-\u30B5\u30FC\u30D3\u30B9\u3092\u81EA\u52D5\u8D77\u52D5\u306B\u8A2D\u5B9A" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">chkconfig nginx on</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,19),t=[r];function d(o,g,h,u,x,m){return n(),a("div",null,t)}var _=s(p,[["render",d]]);export{b as __pageData,_ as default};