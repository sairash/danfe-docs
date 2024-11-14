import{_ as e,c as s,a3 as t,o as n}from"./chunks/framework.ohJJpums.js";const u=JSON.parse('{"title":"Magic Methods","description":"","frontmatter":{},"headers":[],"relativePath":"language/magic_methods.md","filePath":"language/magic_methods.md"}'),o={name:"language/magic_methods.md"};function l(r,a,c,p,i,d){return n(),s("div",null,a[0]||(a[0]=[t(`<h1 id="magic-methods" tabindex="-1">Magic Methods <a class="header-anchor" href="#magic-methods" aria-label="Permalink to &quot;Magic Methods&quot;">​</a></h1><p>These are the variables which provide hooks into Danfe&#39;s <code>core</code> functionalities and can be used to customize behaviors.</p><table tabindex="0"><thead><tr><th>method</th><th>Info</th></tr></thead><tbody><tr><td><a href="/"><code>__module__</code></a></td><td>Provides the current module name</td></tr><tr><td><code>__args__</code></td><td>Provides the arguments given by the user</td></tr></tbody></table><h2 id="module" tabindex="-1">__module__ <a class="header-anchor" href="#module" aria-label="Permalink to &quot;\\_\\_module__&quot;">​</a></h2><p>In Danfe the <code>file you run is the entry point to your program</code>. But there is a special keyword defined called <code>__module__</code> which is initialized at the start. By using that keyword you can check if the file is the entry point or not.</p><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FF9492;">if</span><span style="color:#F0F3F6;"> __module__ </span><span style="color:#FF9492;">==</span><span style="color:#ADDCFF;"> &quot;main&quot;</span><span style="color:#F0F3F6;"> {</span></span>
<span class="line"><span style="color:#FF9492;">    println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Hello World&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#F0F3F6;">}</span></span>
<span class="line"></span></code></pre></div><p>This makes sure the function is called only if it is the <code>entry point</code> to the program. This feature is heavly inspired by the <code>__name__</code> feature of <a href="https://docs.python.org/3/library/__main__.html" target="_blank" rel="noreferrer">Python</a>.</p><h2 id="args" tabindex="-1">__args__ <a class="header-anchor" href="#args" aria-label="Permalink to &quot;\\_\\_args__&quot;">​</a></h2><p>You can get the values that users provide when excuting the program.</p><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(__args__)</span></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(</span><span style="color:#FF9492;">typeof</span><span style="color:#F0F3F6;">(__args__))</span></span>
<span class="line"></span></code></pre></div><p><strong>run:</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">danfe</span><span style="color:#ADDCFF;"> run</span><span style="color:#ADDCFF;"> ./main.df</span><span style="color:#ADDCFF;"> ./next_args.js</span><span style="color:#91CBFF;"> --test</span></span>
<span class="line"></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#91CBFF;font-weight:bold;"># output</span></span>
<span class="line"><span style="color:#F0F3F6;">[./hello.df =&gt; 0, ./next_args.js =&gt; 1, --test =&gt; 2]</span></span>
<span class="line"><span style="color:#F0F3F6;">table</span></span>
<span class="line"></span></code></pre></div>`,13)]))}const g=e(o,[["render",l]]);export{u as __pageData,g as default};
