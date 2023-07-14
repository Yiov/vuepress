import{_ as o,r as i,o as u,c as d,b as n,d as s,a,w as e,e as l}from"./app-f47aef16.js";const r="/vuepress/assets/vuepress-39-5d4e7981.png",v="/vuepress/assets/vuepress-40-eed51098.png",m={},k=n("h1",{id:"静态部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#静态部署","aria-hidden":"true"},"#"),s(" 静态部署")],-1),b=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"更新时间"),n("p",null,"最近更新：2023-7-3"),n("p",null,"搭建版本：v2.0-beta.63")],-1),h={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html",target:"_blank",rel:"noopener noreferrer"},g=l(`<h2 id="base" tabindex="-1"><a class="header-anchor" href="#base" aria-hidden="true">#</a> Base</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>base必须配置，否则打包会丢失css样式！！</p><p>根目录配置 <code>/</code>，那么对应 <code>https://yiov.github.io/</code></p><p>仓库 <code>vitepress</code> 配置 <code>/vitepress/</code> ，那么对应 <code>https://yiov.github.io/vitepress</code></p></div><p>我们根据自己的需求，选择相应的的配置</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">//网站部署的路径，默认根目录</span>
  <span class="token comment">// base: &#39;/vuepress/&#39;, //网站部署到github的vuepress这个仓库里</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果你base设置成其他仓库后，你的fav图标也要变动一下</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">&#39;/vuepress/&#39;</span><span class="token punctuation">,</span> <span class="token comment">//网站部署在vuepress仓库</span>

  head<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> 
  <span class="token comment">//favicon图标也要改成仓库名路径，否则丢失</span>
  <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&#39;/vuepress/images/logo.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置工作流" tabindex="-1"><a class="header-anchor" href="#配置工作流" aria-hidden="true">#</a> 配置工作流</h2><p>新建文件 <code>.github/workflows/docs.yml</code> ，将下面yml信息粘贴进去</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
├─ .github
│    └─ workflows
│         └─ docs.yml  &lt;--- yml工作流
└─ .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),_={class:"custom-container tip"},y=n("p",{class:"custom-container-title"},"注意",-1),f={href:"https://docs.github.com/zh/actions",target:"_blank",rel:"noopener noreferrer"},x=l(`<div class="custom-container warning"><p class="custom-container-title">注意</p><p>经过反复测试，还是没搞定，于是弃用了</p><p>这是一个已经配置好的工作流，自己记得删掉注释！！！</p><p>实际是github分配了一个虚拟机给你使用，里面的ubuntu系统以及pnpm都是虚拟机使用的，与自己的无关，不要动就行</p></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 每当 push 到 main 分支时触发部署</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token comment"># 手动触发部署</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 pnpm 版本</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span>
          <span class="token comment"># 使用 pnpm 安装依赖</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 node 版本</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token comment"># 缓存 pnpm 依赖</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm

      <span class="token comment"># 运行构建脚本</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm docs<span class="token punctuation">:</span>build

      <span class="token comment"># 查看 workflow 的文档来获取更多信息</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署到 gh-pages 分支</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="网站部署" tabindex="-1"><a class="header-anchor" href="#网站部署" aria-hidden="true">#</a> 网站部署</h2><p>如果不想要自动化部署到网站，可以通过命令打包</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>默认的构建输出目录 <code>.vuepress/dist</code></p></div>`,5),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(` docs:build
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(` docs:build
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(` docs:build
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),N=n("p",null,[s("打包完成后，在 "),n("code",null,"docs/.vuepress/dist"),s(" 目录，将"),n("code",null,"dist"),s("上传到网站或者仓库即可")],-1),C=n("p",null,[n("img",{src:r,alt:""})],-1),I=n("p",null,"手动上传到github的，需要在设置-page里把分支改成main，默认root，保存等创建成功后即可获得访问链接",-1),V=n("p",null,[n("img",{src:v,alt:""})],-1);function E(H,T){const c=i("ExternalLinkIcon"),t=i("CodeGroupItem"),p=i("CodeGroup");return u(),d("div",null,[k,b,n("p",null,[s("主要讲一下GitHub，其他的方式都大同小异，"),n("a",h,[s("更多部署方式可以参考官方文档"),a(c)])]),g,n("div",_,[y,n("p",null,[s(".github 与 docs为同级目录，有兴趣"),n("a",f,[s("GitHub Actions 深入了解"),a(c)])])]),x,a(p,null,{default:e(()=>[a(t,{title:"pnpm"},{default:e(()=>[w]),_:1}),a(t,{title:"yarn"},{default:e(()=>[G]),_:1}),a(t,{title:"npm"},{default:e(()=>[B]),_:1})]),_:1}),N,C,I,V])}const j=o(m,[["render",E],["__file","assets.html.vue"]]);export{j as default};
