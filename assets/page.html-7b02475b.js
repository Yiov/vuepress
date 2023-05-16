import{_ as p,r as t,o as c,c as o,b as n,d as s,a,w as d,e}from"./app-86b6e97a.js";const u="/vuepress/assets/vuepress-20-75c15925.png",r="/vuepress/assets/vuepress-21-b1af4dbc.png",v="/vuepress/assets/vuepress-22-d6fbf53a.png",m="/vuepress/assets/vuepress-23-362430f8.png",k="/vuepress/assets/vuepress-24-103a42e6.png",g="/vuepress/assets/vuepress-25-f27c5584.png",h="/vuepress/assets/vuepress-26-8612e40c.png",b="/vuepress/assets/vuepress-27-da51b195.png",y="/vuepress/assets/vuepress-34-90bc5bf7.png",f="/vuepress/assets/vuepress-35-ffdc5adb.png",x="/vuepress/assets/vuepress-28-e471803c.png",w="/vuepress/assets/vuepress-29-4200ddfa.png",_="/vuepress/assets/vuepress-30-7ca6ea64.png",E="/vuepress/assets/vuepress-31-313ee72c.png",D="/vuepress/assets/vuepress-32-94f1d9f4.png",L="/vuepress/assets/vuepress-33-46fa285f.png",R={},M=e(`<h1 id="页面" tabindex="-1"><a class="header-anchor" href="#页面" aria-hidden="true">#</a> 页面</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2023-5-14</p><p>搭建版本：v2.0-beta.61</p></div><p>页面总体上就是2种：</p><ul><li><p>首页：无侧边栏，可做宣传页</p></li><li><p>普通页：有侧边栏，可做文档页</p></li></ul><p>接下来，我们就对这两个页面进行配置</p><h2 id="logo" tabindex="-1"><a class="header-anchor" href="#logo" aria-hidden="true">#</a> logo</h2><p>网站布局好了，但是logo即Favicon图标还没有，看下官方的目录表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└─ docs
   └─.vuepress
      └─ public
         └─ images
            └─ logo.png  &lt;- Logo 文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据目录得知logo文件的位置，在 <code>.vuepress</code> 新建一个 <code>public</code> 文件夹，再新建一个 <code>images</code> 文件夹，放入<code>logo.png</code></p><div class="custom-container tip"><p class="custom-container-title">说明：</p><p>官方给的是本地引用，懒人可以直接用远程引用</p><p>没有图片显示，确保你文件夹里有图片</p></div><p>打开 <code>config.ts</code>文件，添加下列代码中的高亮代码</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">//========logo路径========//</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">//远程引用二选一</span>
<span class="token comment">//head: [[&#39;link&#39;, { rel: &#39;icon&#39;, href: &#39;https://vuejs.org/images/logo.png&#39; }]],</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+'" alt=""></p><p><img src="'+r+`" alt=""></p><h2 id="导航栏" tabindex="-1"><a class="header-anchor" href="#导航栏" aria-hidden="true">#</a> 导航栏</h2><p>VuePress有一个开箱即用的默认主题，你需要在你的配置文件中通过 theme 配置项来使用它</p><h3 id="导航标签" tabindex="-1"><a class="header-anchor" href="#导航标签" aria-hidden="true">#</a> 导航标签</h3><p>在 <code>config.ts</code> 中我们先添加一个 <code>首页</code>标签</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
<span class="token comment">//========默认主题配置========//</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 导航栏</span>
    navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+'" alt=""></p><p><img src="'+m+`" alt=""></p><p>如何继续添加其他的导航标签呢，先看目录表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└─ docs
   ├─ guide                     &lt;- 目录：指南
   │  └─ README.md 或 index.md  &lt;- 指南的主页
   └─ README.md                 &lt;- 网站的首页
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在 <code>doc</code> 目录新建一个 <code>guide</code> 目录，然后新建一个 <code>READE.md</code> 文件，里面随便打点内容</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> 这是一个指南</span>

我们在 <span class="token code-snippet code keyword">\`doc\`</span> 目录新建一个 <span class="token code-snippet code keyword">\`guide\`</span> 目录，然后新建一个 <span class="token code-snippet code keyword">\`READE.md\`</span> 文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p><p>目录名都用英文！</p><p>这样，我们的指南标签的路由，就准备好了</p><p>如果访问404了，检查路由是否正确</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">//========默认主题配置========//</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 导航栏</span>
    navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;指南&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;/guide/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+'" alt=""></p><p>其他导航标签添加就不赘述了，如果觉得文字单调，我们还可以添加emoji表情，随便找个网站即可</p>',29),A={href:"https://emojixd.com/",target:"_blank",rel:"noopener noreferrer"},V=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;🧝 指南&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;/guide/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+`" alt=""></p><h3 id="导航数组" tabindex="-1"><a class="header-anchor" href="#导航数组" aria-hidden="true">#</a> 导航数组</h3><p>将原先的 <code>link: &#39;/guide/&#39;</code> 改成 <code>children: [&#39;*.md&#39;]</code> ，如下</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p><code>children</code> 内包含都是md文件，自己按顺序列出即可</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//========默认主题配置========//</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 导航栏</span>
    navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;🧝 指南&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">//link: &#39;/guide/&#39;</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/guide/README.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/getting-started.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/configuration.md&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/guide/page.md&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><p>在此基础上，我们还可以像官网一样，添加一个组名，也就是再嵌套一个children</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//========默认主题配置========//</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 导航栏</span>
    navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;🧝 指南&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">//link: &#39;/guide/&#39;</span>
        <span class="token comment">//children: [&#39;/guide/README.md&#39;, &#39;/guide/getting-started.md&#39;, &#39;/guide/configuration.md&#39;,&#39;/guide/page.md&#39;]</span>
        <span class="token comment">//导航数组</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token comment">//第1组名称(不可点击)</span>
            text<span class="token operator">:</span> <span class="token string">&#39;教程参考&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">//第1组导航标签</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/guide/README.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/getting-started.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/configuration.md&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;/guide/page.md&#39;</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
         <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+`" alt=""></p><p>再继续添加第2组就不演示了，一样在childrren里加</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>我们这里有个小问题，就是<code>前言</code>，也就是guide目录下的README.md，一直处于激活状态，这个是默认主页，除非你用其他md文件</p></div><h3 id="屏蔽页面" tabindex="-1"><a class="header-anchor" href="#屏蔽页面" aria-hidden="true">#</a> 屏蔽页面</h3><div class="custom-container warning"><p class="custom-container-title">注意</p><p>若无必要，不要随意更改，屏蔽后会404，需自行修改路由到其他页面</p><p>比如你不想让别人访问<code>guide目录</code>，即屏蔽掉目录下的<code>README.md</code>，直接用 <code>pagePatterns</code> 修改页面模式</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">//默认配置无需添加</span>
  <span class="token comment">//pagePatterns: [&#39;**/*.md&#39;, &#39;!.vuepress&#39;, &#39;!node_modules&#39;],</span>

  <span class="token comment">//添加一个屏蔽guide目录下的README.md文件</span>
  pagePatterns<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;**/*.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!.vuepress&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!node_modules&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!guide/README.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语言栏" tabindex="-1"><a class="header-anchor" href="#语言栏" aria-hidden="true">#</a> 语言栏</h3><p>要启用 VuePress 的语言支持，首先需要使用如下的文件目录结构</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>实际就是新建一个语言目录，再把根目录所有文档放进去，然后手动翻译</p><p>其他国语言也一样</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docs
├─ README.md       &lt;- 默认主页
└─ en              &lt;- 单独新建一个语言目录 例如:en
   └─ README.md    &lt;- 英文版主页
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在你的 <code>config.ts</code> 中设置 locales 选项：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">//========站点语言配置========//</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//默认语言可以使用 &#39;/&#39; 作为其路径。</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&#39;VuePress&#39;</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">&#39;Vue 驱动的静态网站生成器&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/en/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&#39;VuePress&#39;</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">&#39;Vue-powered Static Site Generator&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+y+`" alt=""></p><p>配置完我们发现一个小细节，就是右上角 <code>Languages</code> ，切换成中文了，还没有汉字显示</p><p>我们需要在<code>默认主题</code>下，配置 <code>selectLanguageName</code> 和 <code>selectLanguageText</code> 来改变</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//多国语言切换</span>
    locales<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;简体中文&#39;</span><span class="token punctuation">,</span>
        selectLanguageText<span class="token operator">:</span> <span class="token string">&#39;选择语言&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;/en/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>
        selectLanguageText<span class="token operator">:</span> <span class="token string">&#39;Language&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+`" alt=""></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这里很多人搞不定，是因为看错了</p><p>站点语言是和语言切换位置不一样</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">//站点语言位置</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//语言切换位置</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="搜索框" tabindex="-1"><a class="header-anchor" href="#搜索框" aria-hidden="true">#</a> 搜索框</h3>`,28),N={href:"https://docsearch.algolia.com/",target:"_blank",rel:"noopener noreferrer"},T={class:"custom-container tip"},P=n("p",{class:"custom-container-title"},"说明",-1),C=n("p",null,[s("需要提交你的网站 URL 来加入 DocSearch 项目才能获得索引，索引成功创建后， DocSearch 团队会将 "),n("code",null,"apiKey"),s(" 和 "),n("code",null,"indexName"),s(" 发送到你的邮箱")],-1),S=n("p",null,"所以，等我们网站搭建完毕后再去提交网址",-1),H=e(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><p>我们可以通过 <code>Frontmatter</code> 来覆盖当前页面的 lang, title, description 等属性</p><p>从而建立一个专属自己的主页</p><p>基本的示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
<span class="token key atrule">title</span><span class="token punctuation">:</span> 页面的标题
<span class="token key atrule">description</span><span class="token punctuation">:</span> 页面的描述</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+x+`" alt=""></p><h3 id="设置首页" tabindex="-1"><a class="header-anchor" href="#设置首页" aria-hidden="true">#</a> 设置首页</h3><p>设定该页面是 <code>首页</code> 还是 <code>普通页面</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>默认关闭，是普通页面，即文档页，有侧边栏</p><p>设置为 true ，就是首页，无侧边栏</p></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们的首页就设定好了，我们依次添加其他元素来完善主页</p><p><img src="`+w+`" alt=""></p><h3 id="图片路径" tabindex="-1"><a class="header-anchor" href="#图片路径" aria-hidden="true">#</a> 图片路径</h3><p>默认的路径是public文件夹，首页图片的引用方式 二选一</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token comment"># Public文件路径 本地引用</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /images/logo.png
<span class="token comment"># URL 远程引用</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//vuejs.org/images/logo.png</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>夜间模式中，单独使用其他的首页图片，示例：</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>有的人logo是黑色的，如果遇到夜间模式就需要单独配置，不然看不到了</p></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">heroImageDark</span><span class="token punctuation">:</span> /images/logo.png</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="首页按钮" tabindex="-1"><a class="header-anchor" href="#首页按钮" aria-hidden="true">#</a> 首页按钮</h3><p>用 <code>actions</code> 配置首页按钮，一般2个是比较舒适的，当然你也可以配置多个</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>text 显示文字</p><p>link 跳转路径</p><p>type 主次类型显示；都赋予值，仅primary默认主要；不赋予值，全部默认主要按钮</p></div><details class="custom-container details"><summary>点击查看 其他type表达</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>主要的：primary

次要的：secondary

第3级：tertiary

第4级：quaternary

第5级：quinary

第6级：senary

第7级：septenary

第8级：octonary

第9级：nonary

第10级：denary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 快速上手
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.html
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 项目简介
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/
    <span class="token key atrule">type</span><span class="token punctuation">:</span> secondary</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+_+`" alt=""></p><h3 id="特性列表" tabindex="-1"><a class="header-anchor" href="#特性列表" aria-hidden="true">#</a> 特性列表</h3><p>用 <code>features</code> 配置首页特性列表</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 简洁至上
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue 驱动
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 高性能
    <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+E+`" alt=""></p><h3 id="页脚" tabindex="-1"><a class="header-anchor" href="#页脚" aria-hidden="true">#</a> 页脚</h3><p>用 <code>footer</code> 配置首页的页脚，一般就是版权和备案信息</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2018<span class="token punctuation">-</span>present Evan You</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但有一个特殊情况，要备案的话需要有跳转，这里直接打 <code>&lt;/a&gt;</code> 标签不能用</p><p>我们将页脚的html开启，然后书写备案信息</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footerHtml</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">footer</span><span class="token punctuation">:</span> Copyright © 2023 备案号：&lt;a href=&quot;https<span class="token punctuation">:</span>//beian.miit.gov.cn/&quot;<span class="token punctuation">&gt;</span>京<span class="token important">****号&lt;/a&gt;</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+D+`" alt=""></p><h3 id="内容" tabindex="-1"><a class="header-anchor" href="#内容" aria-hidden="true">#</a> 内容</h3><p>官方文档在这里加入了一个代码块</p><p>我们后面会细说，先直接复制了看效果吧!</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>你不想加，也可以像写markdown一样添加内容</p><p>注意：markdown内容要放在<code>Frontmatter</code> 以外</p></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> 像数 1, 2, 3 一样容易</span>

:::: code-group
::: code-group-item PNPM
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token comment"># 在你的项目中安装</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next @vuepress/client@next vue

<span class="token comment"># 新建一个 markdown 文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> README.md

<span class="token comment"># 开始写作</span>
<span class="token function">pnpm</span> vuepress dev

<span class="token comment"># 构建静态文件</span>
<span class="token function">pnpm</span> vuepress build</span>
<span class="token punctuation">\`\`\`</span></span>
:::
::: code-group-item YARN
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token comment"># 在你的项目中安装</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next

<span class="token comment"># 新建一个 markdown 文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> README.md

<span class="token comment"># 开始写作</span>
<span class="token function">yarn</span> vuepress dev

<span class="token comment"># 构建静态文件</span>
<span class="token function">yarn</span> vuepress build</span>
<span class="token punctuation">\`\`\`</span></span>
:::
::: code-group-item NPM
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash</span>
<span class="token code-block language-bash"><span class="token comment"># 在你的项目中安装</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next

<span class="token comment"># 新建一个 markdown 文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> README.md

<span class="token comment"># 开始写作</span>
npx vuepress dev

<span class="token comment"># 构建静态文件</span>
npx vuepress build</span>
<span class="token punctuation">\`\`\`</span></span>
:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+L+`" alt=""></p><h3 id="上个页面" tabindex="-1"><a class="header-anchor" href="#上个页面" aria-hidden="true">#</a> 上个页面</h3><p>上一个页面的链接，会自动根据侧边栏配置进行推断</p><p>你也可以手动配配置</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token comment"># NavLink</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span>
  <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started
  <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.html

<span class="token comment"># NavLink - 外部 URL</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span>
  <span class="token key atrule">text</span><span class="token punctuation">:</span> GitHub
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com

<span class="token comment"># 字符串 - 页面文件路径</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.md

<span class="token comment"># 字符串 - 页面文件相对路径</span>
<span class="token key atrule">prev</span><span class="token punctuation">:</span> ../../guide/getting<span class="token punctuation">-</span>started.md</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下个页面" tabindex="-1"><a class="header-anchor" href="#下个页面" aria-hidden="true">#</a> 下个页面</h3><p>下一个页面的链接，会自动根据侧边栏配置进行推断</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token comment"># NavLink</span>
<span class="token key atrule">next</span><span class="token punctuation">:</span>
  <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started
  <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.html

<span class="token comment"># NavLink - 外部 URL</span>
<span class="token key atrule">next</span><span class="token punctuation">:</span>
  <span class="token key atrule">text</span><span class="token punctuation">:</span> GitHub
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com

<span class="token comment"># 字符串 - 页面文件路径</span>
<span class="token key atrule">next</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.md

<span class="token comment"># 字符串 - 页面文件相对路径</span>
<span class="token key atrule">next</span><span class="token punctuation">:</span> ../../guide/getting<span class="token punctuation">-</span>started.md</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h3><p>页面的布局</p><p>如果主题布局无法满足你的需求，你可以使用自定义布局组件。</p><p>示例：</p><p>在 <code>.vuepress/client.ts</code> 文件中注册一个布局组件：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>
<span class="token keyword">import</span> CustomLayout <span class="token keyword">from</span> <span class="token string">&#39;./CustomLayout.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    CustomLayout<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>布局中写</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> CustomLayout</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a> 侧边栏</h2><p>建议是基本都搭建完成后，再来配置此项目</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>这也是vuepress弊端之一，每次都需要手配</p></div><p>最简单的配置</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    sidebar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">//这里填文件路径</span>
      <span class="token string">&#39;/guide/README.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/getting-started.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/configuration.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/page.md&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以加入父目录大标题，将这些文件放入children中</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>还可以添加远程连接引用</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    sidebar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">//父目录包含子文件</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&#39;指南&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;/guide/&#39;</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/guide/README.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/getting-started.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/configuration.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/page.md&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token comment">//子目录远程引用</span>
          text<span class="token operator">:</span> <span class="token string">&#39;github&#39;</span><span class="token punctuation">,</span>
          link<span class="token operator">:</span> <span class="token string">&#39;https://github.com&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">//父目录远程引用</span>
        text<span class="token operator">:</span> <span class="token string">&#39;github&#39;</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">&#39;https://github.com&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同子路径下的页面，使用不同的侧边栏，包括折叠开关</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>多个目录自己挨个添加即可，与guide同级</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    sidebar<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/guide/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">&#39;指南&#39;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/guide/README.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/getting-started.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/configuration.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/guide/page.md&#39;</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//折叠开关</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75);function j(I,G){const i=t("ExternalLinkIcon"),l=t("RouterLink");return c(),o("div",null,[M,n("p",null,[s("EmojiXD："),n("a",A,[s("https://emojixd.com/"),a(i)])]),V,n("p",null,[s("官方文档使用的是 "),n("a",N,[s("Algolia DocSearch"),a(i)]),s("，非常的高大上")]),n("div",T,[P,C,S,n("p",null,[a(l,{to:"/guide/plugin.html#docsearch"},{default:d(()=>[s("☛ 点我查看具体步骤")]),_:1})])]),H])}const q=p(R,[["render",j],["__file","page.html.vue"]]);export{q as default};
