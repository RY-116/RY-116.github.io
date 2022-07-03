import{r as e,o as a,c as p,a as n,b as c,F as o,e as t,d as l}from"./app.6c598b81.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},b=t(`<h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> Vuepress</h1><p>RY</p><p>Welcome To My Blog\uFF01</p><h2 id="\u5173\u4E8E\u90E8\u7F72\u5230github" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u90E8\u7F72\u5230github" aria-hidden="true">#</a> \u5173\u4E8E\u90E8\u7F72\u5230github</h2><p>\u6309github pages\u4E0A\u7684\u8BF4\u660E\u521B\u5EFA\u4ED3\u5E93\u540E\uFF0C\u4E0D\u9700\u8981clone\u7B49\u64CD\u4F5C</p><p>\u5728\u4E0E<code>package.json</code>\u540C\u7EA7\u5904\u521B\u5EFA<code>deploy.sh</code>\uFF0C\u5176\u5185\u5BB9\u4E3A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF</span>
<span class="token builtin class-name">set</span> -e

<span class="token comment"># \u751F\u6210\u9759\u6001\u6587\u4EF6</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># \u5982\u679C\u53D1\u5E03\u5230 https://&lt;USERNAME&gt;.github.io  \u586B\u5199\u4F60\u521A\u521A\u521B\u5EFA\u7684\u4ED3\u5E93\u5730\u5740</span>
<span class="token function">git</span> push -f https://github.com/RY-116/RY-116.github.io.git master

<span class="token builtin class-name">cd</span> -

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u5728<code>package.json</code>\u4E2D\u7684<code>&quot;scripts&quot;</code>\u4E2D\u52A0\u4E0A<code>&quot;deploy&quot;: &quot;bash deploy.sh&quot;</code></p><p>\u7136\u540E\u5728<code>gitbash</code>\u4E2D\u6267\u884C<code>npm run deploy</code></p><p><em>\u6CE8\uFF1Awebstorm\u4E2D\u6267\u884C\u4F1A\u51FA\u9519</em></p><p>\u9047\u5230\u4E86\u8FDE\u63A5\u4E0D\u4E0Agithub\u95EE\u9898</p><p>\u6253\u5F00VPN\u540E\u8BBE\u7F6E\u4EE3\u7406</p><p><code> git config --global http.proxy &#39;socks5://127.0.0.1:4781&#39;</code></p><p><code> git config --global https.proxy &#39;socks5://127.0.0.1:4781&#39;</code></p><p><em>4781\u662F\u6211\u7684VPN\u7684socks\u7AEF\u53E3\u53F7</em></p><p>\u5373\u53EF</p><p><em>\u53E6\u5916\uFF0C\u5728VuePress\u7684MarkDown\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528Vue\u7EC4\u4EF6</em></p>`,17),u={href:"https://www.bilibili.com/",target:"_blank",rel:"noopener noreferrer"},d=l("BillBill");function m(h,g){const s=e("ExternalLinkIcon");return a(),p(o,null,[b,n("p",null,[n("a",u,[d,c(s)])])],64)}var _=r(i,[["render",m]]);export{_ as default};
