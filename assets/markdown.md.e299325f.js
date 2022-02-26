import{_ as n,c as a,o as s,a as t}from"./app.fbe85f26.js";const f='{"title":"Markdown \u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u652F\u6301 mermaid","slug":"\u652F\u6301-mermaid"}],"relativePath":"markdown.md"}',p={},o=t(`<h1 id="markdown-\u914D\u7F6E" tabindex="-1">Markdown \u914D\u7F6E <a class="header-anchor" href="#markdown-\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u5185\u7F6E\u7684 Markdown \u89E3\u6790\u5668\u662F <a href="https://github.com/markedjs/marked" target="_blank" rel="noopener noreferrer">marked</a>\uFF0C\u53EF\u4EE5\u4FEE\u6539\u5B83\u7684\u914D\u7F6E\u3002\u540C\u65F6\u53EF\u4EE5\u76F4\u63A5\u914D\u7F6E <code>renderer</code>\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">smartypants</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">renderer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">link</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>?&gt; \u5B8C\u6574\u914D\u7F6E\u53C2\u6570\u53C2\u8003 <a href="https://github.com/markedjs/marked#options-1" target="_blank" rel="noopener noreferrer">marked \u6587\u6863</a></p><p>\u5F53\u7136\u4E5F\u53EF\u4EE5\u5B8C\u5168\u5B9A\u5236 Markdown \u89E3\u6790\u89C4\u5219\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">markdown</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">marked<span class="token punctuation">,</span> renderer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>

    <span class="token keyword">return</span> marked
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u652F\u6301-mermaid" tabindex="-1">\u652F\u6301 mermaid <a class="header-anchor" href="#\u652F\u6301-mermaid" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// Import mermaid</span>
<span class="token comment">//  &lt;link rel=&quot;stylesheet&quot; href=&quot;//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.css&quot;&gt;</span>
<span class="token comment">//  &lt;script src=&quot;//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js&quot;&gt;&lt;/script&gt;</span>

mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">startOnLoad</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">renderer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">code</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span> lang</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lang <span class="token operator">===</span> <span class="token string">&quot;mermaid&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token string">&#39;&lt;div class=&quot;mermaid&quot;&gt;&#39;</span> <span class="token operator">+</span> mermaid<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>lang<span class="token punctuation">,</span> code<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&lt;/div&gt;&quot;</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>origin<span class="token punctuation">.</span><span class="token function">code</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),e=[o];function c(r,l,u,i,k,d){return s(),a("div",null,e)}var _=n(p,[["render",c]]);export{f as __pageData,_ as default};
