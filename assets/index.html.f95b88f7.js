import{o as n,c as s,e as a}from"./app.3a402643.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const t={},o={class:"language-javascript ext-js line-numbers-mode"},e=a(`<pre class="language-javascript"><code><span class="token comment">/* eslint-disable no-restricted-syntax */</span>
<span class="token comment">/* eslint-disable guard-for-in */</span>
<span class="token comment">/* eslint-disable no-alert */</span>
<span class="token comment">/* eslint-disable no-undef */</span>

declare <span class="token keyword">const</span> <span class="token literal-property property">window</span><span class="token operator">:</span> any
<span class="token comment">// https://github.com/wendux/DSBridge-Android/blob/master/app/src/main/assets/dsbridge.js</span>
<span class="token keyword">const</span> <span class="token literal-property property">bridge</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// default: this, // for typescript</span>
    <span class="token function">call</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">method</span><span class="token operator">:</span> any<span class="token punctuation">,</span> args<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">,</span> cb<span class="token operator">?</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">as</span> any
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> args <span class="token operator">==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cb <span class="token operator">=</span> args
            args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> <span class="token literal-property property">arg</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> args <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> args <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> cb <span class="token operator">==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> cbName <span class="token operator">=</span> <span class="token string">&#39;dscb&#39;</span> <span class="token operator">+</span> window<span class="token punctuation">.</span>dscb<span class="token operator">++</span>
            window<span class="token punctuation">[</span>cbName<span class="token punctuation">]</span> <span class="token operator">=</span> cb
            arg<span class="token punctuation">.</span>_dscbstub <span class="token operator">=</span> cbName
        <span class="token punctuation">}</span>
        arg <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>

        <span class="token comment">// if in webview that dsBridge provided, call!</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>window <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>_dsbridge<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">_dsbridge</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>window <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>_dswk<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>window <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;_dsbridge&#39;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ret <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;_dsbridge=&#39;</span> <span class="token operator">+</span> method<span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>ret <span class="token operator">||</span> <span class="token string">&#39;{}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>data
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">fun</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">asyn</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> q <span class="token operator">=</span> asyn <span class="token operator">?</span> window<span class="token punctuation">.</span>_dsaf <span class="token operator">:</span> window<span class="token punctuation">.</span>_dsf
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>_dsInit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            window<span class="token punctuation">.</span>_dsInit <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token comment">// notify native that js apis register successfully on next event loop</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">bridge</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;_dsb.dsinit&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> fun <span class="token operator">==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            q<span class="token punctuation">.</span>_obs<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> fun
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            q<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> fun
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">registerAsyn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">fun</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> fun<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">hasNativeMethod</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;_dsb.hasNativeMethod&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> type <span class="token operator">||</span> <span class="token string">&#39;all&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">disableJavascriptDialogBlock</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">disable</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;_dsb.disableJavascriptDialogBlock&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">disable</span><span class="token operator">:</span> disable <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">||</span> window<span class="token punctuation">.</span>_dsf<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">let</span> _close <span class="token operator">=</span> window<span class="token punctuation">.</span>close
    <span class="token keyword">let</span> <span class="token literal-property property">ob</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4FDD\u5B58JS\u540C\u6B65\u65B9\u6CD5</span>
        <span class="token literal-property property">_dsf</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">_obs</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u4FDD\u5B58JS\u5F02\u6B65\u65B9\u6CD5</span>
        <span class="token literal-property property">_dsaf</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">_obs</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dscb</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dsBridge</span><span class="token operator">:</span> bridge<span class="token punctuation">,</span>
        <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>bridge<span class="token punctuation">.</span><span class="token function">hasNativeMethod</span><span class="token punctuation">(</span><span class="token string">&#39;_dsb.closePage&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">bridge</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;_dsb.closePage&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">_close</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">_handleMessageFromNative</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">info</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> arg <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
            <span class="token keyword">let</span> <span class="token literal-property property">ret</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> info<span class="token punctuation">.</span>callbackId<span class="token punctuation">,</span>
                <span class="token literal-property property">complete</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_dsf<span class="token punctuation">[</span>info<span class="token punctuation">.</span>method<span class="token punctuation">]</span>
            <span class="token keyword">let</span> af <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_dsaf<span class="token punctuation">[</span>info<span class="token punctuation">.</span>method<span class="token punctuation">]</span>
            <span class="token keyword">let</span> <span class="token function-variable function">callSyn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">f</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">ob</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ret<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ob<span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
                <span class="token function">bridge</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;_dsb.returnValue&#39;</span><span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">let</span> <span class="token function-variable function">callAsyn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">f</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">ob</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                arg<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">complete</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    ret<span class="token punctuation">.</span>data <span class="token operator">=</span> data
                    ret<span class="token punctuation">.</span>complete <span class="token operator">=</span> complete <span class="token operator">!==</span> <span class="token boolean">false</span>
                    <span class="token function">bridge</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;_dsb.returnValue&#39;</span><span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token function">f</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ob<span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">callSyn</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_dsf<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>af<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">callAsyn</span><span class="token punctuation">(</span>af<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_dsaf<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// with namespace</span>
                <span class="token keyword">let</span> name <span class="token operator">=</span> info<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
                <span class="token keyword">let</span> method <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">let</span> namespace <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
                <span class="token keyword">let</span> obs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_dsf<span class="token punctuation">.</span>_obs
                <span class="token keyword">let</span> ob <span class="token operator">=</span> obs<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                <span class="token keyword">let</span> m <span class="token operator">=</span> ob<span class="token punctuation">[</span>method<span class="token punctuation">]</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> m <span class="token operator">==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">callSyn</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> ob<span class="token punctuation">)</span>
                    <span class="token keyword">return</span>
                <span class="token punctuation">}</span>
                obs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_dsaf<span class="token punctuation">.</span>_obs
                ob <span class="token operator">=</span> obs<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                m <span class="token operator">=</span> ob<span class="token punctuation">[</span>method<span class="token punctuation">]</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> m <span class="token operator">==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">callAsyn</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> ob<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> attr <span class="token keyword">in</span> ob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token operator">=</span> ob<span class="token punctuation">[</span>attr<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    bridge<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;_hasJavascriptMethod&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">method</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">tag</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token keyword">let</span> name <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>_dsf<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">||</span> window<span class="token punctuation">.</span>_dsaf<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// with namespace</span>
        method <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> namespace <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> ob <span class="token operator">=</span> window<span class="token punctuation">.</span>_dsf<span class="token punctuation">.</span>_obs<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span> <span class="token operator">||</span> window<span class="token punctuation">.</span>_dsaf<span class="token punctuation">.</span>_obs<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span>
        <span class="token keyword">return</span> ob <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token operator">!</span>ob<span class="token punctuation">[</span>method<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> bridge
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br></div>`,2),c=[e];function l(u,r){return n(),s("div",o,c)}var b=p(t,[["render",l]]);export{b as default};
