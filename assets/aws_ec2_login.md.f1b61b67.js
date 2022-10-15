import{_ as s,c as a,o as e,a as n}from"./app.d5ad85b3.js";var p="/assets/new-role.a9c9c29a.png",l="/assets/policy.b52726df.png",i="/assets/add-role.8b8fd56c.png",r="/assets/role-update.35c3b464.png",c="/assets/ssm.98e7df1f.png",o="/assets/ec2-login.62cb4217.png",t="/assets/session-login.98f24d37.png";const M=JSON.parse('{"title":"EC2 \u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u63A5\u7D9A","description":"","frontmatter":{},"headers":[{"level":2,"title":"SSH \u3067\u63A5\u7D9A","slug":"ssh-\u3067\u63A5\u7D9A"},{"level":2,"title":"SSM \u63A5\u7D9A","slug":"ssm-\u63A5\u7D9A"},{"level":3,"title":"amazon-ssm-agent\u30B5\u30FC\u30D3\u30B9\u8D77\u52D5","slug":"amazon-ssm-agent\u30B5\u30FC\u30D3\u30B9\u8D77\u52D5"},{"level":3,"title":"SSM \u30ED\u30FC\u30EB\u4F5C\u6210","slug":"ssm-\u30ED\u30FC\u30EB\u4F5C\u6210"},{"level":3,"title":"EC2\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306BSSM\u30ED\u30FC\u30EB\u8FFD\u52A0","slug":"ec2\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306Bssm\u30ED\u30FC\u30EB\u8FFD\u52A0"},{"level":3,"title":"AWS Systems Manager \u30BB\u30C3\u30C8\u30A2\u30C3\u30D7","slug":"aws-systems-manager-\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7"},{"level":3,"title":"EC2 \u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u63A5\u7D9A","slug":"ec2-\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u63A5\u7D9A-1"}],"relativePath":"aws/ec2/login.md","lastUpdated":1665827834000}'),d={name:"aws/ec2/login.md"},m=n(`<h1 id="ec2-\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u63A5\u7D9A" tabindex="-1">EC2 \u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u63A5\u7D9A <a class="header-anchor" href="#ec2-\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u63A5\u7D9A" aria-hidden="true">#</a></h1><h2 id="ssh-\u3067\u63A5\u7D9A" tabindex="-1">SSH \u3067\u63A5\u7D9A <a class="header-anchor" href="#ssh-\u3067\u63A5\u7D9A" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">chmod 600 XXXX.pem</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh -i XXXX.pem ec2-user@EC2\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306EIP\u30A2\u30C9\u30EC\u30B9</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u30AD\u30FC\u30DA\u30A2\u30D5\u30A1\u30A4\u30EB\u306E\u6A29\u9650\u304C open \u3059\u304E\u308B\u3068\u30A8\u30E9\u30FC\u306B\u306A\u308B\u306E\u3067\u3001<code>600</code> \u6A29\u9650\u3067\u5341\u5206\u3067\u3057\u3087\u3046\u3002</p><p><code>XXXX.pem</code> \u306F\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u8D77\u52D5\u6642\u6307\u5B9A\u3057\u305F\u30AD\u30FC\u30DA\u30A2\u3067\u3059\u3002</p></div><h2 id="ssm-\u63A5\u7D9A" tabindex="-1">SSM \u63A5\u7D9A <a class="header-anchor" href="#ssm-\u63A5\u7D9A" aria-hidden="true">#</a></h2><h3 id="amazon-ssm-agent\u30B5\u30FC\u30D3\u30B9\u8D77\u52D5" tabindex="-1">amazon-ssm-agent\u30B5\u30FC\u30D3\u30B9\u8D77\u52D5 <a class="header-anchor" href="#amazon-ssm-agent\u30B5\u30FC\u30D3\u30B9\u8D77\u52D5" aria-hidden="true">#</a></h3><p>SSM \u63A5\u7D9A\u306F <code>amazon-ssm-agent</code> \u30B5\u30FC\u30D3\u30B9\u304C\u5FC5\u8981\u3067\u3059\u3002 Amazon Linux 2022 \u3067\u30C7\u30D5\u30A9\u30EB\u30C8\u4E0A\u8A18\u30B5\u30FC\u30D3\u30B9\u304C\u672A\u8D77\u52D5\u306A\u306E\u3067\u3001\u8D77\u52D5\u3057\u307E\u3057\u3087\u3046\u3002</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">service amazon-ssm-agent start</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u518D\u8D77\u52D5\u3057\u3066\u3082\u81EA\u52D5\u8D77\u52D5\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">chkconfig amazon-ssm-agent on</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="ssm-\u30ED\u30FC\u30EB\u4F5C\u6210" tabindex="-1">SSM \u30ED\u30FC\u30EB\u4F5C\u6210 <a class="header-anchor" href="#ssm-\u30ED\u30FC\u30EB\u4F5C\u6210" aria-hidden="true">#</a></h3><ol><li><p>\u300CIAM\u300D\u21D2\u300C\u30ED\u30FC\u30EB\u300D\u3092\u958B\u304F</p></li><li><p>\u300C\u30ED\u30FC\u30EB\u3092\u4F5C\u6210\u300D\u62BC\u4E0B</p><p><img src="`+p+'" alt="\u30ED\u30FC\u30EB\u3092\u4F5C\u6210"></p></li><li><p>\u4FE1\u983C\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u9078\u629E</p><p>\u4FE1\u983C\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BF\u30A4\u30D7\u306F <code>AWS \u306E\u30B5\u30FC\u30D3\u30B9</code> \u3092\u9078\u629E</p><p>\u30E6\u30FC\u30B9\u30B1\u30FC\u30B9\u306F <code>EC2</code> \u3092\u9078\u629E</p><p>\u300C\u6B21\u3078\u300D\u62BC\u4E0B</p></li><li><p>\u8A31\u53EF\u3092\u8FFD\u52A0</p><p><code>SSM</code> \u3067\u691C\u7D22\u3057\u3066\u3001<code>AmazonEC2RoleforSSM</code> \u3068 <code>AmazonSSMManagedInstanceCore</code> \u3092\u9078\u629E</p><p><img src="'+l+'" alt="\u30DD\u30EA\u30B7\u30FC\u9078\u629E"></p><p>\u300C\u6B21\u3078\u300D\u62BC\u4E0B</p></li><li><p>\u540D\u524D\u3001\u78BA\u8A8D\u3001\u304A\u3088\u3073\u4F5C\u6210</p><h5 id="\u30ED\u30FC\u30EB\u540D" tabindex="-1">\u30ED\u30FC\u30EB\u540D <a class="header-anchor" href="#\u30ED\u30FC\u30EB\u540D" aria-hidden="true">#</a></h5><p>\u81EA\u7531\u306B\u8A2D\u5B9A\u3059\u308C\u3070\u3044\u3044\u3001\u4E00\u65E6 <code>SSM</code> \u306B\u3057\u307E\u3059\u3002</p><p>\u307B\u304B\u306E\u8A2D\u5B9A\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067OK\u306A\u306E\u3067\u3001\u305D\u306E\u307E\u307E\u300C\u30ED\u30FC\u30EB\u3092\u4F5C\u6210\u300D\u62BC\u4E0B</p></li></ol><h3 id="ec2\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306Bssm\u30ED\u30FC\u30EB\u8FFD\u52A0" tabindex="-1">EC2\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306BSSM\u30ED\u30FC\u30EB\u8FFD\u52A0 <a class="header-anchor" href="#ec2\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306Bssm\u30ED\u30FC\u30EB\u8FFD\u52A0" aria-hidden="true">#</a></h3><ol><li><p>\u300CIAM \u30ED\u30FC\u30EB\u3092\u5909\u66F4\u300D\u958B\u304F</p><p><img src="'+i+'" alt="IAM \u30ED\u30FC\u30EB\u3092\u5909\u66F4"></p></li><li><p>\u30ED\u30FC\u30EB\u66F4\u65B0</p><p>\u4F5C\u6210\u3057\u305F SSM \u30ED\u30FC\u30EB\u3092\u9078\u629E\u3057\u3066\u3001\u300C\u30ED\u30FC\u30EB\u306E\u66F4\u65B0\u300D\u62BC\u4E0B</p><p><img src="'+r+'" alt="\u30ED\u30FC\u30EB\u66F4\u65B0"></p></li></ol><h3 id="aws-systems-manager-\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7" tabindex="-1">AWS Systems Manager \u30BB\u30C3\u30C8\u30A2\u30C3\u30D7 <a class="header-anchor" href="#aws-systems-manager-\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7" aria-hidden="true">#</a></h3><ol><li><p>\u300CSystems Manager\u300D\u21D2\u300C\u9AD8\u901F\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u300D\u3092\u958B\u304F</p><p><img src="'+c+'" alt="SSM \u30BB\u30C3\u30C8\u30A2\u30C3\u30D7"></p></li><li><p>Host Management \u306E\u300C\u4F5C\u6210\u300D\u62BC\u4E0B</p><p>\u5168\u90E8\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3044\u3044\u306E\u3067\u3001\u305D\u306E\u307E\u307E\u300C\u4F5C\u6210\u300D\u30DC\u30BF\u30F3\u62BC\u4E0B</p></li></ol><h3 id="ec2-\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u63A5\u7D9A-1" tabindex="-1">EC2 \u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u63A5\u7D9A <a class="header-anchor" href="#ec2-\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u63A5\u7D9A-1" aria-hidden="true">#</a></h3><p><img src="'+o+'" alt="EC2 \u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u63A5\u7D9A"></p><p><code>\u30BB\u30C3\u30B7\u30E7\u30F3\u30DE\u30CD\u30FC\u30B8\u30E3</code> \u30BF\u30D6\u306E\u300C\u63A5\u7D9A\u300D\u30DC\u30BF\u30F3\u62BC\u4E0B</p><p><img src="'+t+'" alt="\u30BB\u30C3\u30B7\u30E7\u30F3\u30DE\u30CD\u30FC\u30B8\u30E3\u3067\u30ED\u30B0\u30A4\u30F3"></p><p>\u6B63\u5E38\u306B\u30ED\u30B0\u30A4\u30F3\u3067\u304D\u308B\u306F\u305A\u3001\u304A\u697D\u3057\u307F\u306B\uFF01</p>',21),h=[m];function g(S,_,u,b,v,f){return e(),a("div",null,h)}var A=s(d,[["render",g]]);export{M as __pageData,A as default};
