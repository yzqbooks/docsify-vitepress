import{_ as n,c as s,o as a,a as t}from"./app.fbe85f26.js";const m='{"title":"\u79BB\u7EBF\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA serviceWorker","slug":"\u521B\u5EFA-serviceworker"},{"level":2,"title":"\u6CE8\u518C","slug":"\u6CE8\u518C"},{"level":2,"title":"\u4F53\u9A8C\u4E00\u4E0B","slug":"\u4F53\u9A8C\u4E00\u4E0B"}],"relativePath":"pwa.md"}',p={},e=t(`<h1 id="\u79BB\u7EBF\u6A21\u5F0F" tabindex="-1">\u79BB\u7EBF\u6A21\u5F0F <a class="header-anchor" href="#\u79BB\u7EBF\u6A21\u5F0F" aria-hidden="true">#</a></h1><p><a href="https://developers.google.com/web/progressive-web-apps/" target="_blank" rel="noopener noreferrer">Progressive Web Apps</a>(PWA) \u662F\u4E00\u9879\u878D\u5408 Web \u548C Native \u5E94\u7528\u5404\u9879\u4F18\u70B9\u7684\u89E3\u51B3\u65B9\u6848\u3002\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u5176\u652F\u6301\u79BB\u7EBF\u529F\u80FD\u7684\u7279\u70B9\uFF0C\u8BA9\u6211\u4EEC\u7684\u7F51\u7AD9\u53EF\u4EE5\u5728\u4FE1\u53F7\u5DEE\u6216\u8005\u79BB\u7EBF\u72B6\u6001\u4E0B\u6B63\u5E38\u8FD0\u884C\u3002 \u8981\u4F7F\u7528\u5B83\u4E5F\u975E\u5E38\u5BB9\u6613\u3002</p><h2 id="\u521B\u5EFA-serviceworker" tabindex="-1">\u521B\u5EFA serviceWorker <a class="header-anchor" href="#\u521B\u5EFA-serviceworker" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u5DF2\u7ECF\u6574\u7406\u597D\u4E86\u4E00\u4EFD\u4EE3\u7801\uFF0C\u4F60\u53EA\u9700\u8981\u5728\u7F51\u7AD9\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>sw.js</code> \u6587\u4EF6\uFF0C\u5E76\u7C98\u8D34\u4E0B\u9762\u7684\u4EE3\u7801\u3002</p><p><em>sw.js</em></p><div class="language-js"><pre><code><span class="token comment">/* ===========================================================
 * docsify sw.js
 * ===========================================================
 * Copyright 2016 @huxpro
 * Licensed under Apache 2.0
 * Register service worker.
 * ========================================================== */</span>

<span class="token keyword">const</span> <span class="token constant">RUNTIME</span> <span class="token operator">=</span> <span class="token string">&#39;docsify&#39;</span>
<span class="token keyword">const</span> <span class="token constant">HOSTNAME_WHITELIST</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  self<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hostname<span class="token punctuation">,</span>
  <span class="token string">&#39;fonts.gstatic.com&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;fonts.googleapis.com&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;unpkg.com&#39;</span>
<span class="token punctuation">]</span>

<span class="token comment">// The Util Function to hack URLs of intercepted requests</span>
<span class="token keyword">const</span> <span class="token function-variable function">getFixedUrl</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

  <span class="token comment">// 1. fixed http URL</span>
  <span class="token comment">// Just keep syncing with location.protocol</span>
  <span class="token comment">// fetch(httpURL) belongs to active mixed content.</span>
  <span class="token comment">// And fetch(httpRequest) is not supported yet.</span>
  url<span class="token punctuation">.</span>protocol <span class="token operator">=</span> self<span class="token punctuation">.</span>location<span class="token punctuation">.</span>protocol

  <span class="token comment">// 2. add query for caching-busting.</span>
  <span class="token comment">// Github Pages served with Cache-Control: max-age=600</span>
  <span class="token comment">// max-age on mutable content is error-prone, with SW life of bugs can even extend.</span>
  <span class="token comment">// Until cache mode of Fetch API landed, we have to workaround cache-busting with query string.</span>
  <span class="token comment">// Cache-Control-Bug: https://bugs.chromium.org/p/chromium/issues/detail?id=453190</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>hostname <span class="token operator">===</span> self<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    url<span class="token punctuation">.</span>search <span class="token operator">+=</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>search <span class="token operator">?</span> <span class="token string">&#39;&amp;&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;cache-bust=&#39;</span> <span class="token operator">+</span> now
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> url<span class="token punctuation">.</span>href
<span class="token punctuation">}</span>

<span class="token comment">/**
 *  @Lifecycle Activate
 *  New one activated when old isnt being used.
 *
 *  waitUntil(): activating ====&gt; activated
 */</span>
self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;activate&#39;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>clients<span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/**
 *  @Functional Fetch
 *  All network requests are being intercepted here.
 *
 *  void respondWith(Promise&lt;Response&gt; r)
 */</span>
self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;fetch&#39;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Skip some of cross-origin requests, like those for Google Analytics.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">HOSTNAME_WHITELIST</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>hostname<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Stale-while-revalidate</span>
    <span class="token comment">// similar to HTTP&#39;s stale-while-revalidate: https://www.mnot.net/blog/2007/12/12/stale</span>
    <span class="token comment">// Upgrade from Jake&#39;s to Surma&#39;s: https://gist.github.com/surma/eb441223daaedf880801ad80006389f1</span>
    <span class="token keyword">const</span> cached <span class="token operator">=</span> caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span>
    <span class="token keyword">const</span> fixedUrl <span class="token operator">=</span> <span class="token function">getFixedUrl</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span>
    <span class="token keyword">const</span> fetched <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span>fixedUrl<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">&#39;no-store&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> fetchedCopy <span class="token operator">=</span> fetched<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">resp</span> <span class="token operator">=&gt;</span> resp<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// Call respondWith() with whatever we get first.</span>
    <span class="token comment">// If the fetch fails (e.g disconnected), wait for the cache.</span>
    <span class="token comment">// If there\u2019s nothing in cache, wait for the fetch.</span>
    <span class="token comment">// If neither yields a response, return offline pages.</span>
    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span>
      Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>fetched<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> cached<span class="token punctuation">)</span><span class="token punctuation">,</span> cached<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">resp</span> <span class="token operator">=&gt;</span> resp <span class="token operator">||</span> fetched<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">/* eat any errors */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>

    <span class="token comment">// Update the cache with the version we fetched (only for ok status)</span>
    event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
      Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>fetchedCopy<span class="token punctuation">,</span> caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>response<span class="token punctuation">,</span> cache<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span>ok <span class="token operator">&amp;&amp;</span> cache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">/* eat any errors */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u6CE8\u518C" tabindex="-1">\u6CE8\u518C <a class="header-anchor" href="#\u6CE8\u518C" aria-hidden="true">#</a></h2><p>\u73B0\u5728\uFF0C\u5230 <code>index.html</code> \u91CC\u6CE8\u518C\u5B83\u3002\u8FD9\u4E2A\u529F\u80FD\u53EA\u80FD\u5DE5\u4F5C\u5728\u4E00\u4E9B\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E0A\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u52A0\u4E2A\u5224\u65AD\u3002</p><p><em>index.html</em></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> navigator<span class="token punctuation">.</span>serviceWorker <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;sw.js&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u4F53\u9A8C\u4E00\u4E0B" tabindex="-1">\u4F53\u9A8C\u4E00\u4E0B <a class="header-anchor" href="#\u4F53\u9A8C\u4E00\u4E0B" aria-hidden="true">#</a></h2><p>\u53D1\u5E03\u4F60\u7684\u7F51\u7AD9\uFF0C\u5E76\u5F00\u59CB\u4EAB\u53D7\u79BB\u7EBF\u6A21\u5F0F\u7684\u9B54\u529B\u5427\uFF01\u{1F47B} \u5F53\u7136\u4F60\u73B0\u5728\u770B\u5230\u7684 docsify \u7684\u6587\u6863\u7F51\u7AD9\u5DF2\u7ECF\u652F\u6301\u79BB\u7EBF\u6A21\u5F0F\u4E86\uFF0C\u4F60\u53EF\u4EE5\u5173\u6389 Wi-Fi \u4F53\u9A8C\u4E00\u4E0B\u3002</p>`,12),o=[e];function c(l,u,i,k,r,d){return a(),s("div",null,o)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
