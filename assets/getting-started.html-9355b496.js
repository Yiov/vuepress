import{_ as d,r as c,o as p,c as u,b as s,d as e,a as n,w as a,e as r}from"./app-7380034c.js";const m="/vuepress/assets/vuepress-02-efe0c1e0.png",v="/vuepress/assets/vuepress-03-d196ca29.png",h="/vuepress/assets/vuepress-04-4db78d01.png",b="/vuepress/assets/vuepress-05-18d7bb53.png",g="/vuepress/assets/vuepress-06-0352a621.png",_="/vuepress/assets/vuepress-07-c8bdcb52.png",k="/vuepress/assets/vuepress-08-29c0a631.png",f="/vuepress/assets/vuepress-09-57534de2.png",x="/vuepress/assets/vuepress-10-8fc3cffd.png",y="/vuepress/assets/vuepress-11-2ead265e.png",w="/vuepress/assets/vuepress-12-d4477a18.png",E={},q=r('<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2023-6-28</p><p>搭建版本：v2.0-beta.63</p></div><p>那我们就来学习如何的搭建vuepress，就是你现在看到的这种文档网站</p><h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>已经安装 或者 熟练了，可以不用看此步骤</p></div>',5),C={href:"https://yiov.github.io/website/nodejs#window%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},G=s("code",null,"v18.14.2",-1),V={href:"https://yiov.github.io/daily/VSCode/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://yiov.github.io/daily/git",target:"_blank",rel:"noopener noreferrer"},B=r('<h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>已经安装 或者 熟练了，可以不用看此步骤</p></div><h3 id="yarn-pnpm" tabindex="-1"><a class="header-anchor" href="#yarn-pnpm" aria-hidden="true">#</a> yarn/pnpm</h3>',3),A={href:"https://www.yarnpkg.cn/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://pnpm.io/zh/",target:"_blank",rel:"noopener noreferrer"},I=s("blockquote",null,[s("p",null,"本次用yarn演示，不过建议还是用pnpm，速度会快很多")],-1),N=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#安装pnpm"),e(`
`),s("span",{class:"token function"},"npm"),e(),s("span",{class:"token function"},"install"),e(),s("span",{class:"token parameter variable"},"-g"),e(),s("span",{class:"token function"},"pnpm"),e(`
`),s("span",{class:"token comment"},"#查看版本号"),e(`
`),s("span",{class:"token function"},"pnpm"),e(),s("span",{class:"token parameter variable"},"-v"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),R=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#安装yarn"),e(`
`),s("span",{class:"token function"},"npm"),e(),s("span",{class:"token function"},"install"),e(),s("span",{class:"token parameter variable"},"-g"),e(),s("span",{class:"token function"},"yarn"),e(`
`),s("span",{class:"token comment"},"#查看版本号"),e(`
`),s("span",{class:"token function"},"yarn"),e(),s("span",{class:"token parameter variable"},"-v"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),S=r('<p><img src="'+m+'" alt=""></p><h3 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录" aria-hidden="true">#</a> 创建目录</h3><p>先WIN+R键，输入cmd</p><p><img src="'+v+`" alt=""></p><p>确定一个盘符，我是放f盘符，回车</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#盘符可以自己定</span>
f:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><p>创建vuepress目录，名字可以自己定</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#目录可以自定义</span>
<span class="token function">mkdir</span> vuepress

<span class="token comment">#目录和上面保持一致</span>
<span class="token builtin class-name">cd</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p><p>我为了便于分类我还创建了github目录，然后又在目录里新建了vuepress文件夹</p><p>觉得麻烦的可以直接电脑创建</p><details class="custom-container details"><summary>我的目录参考</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建Github目录并进入</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> Github <span class="token operator">&amp;</span> <span class="token builtin class-name">cd</span> Github

<span class="token comment">#创建vuepress目录并进入</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> vuepress <span class="token operator">&amp;</span> <span class="token builtin class-name">cd</span> vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></div><p><img src="`+b+'" alt=""></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>亦可以电脑创建好一个空文件夹</p><p>在当前文件夹地址栏输入<code>cmd</code> 快捷进入，或者右键 <code>vscode</code> 打开，ctrl+` 进入终端</p></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3>',14),L=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#初始化pnpm"),e(`
`),s("span",{class:"token function"},"pnpm"),e(` init
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),M=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#初始化yarn 一路回车"),e(`
`),s("span",{class:"token function"},"yarn"),e(` init

