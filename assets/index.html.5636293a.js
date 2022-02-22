import{e as n}from"./app.3a402643.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="uniapp" tabindex="-1"><a class="header-anchor" href="#uniapp" aria-hidden="true">#</a> uniapp</h1><p>UniApp \u5C0F\u7A0B\u5E8F\u8131\u79BBHBuilderX\u6253\u5305wgt\u5B9E\u8DF5\u3002</p><p>\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6DFB\u52A0<code>scripts</code>\u6587\u4EF6\u5939,\u521B\u5EFA<code>appBuild.js</code></p><h5 id="\u547D\u4EE4\u5DE5\u5177\u4E2D-node-scripts-appbuild-js" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u5DE5\u5177\u4E2D-node-scripts-appbuild-js" aria-hidden="true">#</a> \u547D\u4EE4\u5DE5\u5177\u4E2D node scripts/appBuild.js</h5><p>\u4E3E\u4E2A\u4F8B\u5B50</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u4E3E\u4E2A\u4F8B\u5B50
&quot;build:wtg&quot;: &quot;cross-env NODE_ENV=production UNI_PLATFORM=app-plus vue-cli-service uni-build --mode dev &amp;&amp; node scripts/appBuild.js&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>appBuild.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">JSZIP</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jszip&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> isBinaryFileSync <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;isbinaryfile&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> zip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSZIP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> context <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> appContext <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token string">&#39;dist/build/app-plus&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u8BFB\u53D6\u76EE\u5F55\u53CA\u6587\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">readDir</span><span class="token punctuation">(</span><span class="token parameter">dir<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> isFirst <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> files <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span>
    files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fileName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> fullPath <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token comment">// fullPath \u662F\u6587\u4EF6\u7EDD\u5BF9\u8DEF\u5F84 zipFileName \u662F\u6253\u5305\u65F6\u653E\u5728 zip \u4E2D\u7684\u540D\u5B57</span>
        <span class="token keyword">const</span> zipFileName <span class="token operator">=</span> isFirst <span class="token operator">?</span> fileName <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>parent<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">lstatSync</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">readDir</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">,</span> zipFileName<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token function">isBinaryFileSync</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span>
                <span class="token operator">?</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">)</span>
                <span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>fullPath<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

            zip<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span>zipFileName<span class="token punctuation">,</span> content<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getAPPID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> pkg
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        pkg <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token string">&#39;src/manifest.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;appid&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> pkg<span class="token punctuation">.</span>appid
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start building wgt...&#39;</span><span class="token punctuation">)</span>

<span class="token function">readDir</span><span class="token punctuation">(</span>appContext<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

zip
<span class="token punctuation">.</span><span class="token function">generateAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// \u8BBE\u7F6E\u538B\u7F29\u683C\u5F0F\uFF0C\u5F00\u59CB\u6253\u5305</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;nodebuffer&#39;</span><span class="token punctuation">,</span> <span class="token comment">// nodejs\u7528</span>
    <span class="token literal-property property">compression</span><span class="token operator">:</span> <span class="token string">&#39;DEFLATE&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u538B\u7F29\u7B97\u6CD5</span>
    <span class="token literal-property property">compressionOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u538B\u7F29\u7EA7\u522B</span>
        <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">content</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>appContext<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">../</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">getAPPID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.wgt</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;wgt build done.&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div>`,8);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};