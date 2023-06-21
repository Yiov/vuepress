import{_ as o,r as e,o as i,c as l,b as n,d as s,a,e as t}from"./app-dacd4370.js";const u="/vuepress/assets/vuepress-36-ad1f4ff8.png",r="/vuepress/assets/vuepress-37-83d44ec7.png",d="/vuepress/assets/vuepress-38-04c66bb1.png",k={},v=t(`<h1 id="样式美化" tabindex="-1"><a class="header-anchor" href="#样式美化" aria-hidden="true">#</a> 样式美化</h1><div class="custom-container warning"><p class="custom-container-title">更新时间</p><p>最近更新：2023-3-26</p><p>搭建版本：v2.0-beta.61</p></div><h2 id="palette-文件" tabindex="-1"><a class="header-anchor" href="#palette-文件" aria-hidden="true">#</a> Palette 文件</h2><div class="custom-container tip"><p class="custom-container-title">说明</p><p>若无必要，不建议修改</p><p>修改方式请参照style，一样的</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ styles
│  │      └─ palette.scss   &lt;--- 样式变量
└─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以利用它来覆盖默认主题的预定义 SASS 变量</p><details class="custom-container details"><summary>点击查看预定义CSS变量</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// responsive breakpoints</span>
<span class="token property"><span class="token variable">$MQNarrow</span></span><span class="token punctuation">:</span> 959px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$MQMobile</span></span><span class="token punctuation">:</span> 719px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$MQMobileNarrow</span></span><span class="token punctuation">:</span> 419px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="style-文件" tabindex="-1"><a class="header-anchor" href="#style-文件" aria-hidden="true">#</a> Style 文件</h2><p>我们可以通过css变量覆盖默认主题的css变量</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>官方给的路径，是让我们新建一个 <code>styles</code> 文件夹，然后新建一个 <code>index.scss</code> 文件</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ styles
│  │      └─ index.scss   &lt;--- css变量路径
└─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为页面亮色和暗色两种模式，所以我们必须同时考虑两个主题色的替换</p><p>在 <code>index.scss</code>文件中添加2个引用</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&#39;vars&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">@use</span> <span class="token string">&#39;vars-dark&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后新建两个文件：<code>vars.scss</code> 和 <code>vars-dark.scss</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>vars.scss 复制亮色变量代码，粘贴保存</p><p>vars-dark.scss 复制暗色变量代码，粘贴保存</p></div><details class="custom-container details"><summary>点击查看亮色CSS变量</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">:root </span><span class="token punctuation">{</span>
    <span class="token comment">// 按钮颜色</span>
    <span class="token property">--c-brand</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span>
    <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #4abf8a<span class="token punctuation">;</span>
  
    <span class="token comment">// 背景颜色</span>
    <span class="token property">--c-bg</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
    <span class="token property">--c-bg-light</span><span class="token punctuation">:</span> #f3f4f5<span class="token punctuation">;</span>
    <span class="token property">--c-bg-lighter</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span>
    <span class="token property">--c-bg-dark</span><span class="token punctuation">:</span> #ebebec<span class="token punctuation">;</span>
    <span class="token property">--c-bg-darker</span><span class="token punctuation">:</span> #e6e6e6<span class="token punctuation">;</span>
    <span class="token property">--c-bg-navbar</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-bg-sidebar</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-bg-arrow</span><span class="token punctuation">:</span> #cccccc<span class="token punctuation">;</span>
  
    <span class="token comment">// 文字颜色</span>
    <span class="token property">--c-text</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
    <span class="token property">--c-text-accent</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-text-light</span><span class="token punctuation">:</span> #3a5169<span class="token punctuation">;</span>
    <span class="token property">--c-text-lighter</span><span class="token punctuation">:</span> #4e6e8e<span class="token punctuation">;</span>
    <span class="token property">--c-text-lightest</span><span class="token punctuation">:</span> #6a8bad<span class="token punctuation">;</span>
    <span class="token property">--c-text-quote</span><span class="token punctuation">:</span> #999999<span class="token punctuation">;</span>
  
    <span class="token comment">// 边框颜色</span>
    <span class="token property">--c-border</span><span class="token punctuation">:</span> #eaecef<span class="token punctuation">;</span>
    <span class="token property">--c-border-dark</span><span class="token punctuation">:</span> #dfe2e5<span class="token punctuation">;</span>
  
    <span class="token comment">// 自定义容器颜色</span>
    <span class="token property">--c-tip</span><span class="token punctuation">:</span> #42b983<span class="token punctuation">;</span>
    <span class="token property">--c-tip-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-tip-title</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-tip-text</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-tip-text-accent</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-accent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-warning</span><span class="token punctuation">:</span> #ffc310<span class="token punctuation">;</span>
    <span class="token property">--c-warning-bg</span><span class="token punctuation">:</span> #fffae3<span class="token punctuation">;</span>
    <span class="token property">--c-warning-bg-light</span><span class="token punctuation">:</span> #fff3ba<span class="token punctuation">;</span>
    <span class="token property">--c-warning-bg-lighter</span><span class="token punctuation">:</span> #fff0b0<span class="token punctuation">;</span>
    <span class="token property">--c-warning-border-dark</span><span class="token punctuation">:</span> #f7dc91<span class="token punctuation">;</span>
    <span class="token property">--c-warning-details-bg</span><span class="token punctuation">:</span> #fff5ca<span class="token punctuation">;</span>
    <span class="token property">--c-warning-title</span><span class="token punctuation">:</span> #f1b300<span class="token punctuation">;</span>
    <span class="token property">--c-warning-text</span><span class="token punctuation">:</span> #746000<span class="token punctuation">;</span>
    <span class="token property">--c-warning-text-accent</span><span class="token punctuation">:</span> #edb100<span class="token punctuation">;</span>
    <span class="token property">--c-warning-text-light</span><span class="token punctuation">:</span> #c1971c<span class="token punctuation">;</span>
    <span class="token property">--c-warning-text-quote</span><span class="token punctuation">:</span> #ccab49<span class="token punctuation">;</span>
    <span class="token property">--c-danger</span><span class="token punctuation">:</span> #f11e37<span class="token punctuation">;</span>
    <span class="token property">--c-danger-bg</span><span class="token punctuation">:</span> #ffe0e0<span class="token punctuation">;</span>
    <span class="token property">--c-danger-bg-light</span><span class="token punctuation">:</span> #ffcfde<span class="token punctuation">;</span>
    <span class="token property">--c-danger-bg-lighter</span><span class="token punctuation">:</span> #ffc9c9<span class="token punctuation">;</span>
    <span class="token property">--c-danger-border-dark</span><span class="token punctuation">:</span> #f1abab<span class="token punctuation">;</span>
    <span class="token property">--c-danger-details-bg</span><span class="token punctuation">:</span> #ffd4d4<span class="token punctuation">;</span>
    <span class="token property">--c-danger-title</span><span class="token punctuation">:</span> #ed1e2c<span class="token punctuation">;</span>
    <span class="token property">--c-danger-text</span><span class="token punctuation">:</span> #660000<span class="token punctuation">;</span>
    <span class="token property">--c-danger-text-accent</span><span class="token punctuation">:</span> #bd1a1a<span class="token punctuation">;</span>
    <span class="token property">--c-danger-text-light</span><span class="token punctuation">:</span> #b5474d<span class="token punctuation">;</span>
    <span class="token property">--c-danger-text-quote</span><span class="token punctuation">:</span> #c15b5b<span class="token punctuation">;</span>
    <span class="token property">--c-details-bg</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span>
  
    <span class="token comment">// badge组件的颜色</span>
    <span class="token property">--c-badge-tip</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-tip<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-badge-warning</span><span class="token punctuation">:</span> #ecc808<span class="token punctuation">;</span>
    <span class="token property">--c-badge-warning-text</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--c-badge-danger</span><span class="token punctuation">:</span> #dc2626<span class="token punctuation">;</span>
    <span class="token property">--c-badge-danger-text</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token comment">// 过渡变量</span>
    <span class="token property">--t-color</span><span class="token punctuation">:</span> 0.3s ease<span class="token punctuation">;</span>
    <span class="token property">--t-transform</span><span class="token punctuation">:</span> 0.3s ease<span class="token punctuation">;</span>
  
    <span class="token comment">// 代码块变量</span>
    <span class="token property">--code-bg-color</span><span class="token punctuation">:</span> #282c34<span class="token punctuation">;</span>
    <span class="token property">--code-hl-bg-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--code-ln-color</span><span class="token punctuation">:</span> #9e9e9e<span class="token punctuation">;</span>
    <span class="token property">--code-ln-wrapper-width</span><span class="token punctuation">:</span> 3.5rem<span class="token punctuation">;</span>
  
    <span class="token comment">// 字体变量</span>
    <span class="token property">--font-family</span><span class="token punctuation">:</span> -apple-system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> <span class="token string">&#39;Segoe UI&#39;</span><span class="token punctuation">,</span> Roboto<span class="token punctuation">,</span> Oxygen<span class="token punctuation">,</span>
      Ubuntu<span class="token punctuation">,</span> Cantarell<span class="token punctuation">,</span> <span class="token string">&#39;Fira Sans&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Droid Sans&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Helvetica Neue&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">--font-family-code</span><span class="token punctuation">:</span> Consolas<span class="token punctuation">,</span> Monaco<span class="token punctuation">,</span> <span class="token string">&#39;Andale Mono&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ubuntu Mono&#39;</span><span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>
  
    <span class="token comment">// 布局变量</span>
    <span class="token property">--navbar-height</span><span class="token punctuation">:</span> 3.6rem<span class="token punctuation">;</span>
    <span class="token property">--navbar-padding-v</span><span class="token punctuation">:</span> 0.7rem<span class="token punctuation">;</span>
    <span class="token property">--navbar-padding-h</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
    <span class="token property">--sidebar-width</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span>
    <span class="token property">--sidebar-width-mobile</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--sidebar-width<span class="token punctuation">)</span> <span class="token operator">*</span> 0.82<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--content-width</span><span class="token punctuation">:</span> 740px<span class="token punctuation">;</span>
    <span class="token property">--homepage-width</span><span class="token punctuation">:</span> 960px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 插件：返回顶部</span>
  <span class="token selector">.back-to-top </span><span class="token punctuation">{</span>
    <span class="token property">--back-to-top-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--back-to-top-color-hover</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 插件：docsearch</span>
  <span class="token selector">.DocSearch </span><span class="token punctuation">{</span>
    <span class="token property">--docsearch-primary-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-highlight-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-muted-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-quote<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-container-background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>9<span class="token punctuation">,</span> 10<span class="token punctuation">,</span> 17<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-modal-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-searchbox-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-lighter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-searchbox-focus-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-searchbox-shadow</span><span class="token punctuation">:</span> inset 0 0 0 2px <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-hit-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-hit-active-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-hit-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-hit-shadow</span><span class="token punctuation">:</span> 0 1px 3px 0 <span class="token function">var</span><span class="token punctuation">(</span>--c-border-dark<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--docsearch-footer-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 插件：外部链接图标</span>
  <span class="token selector">.external-link-icon </span><span class="token punctuation">{</span>
    <span class="token property">--external-link-icon-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-quote<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 插件：图片缩放</span>
  <span class="token selector">.medium-zoom-overlay </span><span class="token punctuation">{</span>
    <span class="token property">--medium-zoom-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 插件：进度条</span>
  <span class="token selector">#nprogress </span><span class="token punctuation">{</span>
    <span class="token property">--nprogress-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 插件：pwa弹窗组件</span>
  <span class="token selector">.pwa-popup </span><span class="token punctuation">{</span>
    <span class="token property">--pwa-popup-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--pwa-popup-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--pwa-popup-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--pwa-popup-shadow</span><span class="token punctuation">:</span> 0 4px 16px <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--pwa-popup-btn-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--pwa-popup-btn-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--pwa-popup-btn-hover-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 插件：本地搜索</span>
  <span class="token selector">.search-box </span><span class="token punctuation">{</span>
    <span class="token property">--search-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--search-accent-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--search-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--search-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-border<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token property">--search-item-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-lighter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--search-item-focus-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>点击查看暗黑模式CSS变量</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">html.dark </span><span class="token punctuation">{</span>
  <span class="token comment">// 按钮颜色</span>
  <span class="token property">--c-brand</span><span class="token punctuation">:</span> #3aa675<span class="token punctuation">;</span>
  <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #349469<span class="token punctuation">;</span>

  <span class="token comment">// 背景颜色</span>
  <span class="token property">--c-bg</span><span class="token punctuation">:</span> #22272e<span class="token punctuation">;</span>
  <span class="token property">--c-bg-light</span><span class="token punctuation">:</span> #2b313a<span class="token punctuation">;</span>
  <span class="token property">--c-bg-lighter</span><span class="token punctuation">:</span> #262c34<span class="token punctuation">;</span>
  <span class="token property">--c-bg-dark</span><span class="token punctuation">:</span> #343b44<span class="token punctuation">;</span>
  <span class="token property">--c-bg-darker</span><span class="token punctuation">:</span> #37404c<span class="token punctuation">;</span>

  <span class="token comment">// 文字颜色</span>
  <span class="token property">--c-text</span><span class="token punctuation">:</span> #adbac7<span class="token punctuation">;</span>
  <span class="token property">--c-text-light</span><span class="token punctuation">:</span> #96a7b7<span class="token punctuation">;</span>
  <span class="token property">--c-text-lighter</span><span class="token punctuation">:</span> #8b9eb0<span class="token punctuation">;</span>
  <span class="token property">--c-text-lightest</span><span class="token punctuation">:</span> #8094a8<span class="token punctuation">;</span>

  <span class="token comment">// 边框颜色</span>
  <span class="token property">--c-border</span><span class="token punctuation">:</span> #3e4c5a<span class="token punctuation">;</span>
  <span class="token property">--c-border-dark</span><span class="token punctuation">:</span> #34404c<span class="token punctuation">;</span>

  <span class="token comment">// 自定义容器颜色</span>
  <span class="token property">--c-tip</span><span class="token punctuation">:</span> #318a62<span class="token punctuation">;</span>
  <span class="token property">--c-warning</span><span class="token punctuation">:</span> #e0ad15<span class="token punctuation">;</span>
  <span class="token property">--c-warning-bg</span><span class="token punctuation">:</span> #2d2f2d<span class="token punctuation">;</span>
  <span class="token property">--c-warning-bg-light</span><span class="token punctuation">:</span> #423e2a<span class="token punctuation">;</span>
  <span class="token property">--c-warning-bg-lighter</span><span class="token punctuation">:</span> #44442f<span class="token punctuation">;</span>
  <span class="token property">--c-warning-border-dark</span><span class="token punctuation">:</span> #957c35<span class="token punctuation">;</span>
  <span class="token property">--c-warning-details-bg</span><span class="token punctuation">:</span> #39392d<span class="token punctuation">;</span>
  <span class="token property">--c-warning-title</span><span class="token punctuation">:</span> #fdca31<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text</span><span class="token punctuation">:</span> #d8d96d<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text-accent</span><span class="token punctuation">:</span> #ffbf00<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text-light</span><span class="token punctuation">:</span> #ddb84b<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text-quote</span><span class="token punctuation">:</span> #ccab49<span class="token punctuation">;</span>
  <span class="token property">--c-danger</span><span class="token punctuation">:</span> #fc1e38<span class="token punctuation">;</span>
  <span class="token property">--c-danger-bg</span><span class="token punctuation">:</span> #39232c<span class="token punctuation">;</span>
  <span class="token property">--c-danger-bg-light</span><span class="token punctuation">:</span> #4b2b35<span class="token punctuation">;</span>
  <span class="token property">--c-danger-bg-lighter</span><span class="token punctuation">:</span> #553040<span class="token punctuation">;</span>
  <span class="token property">--c-danger-border-dark</span><span class="token punctuation">:</span> #a25151<span class="token punctuation">;</span>
  <span class="token property">--c-danger-details-bg</span><span class="token punctuation">:</span> #482936<span class="token punctuation">;</span>
  <span class="token property">--c-danger-title</span><span class="token punctuation">:</span> #fc2d3b<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text</span><span class="token punctuation">:</span> #ea9ca0<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text-accent</span><span class="token punctuation">:</span> #fd3636<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text-light</span><span class="token punctuation">:</span> #d9777c<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text-quote</span><span class="token punctuation">:</span> #d56b6b<span class="token punctuation">;</span>
  <span class="token property">--c-details-bg</span><span class="token punctuation">:</span> #323843<span class="token punctuation">;</span>

  <span class="token comment">// badge组件的颜色</span>
  <span class="token property">--c-badge-warning</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-warning<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-badge-warning-text</span><span class="token punctuation">:</span> #3c2e05<span class="token punctuation">;</span>
  <span class="token property">--c-badge-danger</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-danger<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-badge-danger-text</span><span class="token punctuation">:</span> #401416<span class="token punctuation">;</span>

  <span class="token comment">// 代码块变量</span>
  <span class="token property">--code-hl-bg-color</span><span class="token punctuation">:</span> #363b46<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 插件：本地搜索</span>
<span class="token selector">html.dark .DocSearch </span><span class="token punctuation">{</span>
  <span class="token property">--docsearch-logo-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-shadow</span><span class="token punctuation">:</span> inset 1px 1px 0 0 #2c2e40<span class="token punctuation">,</span> 0 3px 8px 0 #000309<span class="token punctuation">;</span>
  <span class="token property">--docsearch-key-shadow</span><span class="token punctuation">:</span> inset 0 -2px 0 0 #282d55<span class="token punctuation">,</span> inset 0 0 1px 1px #51577d<span class="token punctuation">,</span>
    0 2px 2px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 4<span class="token punctuation">,</span> 9<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-key-gradient</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>-225deg<span class="token punctuation">,</span> #444950<span class="token punctuation">,</span> #1c1e21<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-footer-shadow</span><span class="token punctuation">:</span> inset 0 1px 0 0 <span class="token function">rgba</span><span class="token punctuation">(</span>73<span class="token punctuation">,</span> 76<span class="token punctuation">,</span> 106<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">,</span>
    0 -4px 8px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>按照自己的需求对颜色进行更改，保存后如果没有发生变化，就在配置里引用一下</p><p>已经变了，就不用这段代码</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">//========logo路径========//</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> 
  <span class="token comment">//favicon图标</span>
  <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//自定义css样式</span>
  <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&#39;stylesheet&#39;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&#39;/styles/index.scss&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),b=t(`<div class="custom-container tip"><p class="custom-container-title">说明</p><p>style代码里不要含有//等注释符号</p></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">&lt;style&gt;
:root </span><span class="token punctuation">{</span>
    <span class="token property">--c-brand</span><span class="token punctuation">:</span> #046abd<span class="token punctuation">;</span>
    <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #046abd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt=""></p><p>其他页面也是可以更改的，可以参照官方进行更改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原始路径：node_modules\\@vuepress\\theme-default\\lib\\client\\styles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="代码精简" tabindex="-1"><a class="header-anchor" href="#代码精简" aria-hidden="true">#</a> 代码精简</h2><p>上面我们发现引用可以index进行引用，那么我们其他代码是否可以呢，以便达到代码简化</p><p>我们以<code>侧边栏导航</code>为例，看目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ configs
│  │      └─ index.ts     &lt;--- 主配置文件
│  │      └─ sidebar.ts   &lt;--- 侧边栏配置文件
└─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建一个 <code>configs</code> 文件夹，然后再新建 <code>index.ts</code> 和 <code>sidebar.ts</code> 文件</p><p>在 <code>index.ts</code> 文件中写</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./sidebar&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>sidebar.ts</code> 文件中写</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> SidebarConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>

<span class="token comment">//将这一段导航定义为：sidebarA</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> sidebarA<span class="token operator">:</span> SidebarConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//原先侧边栏config的配置复制过来</span>
    <span class="token string-property property">&#39;/guide/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">&#39;指南&#39;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;/guide/README.md&#39;</span><span class="token punctuation">,</span> 
            <span class="token string">&#39;/guide/getting-started.md&#39;</span><span class="token punctuation">,</span> 
            <span class="token string">&#39;/guide/configuration.md&#39;</span><span class="token punctuation">,</span> 
            <span class="token string">&#39;/guide/page.md&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;/guide/markdown.md&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;/guide/assets.md&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;/guide/beautification.md&#39;</span><span class="token punctuation">,</span> 
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//折叠开关</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后我们回到 <code>config.ts</code> 里去引用一下就OK了</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sidebarA <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./configs/index.js&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//删掉原来的引用侧边栏</span>
    sidebar<span class="token operator">:</span> sidebarA<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的我们还可以进行导航栏的简化，这里就不演示了</p><h2 id="项目徽标" tabindex="-1"><a class="header-anchor" href="#项目徽标" aria-hidden="true">#</a> 项目徽标</h2><p>无论文档还是github项目都会见到这种</p><p><img src="`+r+'" alt=""></p>',20),m={href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[n("code",null,"serch"),s(" 处输入你的github项目链接，选择要生成的徽标，生成后，选择Markdown格式即可")],-1),h=n("p",null,[n("img",{src:d,alt:""})],-1),y={class:"custom-container tip"},f=n("p",{class:"custom-container-title"},"说明",-1),x=n("p",null,"其他徽标：",-1),w={href:"https://github.com/Ileriayo/markdown-badges",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/Envoy-VC/awesome-badges",target:"_blank",rel:"noopener noreferrer"},M=t(`<h2 id="组件替换" tabindex="-1"><a class="header-anchor" href="#组件替换" aria-hidden="true">#</a> 组件替换</h2><p>对某个布局不满意，我们可以直接替换</p><p>我们以 <code>主页</code> 布局演示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ components
│  │      └─ MyHome.vue     &lt;--- 主页组件
└─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建一个 <code>components</code> 文件夹，再新建一个 <code>MyHome.vue</code> 文件</p><p>在 <code>MyHome.vue</code> 文件中写入</p><p>默认主题将所有非全局的组件都注册了一个带 <code>@theme</code> 前缀的 <code>alias</code></p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>例如，Home.vue 的别名是 @theme/Home.vue</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/utils&#39;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> defaultTheme <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//组件覆盖</span>
  alias<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;@theme/HomeFooter.vue&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./components/MyHomeFooter.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原始路径：node_modules\\@vuepress\\theme-default\\lib\\client\\components
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function S(E,A){const c=e("Badge"),p=e("ExternalLinkIcon");return i(),l("div",null,[v,n("p",null,[s("另一种是直接在页面引用style代码，比如：在 "),a(c,{type:"warning",text:"首页README.md文件",vertical:"middle"}),s(" 里添加")]),b,n("p",null,[s("官网："),n("a",m,[s("https://shields.io/"),a(p)])]),g,h,n("div",y,[f,x,n("p",null,[n("a",w,[s("https://github.com/Ileriayo/markdown-badges"),a(p)])]),n("p",null,[n("a",_,[s("https://github.com/Envoy-VC/awesome-badges"),a(p)])])]),M])}const C=o(k,[["render",S],["__file","beautification.html.vue"]]);export{C as default};