`),s("span",{class:"token comment"},"#或者用一键y命令"),e(`
`),s("span",{class:"token comment"},"#yarn init -y"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),P=s("p",null,[s("img",{src:g,alt:""})],-1),z=s("h3",{id:"安装依赖",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装依赖","aria-hidden":"true"},"#"),e(" 安装依赖")],-1),H={class:"custom-container tip"},T=s("p",{class:"custom-container-title"},"vite说明",-1),W={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},J=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#安装 新增webpack/vue和@vuepress/client"),e(`
`),s("span",{class:"token function"},"pnpm"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress@next @vuepress/client@next vue webpack
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),K=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#安装含Vite"),e(`
`),s("span",{class:"token function"},"yarn"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress@next

`),s("span",{class:"token comment"},"#卸载"),e(`
`),s("span",{class:"token comment"},"#yarn remove vuepress"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),O=r('<p><img src="'+_+`" alt=""></p><h3 id="脚本命令" tabindex="-1"><a class="header-anchor" href="#脚本命令" aria-hidden="true">#</a> 脚本命令</h3><p>在 <code>package.json</code> 中添加一些 scripts 命令，保存</p><div class="custom-container tip"><p class="custom-container-title">命令解析</p><p>执行命令 <code>docs:dev</code>，就会运行 <code>vuepress dev docs</code></p><p>执行命令 <code>docs:build</code>，就会运行 <code>vuepress build docs</code></p></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt=""></p><h3 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore" aria-hidden="true">#</a> .gitignore</h3><p>添加.gitignore文件，主要用于上传到gitee/github</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>.gitignore 里放的是上传时git的忽略项</p><p>建议先使用cmd，使用vscode有可能会出现乱码</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#将依赖文件添加到.gitignore文件中</span>
<span class="token builtin class-name">echo</span> node_modules <span class="token operator">&gt;&gt;</span> .gitignore

<span class="token comment">#将临时目录添加到.gitignore文件中</span>
<span class="token builtin class-name">echo</span> .temp <span class="token operator">&gt;&gt;</span> .gitignore

<span class="token comment">#将缓存目录添加到.gitignore文件中</span>
<span class="token builtin class-name">echo</span> .cache <span class="token operator">&gt;&gt;</span> .gitignore

<span class="token comment">#将静态目录添加到.gitignore文件中</span>
<span class="token builtin class-name">echo</span> dist <span class="token operator">&gt;&gt;</span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+`" alt=""></p><div class="custom-container tip"><p class="custom-container-title">Github上传未忽略dist文件夹</p><p>原因：vscode输入命令导致编码错误</p><p>解决：Github Desktop - Repository settings - ignored files</p><p>输入我们忽略的dist文件即可，save保存即可</p><div class="language-忽略项 line-numbers-mode" data-ext="忽略项"><pre class="language-忽略项"><code>node_modules
.temp
.cache
dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="创建文档" tabindex="-1"><a class="header-anchor" href="#创建文档" aria-hidden="true">#</a> 创建文档</h3><div class="custom-container warning"><p class="custom-container-title">注意</p><p>建议先使用cmd，使用vscode有可能会出现乱码</p><p>实在搞不定，就手动新建一样的</p></div><p>创建你的第一篇文档</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token comment"># Hello VuePress &gt; docs/README.md</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+x+'" alt=""></p><h2 id="本地启动" tabindex="-1"><a class="header-anchor" href="#本地启动" aria-hidden="true">#</a> 本地启动</h2><p>在本地启动服务器，来开发你的文档网站</p><div class="custom-container tip"><p class="custom-container-title">如何退出</p><p>本次执行的其实就是我们在 <a href="#%E8%84%9A%E6%9C%AC%E5%91%BD%E4%BB%A4">脚本命令</a> 中的命令</p><p>另：<code>ctrl+c</code> 即可退出开发模式</p></div>',20),Q=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#开发环境"),e(`
`),s("span",{class:"token function"},"pnpm"),e(` docs:dev
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),U=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#开发环境"),e(`
`),s("span",{class:"token function"},"yarn"),e(` docs:dev
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),X=s("p",null,"VuePress会在本地启动一个热重载的开发服务器，当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新",-1),Y={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},Z=s("p",null,[s("img",{src:y,alt:""})],-1),$=s("p",null,"成功看到页面，就说明我们的vuepress就搭建完成了",-1),ss=s("p",null,[s("img",{src:w,alt:""})],-1);function es(ns,as){const t=c("ExternalLinkIcon"),o=c("Badge"),i=c("CodeGroupItem"),l=c("CodeGroup");return p(),u("div",null,[q,s("ul",null,[s("li",null,[s("p",null,[s("a",C,[e("安装nodejs"),n(t)]),e(" [必装，"),G,e(" 报错，于是退选了"),n(o,{type:"warning",text:"v16.19.1",vertical:"middle"}),e("]")])]),s("li",null,[s("p",null,[s("a",V,[e("安装vscode"),n(t)]),e(" [建议安装]")])]),s("li",null,[s("p",null,[s("a",j,[e("安装git"),n(t)]),e(" [可选]")])])]),B,s("p",null,[e("通过 npm 安装 "),s("a",A,[e("yarn"),n(t)]),e(" 或者 新出的"),s("a",D,[e("pnpm"),n(t)])]),I,n(l,null,{default:a(()=>[n(i,{title:"pnpm"},{default:a(()=>[N]),_:1}),n(i,{title:"yarn"},{default:a(()=>[R]),_:1})]),_:1}),S,n(l,null,{default:a(()=>[n(i,{title:"pnpm"},{default:a(()=>[L]),_:1}),n(i,{title:"yarn"},{default:a(()=>[M]),_:1})]),_:1}),P,z,s("div",H,[T,s("p",null,[e("从v2版本开始，默认使用的是 "),s("a",W,[e("Vite"),n(t)]),e(" 打包工具，"),s("a",F,[e("webpack"),n(t)]),e("编译慢，不建议使用")])]),n(l,null,{default:a(()=>[n(i,{title:"pnpm"},{default:a(()=>[J]),_:1}),n(i,{title:"yarn"},{default:a(()=>[K]),_:1})]),_:1}),O,n(l,null,{default:a(()=>[n(i,{title:"pnpm"},{default:a(()=>[Q]),_:1}),n(i,{title:"yarn"},{default:a(()=>[U]),_:1})]),_:1}),X,s("p",null,[s("a",Y,[e("http://localhost:8080"),n(t)])]),Z,$,ss])}const is=d(E,[["render",es],["__file","getting-started.html.vue"]]);export{is as default};
