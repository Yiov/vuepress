import{_ as l,r as a,o as d,c as r,b as s,d as n,a as e,w as t,e as p}from"./app-7380034c.js";const u="/vuepress/assets/vuepress-13-f7495e5b.png",v="/vuepress/assets/vuepress-14-08c03cb2.png",m="/vuepress/assets/vuepress-15-2e71c154.png",k="/vuepress/assets/vuepress-16-93c104ef.png",g="/vuepress/assets/vuepress-17-b188097f.png",b="/vuepress/assets/vuepress-18-8ebf76c8.png",h="/vuepress/assets/vuepress-19-fd9d3290.png",f={},_=p(`<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2023-6-28</p><p>搭建版本：v2.0-beta.63</p></div><p>完成搭建后，我们就对页面进行配置</p><h2 id="站点配置" tabindex="-1"><a class="header-anchor" href="#站点配置" aria-hidden="true">#</a> 站点配置</h2><p>在<code>.vuepress</code>目录下创建一个 <code>config.ts</code>文件</p><div class="custom-container tip"><p class="custom-container-title">TS和JS</p><p>官方的文件目录里列表的也是config.ts，作者推荐的也是ts</p><p>JavaScript 格式为 config.js</p><p>TypeScript 格式为 config.ts</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.ts   &lt;--- 配置文件
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们安装了vscode，直接用它打开 <code>通过code打开</code>，新建<code>config.ts</code>文件</p>`,8),x={href:"https://yiov.github.io/daily/VSCode/",target:"_blank",rel:"noopener noreferrer"},y=p('<p><img src="'+u+'" alt=""></p><p><img src="'+v+`" alt=""></p><p>复制下面代码，粘贴并保存！</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">&#39;你好， VuePress ！&#39;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;这是我的第一个 VuePress 站点&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt=""></p><p><code>Ctrl</code> + ` 键，打开vscode终端，重启一次</p>',6),C=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#开发环境"),n(`
`),s("span",{class:"token function"},"pnpm"),n(` docs:dev
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),w=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#开发环境"),n(`
`),s("span",{class:"token function"},"yarn"),n(` docs:dev
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),q=p('<div class="custom-container tip"><p class="custom-container-title">使用说明</p><p>每次配置完都需要重启才能生效</p><p>方向键 <code>↑键</code> ，可快捷调用上次命令</p></div><p><img src="'+k+'" alt=""></p><p>标签栏位置就有变化了</p><p><img src="'+g+`" alt=""></p><h2 id="配置文件-可选" tabindex="-1"><a class="header-anchor" href="#配置文件-可选" aria-hidden="true">#</a> 配置文件（可选）</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>除非你很了解它，否则不要轻易改动</p></div><p>在 <code>package.json</code> 里添加</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">//绝对路径，my-config名称可以自己改</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs --config doc/.vuepress/my-config.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt=""></p><p>你也可以选择命令行添加</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vuepress dev docs <span class="token parameter variable">--config</span> my-config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="客户端配置文件-可选" tabindex="-1"><a class="header-anchor" href="#客户端配置文件-可选" aria-hidden="true">#</a> 客户端配置文件(可选)</h2><p>像我这种小白，基本很难用到了，有些代码基础的可以了解一下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  ├─ client.ts   &lt;--- 客户端配置文件
│  │  └─ config.ts
│  └─ README.md
├─ .gitignore
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤也是一样的，在 <code>.vuepress</code> 目录下新建一个 <code>client.ts</code>文件</p><p>一个基础的客户端配置文件是这样的：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+'" alt=""></p>',18);function j(E,V){const c=a("ExternalLinkIcon"),i=a("CodeGroupItem"),o=a("CodeGroup");return d(),r("div",null,[_,s("blockquote",null,[s("p",null,[n("鼠标右键没有，是因为你没有"),s("a",x,[n("安装vscode"),e(c)])])]),y,e(o,null,{default:t(()=>[e(i,{title:"pnpm"},{default:t(()=>[C]),_:1}),e(i,{title:"yarn"},{default:t(()=>[w]),_:1})]),_:1}),q])}const N=l(f,[["render",j],["__file","configuration.html.vue"]]);export{N as default};
