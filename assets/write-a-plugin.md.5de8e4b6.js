import{_ as n,c as s,o as a,a as t}from"./app.30fb13a5.js";const f='{"title":"\u81EA\u5B9A\u4E49\u63D2\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B8C\u6574\u529F\u80FD","slug":"\u5B8C\u6574\u529F\u80FD"},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"},{"level":3,"title":"footer","slug":"footer"},{"level":3,"title":"Edit Button","slug":"edit-button"}],"relativePath":"write-a-plugin.md"}',p={},o=t(`<h1 id="\u81EA\u5B9A\u4E49\u63D2\u4EF6" tabindex="-1">\u81EA\u5B9A\u4E49\u63D2\u4EF6 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u63D2\u4EF6" aria-hidden="true">#</a></h1><p>docsify \u63D0\u4F9B\u4E86\u4E00\u5957\u63D2\u4EF6\u673A\u5236\uFF0C\u5176\u4E2D\u63D0\u4F9B\u7684\u94A9\u5B50\uFF08hook\uFF09\u652F\u6301\u5904\u7406\u5F02\u6B65\u903B\u8F91\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u6269\u5C55\u529F\u80FD\u3002</p><h2 id="\u5B8C\u6574\u529F\u80FD" tabindex="-1">\u5B8C\u6574\u529F\u80FD <a class="header-anchor" href="#\u5B8C\u6574\u529F\u80FD" aria-hidden="true">#</a></h2><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">hook<span class="token punctuation">,</span> vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    hook<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u521D\u59CB\u5316\u65F6\u8C03\u7528\uFF0C\u53EA\u8C03\u7528\u4E00\u6B21\uFF0C\u6CA1\u6709\u53C2\u6570\u3002</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    hook<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6BCF\u6B21\u5F00\u59CB\u89E3\u6790 Markdown \u5185\u5BB9\u65F6\u8C03\u7528</span>
      <span class="token comment">// ...</span>
      <span class="token keyword">return</span> content
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    hook<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">html<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u89E3\u6790\u6210 html \u540E\u8C03\u7528\u3002beforeEach \u548C afterEach \u652F\u6301\u5904\u7406\u5F02\u6B65\u903B\u8F91</span>
      <span class="token comment">// ...</span>
      <span class="token comment">// \u5F02\u6B65\u5904\u7406\u5B8C\u6210\u540E\u8C03\u7528 next(html) \u8FD4\u56DE\u7ED3\u679C</span>
      <span class="token function">next</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    hook<span class="token punctuation">.</span><span class="token function">doneEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6BCF\u6B21\u8DEF\u7531\u5207\u6362\u65F6\u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210\u540E\u8C03\u7528\uFF0C\u6CA1\u6709\u53C2\u6570\u3002</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    hook<span class="token punctuation">.</span><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u521D\u59CB\u5316\u5B8C\u6210\u540E\u8C03\u7528 \uFF0C\u53EA\u8C03\u7528\u4E00\u6B21\uFF0C\u6CA1\u6709\u53C2\u6570\u3002</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    hook<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u521D\u59CB\u5316\u5E76\u7B2C\u4E00\u6B21\u52A0\u5B8C\u6210\u6570\u636E\u540E\u8C03\u7528\uFF0C\u6CA1\u6709\u53C2\u6570\u3002</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>!&gt; \u5982\u679C\u9700\u8981\u7528 docsify \u7684\u5185\u90E8\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>window.Docsify</code> \u83B7\u53D6\uFF0C\u901A\u8FC7 <code>vm</code> \u83B7\u53D6\u5F53\u524D\u5B9E\u4F8B\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><h3 id="footer" tabindex="-1">footer <a class="header-anchor" href="#footer" aria-hidden="true">#</a></h3><p>\u7ED9\u6BCF\u4E2A\u9875\u9762\u7684\u672B\u5C3E\u52A0\u4E0A <code>footer</code></p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">hook</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> footer <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;&lt;hr/&gt;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;&lt;footer&gt;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;&lt;span&gt;&lt;a href=&quot;https://github.com/QingWei-Li&quot;&gt;cinwell&lt;/a&gt; &amp;copy;2017.&lt;/span&gt;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;&lt;span&gt;Proudly published with &lt;a href=&quot;https://github.com/docsifyjs/docsify&quot; target=&quot;_blank&quot;&gt;docsify&lt;/a&gt;.&lt;/span&gt;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;&lt;/footer&gt;&#39;</span>
      <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

      hook<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> html <span class="token operator">+</span> footer
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="edit-button" tabindex="-1">Edit Button <a class="header-anchor" href="#edit-button" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">hook<span class="token punctuation">,</span> vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      hook<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&#39;https://github.com/docsifyjs/docsify/blob/master/docs&#39;</span> <span class="token operator">+</span> vm<span class="token punctuation">.</span>route<span class="token punctuation">.</span>file
        <span class="token keyword">var</span> editHtml <span class="token operator">=</span> <span class="token string">&#39;[\u{1F4DD} EDIT DOCUMENT](&#39;</span> <span class="token operator">+</span> url <span class="token operator">+</span> <span class="token string">&#39;)\\n&#39;</span>

        <span class="token keyword">return</span> editHtml
          <span class="token operator">+</span> html
          <span class="token operator">+</span> <span class="token string">&#39;\\n----\\n&#39;</span>
          <span class="token operator">+</span> <span class="token string">&#39;Last modified {docsify-updated} &#39;</span>
          <span class="token operator">+</span> editHtml
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{f as __pageData,m as default};
