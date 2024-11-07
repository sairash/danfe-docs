import{_ as a,c as s,a3 as o,o as t}from"./chunks/framework.ohJJpums.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"language/reusable/__module__.md","filePath":"language/reusable/__module__.md"}'),n={name:"language/reusable/__module__.md"};function l(r,e,p,i,c,d){return t(),s("div",null,e[0]||(e[0]=[o(`<p>In Danfe the <code>file you run is the entry point to your program</code>. But there is a special keyword defined called <code>__module__</code> which is initialized at the start. By using that keyword you can check if the file is the entry point or not.</p><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FF9492;">if</span><span style="color:#F0F3F6;"> __module__ </span><span style="color:#FF9492;">==</span><span style="color:#ADDCFF;"> &quot;main&quot;</span><span style="color:#F0F3F6;"> {</span></span>
<span class="line"><span style="color:#FF9492;">    println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Hello World&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#F0F3F6;">}</span></span>
<span class="line"></span></code></pre></div><p>This makes sure the function is called only if it is the <code>entry point</code> to the program. This feature is heavly inspired by the <code>__name__</code> feature of <a href="https://docs.python.org/3/library/__main__.html" target="_blank" rel="noreferrer">Python</a>.</p>`,3)]))}const h=a(n,[["render",l]]);export{u as __pageData,h as default};
