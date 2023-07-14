import{_ as n,o as s,c as a,e}from"./app-aba6d367.js";const i="/vuepress/assets/vuepress-28-e471803c.png",t="/vuepress/assets/vuepress-29-4200ddfa.png",l="/vuepress/assets/vuepress-30-7ca6ea64.png",p="/vuepress/assets/vuepress-31-313ee72c.png",c="/vuepress/assets/vuepress-32-94f1d9f4.png",d="/vuepress/assets/vuepress-33-46fa285f.png",o={},u=e(`<h1 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h1><p>我们可以通过 <code>Frontmatter</code> 来覆盖当前页面的 <code>lang</code>, <code>title</code>, <code>description</code> 等属性</p><p>从而建立一个专属自己的主页</p><p>基本的示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
<span class="token key atrule">title</span><span class="token punctuation">:</span> 页面的标题
<span class="token key atrule">description</span><span class="token punctuation">:</span> 页面的描述</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt=""></p><h3 id="设置首页" tabindex="-1"><a class="header-anchor" href="#设置首页" aria-hidden="true">#</a> 设置首页</h3><p>设定该页面是 <code>首页</code> 还是 <code>普通页面</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>默认关闭，是普通页面，即文档页，有侧边栏</p><p>设置为 true ，就是首页，无侧边栏</p></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们的首页就设定好了，我们依次添加其他元素来完善主页</p><p><img src="`+t+`" alt=""></p><h3 id="图片路径" tabindex="-1"><a class="header-anchor" href="#图片路径" aria-hidden="true">#</a> 图片路径</h3><p>默认的路径是public文件夹，首页图片的引用方式 二选一</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
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
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+l+`" alt=""></p><h3 id="特性列表" tabindex="-1"><a class="header-anchor" href="#特性列表" aria-hidden="true">#</a> 特性列表</h3><p>用 <code>features</code> 配置首页特性列表</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 简洁至上
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue 驱动
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 高性能
    <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+p+`" alt=""></p><h3 id="页脚" tabindex="-1"><a class="header-anchor" href="#页脚" aria-hidden="true">#</a> 页脚</h3><p>用 <code>footer</code> 配置首页的页脚，一般就是版权和备案信息</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2018<span class="token punctuation">-</span>present Evan You</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但有一个特殊情况，要备案的话需要有跳转，这里直接打 <code>&lt;/a&gt;</code> 标签不能用</p><p>我们将页脚的html开启，然后书写备案信息</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footerHtml</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">footer</span><span class="token punctuation">:</span> Copyright © 2023 备案号：&lt;a href=&quot;https<span class="token punctuation">:</span>//beian.miit.gov.cn/&quot;<span class="token punctuation">&gt;</span>京<span class="token important">****号&lt;/a&gt;</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+c+`" alt=""></p><h3 id="内容" tabindex="-1"><a class="header-anchor" href="#内容" aria-hidden="true">#</a> 内容</h3><p>官方文档在这里加入了一个代码块</p><p>我们后面会细说，先直接复制了看效果吧!</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>你不想加，也可以像写markdown一样添加内容</p><p>注意：markdown内容要放在<code>Frontmatter</code> 以外</p></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> 像数 1, 2, 3 一样容易</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><p><img src="`+d+`" alt=""></p><h3 id="上个页面" tabindex="-1"><a class="header-anchor" href="#上个页面" aria-hidden="true">#</a> 上个页面</h3><p>上一个页面的链接，会自动根据侧边栏配置进行推断</p><p>你也可以手动配配置</p><p>输入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,64),r=[u];function v(m,k){return s(),a("div",null,r)}const g=n(o,[["render",v],["__file","frontmatter.html.vue"]]);export{g as default};
