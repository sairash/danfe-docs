import{_ as a,c as n,a3 as l,o}from"./chunks/framework.ohJJpums.js";const y=JSON.parse('{"title":"Conditions","description":"","frontmatter":{},"headers":[],"relativePath":"language/condition.md","filePath":"language/condition.md"}'),e={name:"language/condition.md"};function p(t,s,c,F,r,i){return o(),n("div",null,s[0]||(s[0]=[l(`<h1 id="conditions" tabindex="-1">Conditions <a class="header-anchor" href="#conditions" aria-label="Permalink to &quot;Conditions&quot;">​</a></h1><p>Danfe assumes that <code>1</code> -&gt; <code>true</code> and <code>0</code> -&gt; <code>false</code>. And also for <code>string type</code>, if the string is empty <code>&#39;&#39;</code> -&gt; <code>false</code> and if the string has value it is considered <code>true</code></p><h2 id="if" tabindex="-1"><code>If</code> <a class="header-anchor" href="#if" aria-label="Permalink to &quot;\`If\`&quot;">​</a></h2><p><code>if</code> statements are pretty straightforward and similar to most other languages. Unlike other C-like languages, there are <code>no parentheses</code> surrounding the condition and the <code>braces</code> are always required.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-evxeR" id="tab-g5aJiM5" checked><label data-title="English" for="tab-g5aJiM5">English</label><input type="radio" name="group-evxeR" id="tab-N47Xo4u"><label data-title="Nepali" for="tab-N47Xo4u">Nepali</label></div><div class="blocks"><div class="language-danfe vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">a</span><span style="color:#FF9492;"> =</span><span style="color:#91CBFF;"> 10</span></span>
<span class="line"><span style="color:#FFB757;">b</span><span style="color:#FF9492;"> =</span><span style="color:#91CBFF;"> 20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9492;">if</span><span style="color:#F0F3F6;"> (a </span><span style="color:#FF9492;">&lt;</span><span style="color:#F0F3F6;"> b) {   </span><span style="color:#BDC4CC;"># can also be written as if a &lt; b  with the ()</span></span>
<span class="line"><span style="color:#FF9492;">    println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&#39;%i{a} &lt; %i{b}&#39;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#F0F3F6;">} </span><span style="color:#FF9492;">else</span><span style="color:#FF9492;"> if</span><span style="color:#F0F3F6;"> a </span><span style="color:#FF9492;">&gt;</span><span style="color:#DBB7FF;"> b</span><span style="color:#F0F3F6;"> {</span></span>
<span class="line"><span style="color:#FF9492;">    println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&#39;%i{a} &gt; %i{b}&#39;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#F0F3F6;">} </span><span style="color:#FF9492;">else</span><span style="color:#F0F3F6;"> {</span></span>
<span class="line"><span style="color:#FF9492;">    println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">a</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;"> == </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">b</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#F0F3F6;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">a</span><span style="color:#FF9492;"> =</span><span style="color:#91CBFF;"> 10</span></span>
<span class="line"><span style="color:#FFB757;">b</span><span style="color:#FF9492;"> =</span><span style="color:#91CBFF;"> 20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9492;">yedi</span><span style="color:#F0F3F6;"> (a </span><span style="color:#FF9492;">&lt;</span><span style="color:#F0F3F6;"> b) {   </span><span style="color:#BDC4CC;"># can also be written as yedi a &lt; b  with the ()</span></span>
<span class="line"><span style="color:#DBB7FF;">    dekhauln</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&#39;%i{a} &lt; %i{b}&#39;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#F0F3F6;">} </span><span style="color:#FF9492;">natra</span><span style="color:#FF9492;"> yedi</span><span style="color:#F0F3F6;"> a </span><span style="color:#FF9492;">&gt;</span><span style="color:#DBB7FF;"> b</span><span style="color:#F0F3F6;"> {</span></span>
<span class="line"><span style="color:#DBB7FF;">    dekhauln</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&#39;%i{a} &gt; %i{b}&#39;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#F0F3F6;">} </span><span style="color:#FF9492;">natra</span><span style="color:#F0F3F6;"> {</span></span>
<span class="line"><span style="color:#DBB7FF;">    dekhauln</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">a</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;"> == </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">b</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#F0F3F6;">}</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="if-expressions" tabindex="-1"><code>If</code> expressions <a class="header-anchor" href="#if-expressions" aria-label="Permalink to &quot;\`If\` expressions&quot;">​</a></h2><p>Unlike C, Danfe does not have a ternary operator, that would allow you to do: <code>x = c ? 1 : 2</code> . Instead, it has a bit more verbose, but also clearer to read, ability to use <code>if</code> as an expression. The direct translation in V of the ternary construct above, assuming <code>c</code> is a boolean condition, would be: <code>x = if c { 1 } else { 2 }</code>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-3z81N" id="tab-4Utc-iV" checked><label data-title="English" for="tab-4Utc-iV">English</label><input type="radio" name="group-3z81N" id="tab-lwdCsgv"><label data-title="Nepali" for="tab-lwdCsgv">Nepali</label></div><div class="blocks"><div class="language-danfe vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">num</span><span style="color:#FF9492;"> =</span><span style="color:#91CBFF;"> 777</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFB757;">s</span><span style="color:#FF9492;"> =</span><span style="color:#FF9492;"> if</span><span style="color:#F0F3F6;"> num </span><span style="color:#FF9492;">%</span><span style="color:#91CBFF;"> 2</span><span style="color:#FF9492;"> ==</span><span style="color:#FFB1AF;font-style:italic;"> 0</span><span style="color:#F0F3F6;"> {</span><span style="color:#ADDCFF;">&#39;even&#39;</span><span style="color:#F0F3F6;">} </span><span style="color:#FF9492;">else</span><span style="color:#F0F3F6;"> {</span><span style="color:#ADDCFF;">&#39;odd&#39;</span><span style="color:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(s)</span></span>
<span class="line"></span></code></pre></div><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">num</span><span style="color:#FF9492;"> =</span><span style="color:#91CBFF;"> 777</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFB757;">s</span><span style="color:#FF9492;"> =</span><span style="color:#FF9492;"> yedi</span><span style="color:#F0F3F6;"> num </span><span style="color:#FF9492;">%</span><span style="color:#91CBFF;"> 2</span><span style="color:#FF9492;"> ==</span><span style="color:#FFB1AF;font-style:italic;"> 0</span><span style="color:#F0F3F6;"> {</span><span style="color:#ADDCFF;">&#39;even&#39;</span><span style="color:#F0F3F6;">} </span><span style="color:#FF9492;">natra</span><span style="color:#F0F3F6;"> {</span><span style="color:#ADDCFF;">&#39;odd&#39;</span><span style="color:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBB7FF;">dekhauln</span><span style="color:#F0F3F6;">(s)</span></span>
<span class="line"></span></code></pre></div></div></div>`,8)]))}const u=a(e,[["render",p]]);export{y as __pageData,u as default};