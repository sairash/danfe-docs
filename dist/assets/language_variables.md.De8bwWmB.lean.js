import{_ as s,c as n,a3 as l,o as e}from"./chunks/framework.ohJJpums.js";const y=JSON.parse('{"title":"Variables","description":"","frontmatter":{},"headers":[],"relativePath":"language/variables.md","filePath":"language/variables.md"}'),o={name:"language/variables.md"};function t(p,a,r,c,F,i){return e(),n("div",null,a[0]||(a[0]=[l(`<h1 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h1><p>A variable is a <code>name</code> given to a <code>storage</code> area that our programs can <code>manipulate</code>. It can hold different types of values including tables, arrays and litreals. <br><br> The name of a variable can be composed of <code>letters</code>, <code>digits</code>, and the <code>underscore</code> character. It must begin with either a letter or an underscore. Upper and lowercase letters are distinct because Danfe is case-sensitive. There are eight basic types of values in Danfe <br><br></p><div class="warning custom-block"><p class="custom-block-title">Info</p><ul><li><strong><code>Global variables</code> -</strong> <code>All variables</code> in Danfe <code>global</code>. Which means it can be controlled updated and created from anywhere in the program.</li></ul></div><h2 id="variable-definition-in-danfe" tabindex="-1">Variable Definition in Danfe <a class="header-anchor" href="#variable-definition-in-danfe" aria-label="Permalink to &quot;Variable Definition in Danfe&quot;">​</a></h2><p>A variable definition means to tell <code>Danfe</code> where and how much to create the storage for the variable.</p><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">a</span><span style="color:#FF9492;"> =</span><span style="color:#91CBFF;"> 0</span><span style="color:#BDC4CC;">                              # int value</span></span>
<span class="line"><span style="color:#FFB757;">b</span><span style="color:#FF9492;"> =</span><span style="color:#ADDCFF;"> &quot;10&quot;</span><span style="color:#BDC4CC;">                            # string value</span></span>
<span class="line"><span style="color:#FFB757;">c</span><span style="color:#FF9492;"> =</span><span style="color:#91CBFF;"> 10.0</span><span style="color:#BDC4CC;">                            # float value</span></span>
<span class="line"><span style="color:#FFB757;">d</span><span style="color:#FF9492;"> =</span><span style="color:#F0F3F6;"> [</span><span style="color:#91CBFF;">10</span><span style="color:#F0F3F6;">, c, </span><span style="color:#ADDCFF;">&quot;danfe&quot;</span><span style="color:#F0F3F6;">]                </span><span style="color:#BDC4CC;"># array value</span></span>
<span class="line"><span style="color:#FFB757;">e</span><span style="color:#FF9492;"> =</span><span style="color:#F0F3F6;"> [</span><span style="color:#ADDCFF;">&quot;x&quot;</span><span style="color:#FF9492;"> =&gt;</span><span style="color:#F0F3F6;"> a, </span><span style="color:#ADDCFF;">&quot;y&quot;</span><span style="color:#FF9492;"> =&gt;</span><span style="color:#F0F3F6;"> b, </span><span style="color:#ADDCFF;">&quot;z&quot;</span><span style="color:#FF9492;"> =&gt;</span><span style="color:#F0F3F6;"> d]  </span><span style="color:#BDC4CC;"># table value</span></span>
<span class="line"></span></code></pre></div><h2 id="conditional-assignment" tabindex="-1">Conditional Assignment <a class="header-anchor" href="#conditional-assignment" aria-label="Permalink to &quot;Conditional Assignment&quot;">​</a></h2><p>By the use of <code>Existential Operator</code> -&gt; <code>?=</code> you can assign value to a variable if the variable is null.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This <code>operator</code> can only be used after assignment of variable</p></div><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">a</span><span style="color:#FF9492;"> ?=</span><span style="color:#91CBFF;"> 15</span><span style="color:#BDC4CC;">     # Assigns the value of a as 15 if a is 0</span></span>
<span class="line"><span style="color:#FFB757;">c</span><span style="color:#FF9492;"> ?=</span><span style="color:#91CBFF;"> 15.0</span><span style="color:#BDC4CC;">   # Assigns the value of c as 15.0 if a is 0</span></span>
<span class="line"></span></code></pre></div><hr><p>Let&#39;s <code>print</code> out the value from variable: c</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ZwFWh" id="tab-GMk2CNf" checked><label data-title="English" for="tab-GMk2CNf">English</label><input type="radio" name="group-ZwFWh" id="tab-STkBP-4"><label data-title="Nepali" for="tab-STkBP-4">Nepali</label></div><div class="blocks"><div class="language-danfe vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Value of a: </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">a</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Value of b: </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">b</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Value of c: </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">c</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Value of d: </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">d</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Value of e: </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">e</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#DBB7FF;">dekhauln</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Value of a: </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">a</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#DBB7FF;">dekhauln</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Value of b: </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">b</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#DBB7FF;">dekhauln</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Value of c: </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">c</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#DBB7FF;">dekhauln</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Value of d: </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">d</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"><span style="color:#DBB7FF;">dekhauln</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Value of e: </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">e</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"></span></code></pre></div></div></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#91CBFF;font-weight:bold;"># Output</span></span>
<span class="line"><span style="color:#F0F3F6;">Value of a: 15</span></span>
<span class="line"><span style="color:#F0F3F6;">Value of b: 10</span></span>
<span class="line"><span style="color:#F0F3F6;">Value of c: 10.0</span></span>
<span class="line"><span style="color:#F0F3F6;">Value of d: [10, 10.0, danfe]</span></span>
<span class="line"><span style="color:#F0F3F6;">Value of e: [x =&gt; 0, y =&gt; 10, z =&gt; [10, 10.0, danfe]]</span></span>
<span class="line"></span></code></pre></div><p>Learn about <code>&quot;Value of a: $i{a}&quot;</code> -&gt; <a href="./danfe-types.html#string-interplation"><code>String Interplation</code></a> <br></p><p>There are 7 <a href="./danfe-types.html">Danfe types</a> and variables can be one of them.</p><table tabindex="0"><thead><tr><th>Type</th><th>Info</th></tr></thead><tbody><tr><td><a href="/language/danfe-types.html#string">string</a></td><td>Represents array of <code>characters</code>.</td></tr><tr><td><a href="/language/danfe-types.html#numbers">int</a></td><td>Represents <code>real numbers</code>.</td></tr><tr><td><a href="/language/danfe-types.html#numbers">float</a></td><td>Represents double precision <code>floating point</code> numbers.</td></tr><tr><td><a href="/language/danfe-types.html#int">nil</a></td><td>Represented with <code>0</code> in memory</td></tr><tr><td><a href="/language/danfe-types.html#int">boolean</a></td><td><code>true</code> or <code>false</code> value</td></tr><tr><td><a href="/language/danfe-types.html#array">array</a></td><td>Linear data structure where all elements are <code>arranged sequentially</code>.</td></tr><tr><td><a href="/language/danfe-types.html#table">table</a></td><td>A data structure that stores any <code>danfe types</code> in key value pairs</td></tr></tbody></table><h2 id="lvalues-and-rvalues-danfe" tabindex="-1">Lvalues and Rvalues Danfe <a class="header-anchor" href="#lvalues-and-rvalues-danfe" aria-label="Permalink to &quot;Lvalues and Rvalues Danfe&quot;">​</a></h2><p>There are two kinds of expressions.</p><div class="warning custom-block"><p class="custom-block-title">Info</p><ul><li><strong><code>Lvalues</code> -</strong> Expression that refers to <code>memory location</code>. Lvalues always appear as the left-hand side of assignment.</li><li><strong><code>Rvalues</code> -</strong> The term rvalue refers to a data value that is stored at some address in memory.</li></ul></div><p>Variables are lvalues and so may appear on the left-hand side of an assignment. Numeric literals are rvalues and so may not be assigned and cannot appear on the left-hand side. Following is a valid statement −</p><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">g</span><span style="color:#FF9492;"> =</span><span style="color:#91CBFF;"> 20</span></span>
<span class="line"></span></code></pre></div><p>But following is not a valid statement and would generate a build-time error −</p><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#91CBFF;">10</span><span style="color:#FF9492;"> =</span><span style="color:#91CBFF;"> 20</span></span>
<span class="line"></span></code></pre></div><h3 id="push-an-pop" tabindex="-1">Push an Pop <a class="header-anchor" href="#push-an-pop" aria-label="Permalink to &quot;Push an Pop&quot;">​</a></h3><p>Push and pop only works for <strong>Array and Tables</strong>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HI_78" id="tab-XYNDVn1" checked><label data-title="Array" for="tab-XYNDVn1">Array</label><input type="radio" name="group-HI_78" id="tab-zMJytOe"><label data-title="Table" for="tab-zMJytOe">Table</label></div><div class="blocks"><div class="language-danfe vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#BDC4CC;"># Pushing a value to array</span></span>
<span class="line"><span style="color:#FFB757;">arr</span><span style="color:#FF9492;"> =</span><span style="color:#F0F3F6;"> [</span><span style="color:#ADDCFF;">&quot;Hello&quot;</span><span style="color:#F0F3F6;">]</span></span>
<span class="line"><span style="color:#F0F3F6;">arr </span><span style="color:#FF9492;">&lt;&lt;</span><span style="color:#ADDCFF;"> &quot;from&quot;</span></span>
<span class="line"><span style="color:#F0F3F6;">arr </span><span style="color:#FF9492;">&lt;&lt;</span><span style="color:#F0F3F6;"> [</span><span style="color:#ADDCFF;">&quot;Danfe&quot;</span><span style="color:#F0F3F6;">, </span><span style="color:#ADDCFF;">&quot;and&quot;</span><span style="color:#F0F3F6;">]</span></span>
<span class="line"><span style="color:#F0F3F6;">arr[</span><span style="color:#91CBFF;">2</span><span style="color:#F0F3F6;">] </span><span style="color:#FF9492;">&lt;&lt;</span><span style="color:#ADDCFF;"> &quot;Sairash&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">arr</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">, &quot;</span><span style="color:#F0F3F6;">, </span><span style="color:#FF9492;">typeof</span><span style="color:#F0F3F6;">(arr))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BDC4CC;"># Poping the last value from array</span></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(arr </span><span style="color:#FF9492;">&gt;&gt;</span><span style="color:#F0F3F6;">) </span></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(arr)</span></span></code></pre></div><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">table</span><span style="color:#FF9492;"> =</span><span style="color:#F0F3F6;"> [</span><span style="color:#ADDCFF;">&quot;value&quot;</span><span style="color:#FF9492;">=&gt;</span><span style="color:#F0F3F6;"> [</span><span style="color:#ADDCFF;">&quot;Pusing&quot;</span><span style="color:#F0F3F6;">]]</span></span>
<span class="line"><span style="color:#F0F3F6;">table[</span><span style="color:#ADDCFF;">&quot;value&quot;</span><span style="color:#F0F3F6;">] </span><span style="color:#FF9492;">&lt;&lt;</span><span style="color:#ADDCFF;"> &quot;in&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BDC4CC;"># Radom key string of 10 characters is generated</span></span>
<span class="line"><span style="color:#F0F3F6;">table </span><span style="color:#FF9492;">&lt;&lt;</span><span style="color:#F0F3F6;"> [</span><span style="color:#ADDCFF;">&quot;Table .&quot;</span><span style="color:#F0F3F6;">]</span></span>
<span class="line"><span style="color:#F0F3F6;">table </span><span style="color:#FF9492;">&lt;&lt;</span><span style="color:#91CBFF;"> 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BDC4CC;"># Poped value is stored in x</span></span>
<span class="line"><span style="color:#FFB757;">x</span><span style="color:#FF9492;"> =</span><span style="color:#F0F3F6;"> table </span><span style="color:#FF9492;">&gt;&gt;</span></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(x </span><span style="color:#FF9492;">*</span><span style="color:#91CBFF;"> 4</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;</span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">table</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">, &quot;</span><span style="color:#F0F3F6;">, </span><span style="color:#FF9492;">typeof</span><span style="color:#F0F3F6;">(table))</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-yEtw7" id="tab-NNzyUfh" checked><label data-title="Array Output" for="tab-NNzyUfh">Array Output</label><input type="radio" name="group-yEtw7" id="tab-T-dtDqC"><label data-title="Table Output" for="tab-T-dtDqC">Table Output</label></div><div class="blocks"><div class="language-danfe vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#BDC4CC;"># Output</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F0F3F6;">[Hello, </span><span style="color:#FF9492;">from</span><span style="color:#F0F3F6;">, [Danfe, </span><span style="color:#FF9492;">and</span><span style="color:#F0F3F6;">, Sairash]], array</span></span>
<span class="line"><span style="color:#F0F3F6;">[Danfe, </span><span style="color:#FF9492;">and</span><span style="color:#F0F3F6;">, Sairash]</span></span>
<span class="line"><span style="color:#F0F3F6;">[Hello, </span><span style="color:#FF9492;">from</span><span style="color:#F0F3F6;">]</span></span></code></pre></div><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#BDC4CC;"># Output</span></span>
<span class="line"></span>
<span class="line"><span style="color:#91CBFF;">40</span></span>
<span class="line"><span style="color:#F0F3F6;">[</span><span style="color:#DBB7FF;">value</span><span style="color:#FF9492;"> =&gt;</span><span style="color:#F0F3F6;"> [Pusing, </span><span style="color:#FF9492;">in</span><span style="color:#F0F3F6;">], </span><span style="color:#91CBFF;">0</span><span style="color:#F0F3F6;">{</span><span style="color:#FFB1AF;font-style:italic;">9zS</span><span style="color:#F0F3F6;">;</span><span style="color:#FF9492;">:</span><span style="color:#FFB1AF;font-style:italic;">4hzGWcp</span><span style="color:#FF9492;"> =&gt;</span><span style="color:#F0F3F6;"> [Table .]], table</span></span></code></pre></div></div></div><p>You can refrence theses links to learn more about it <a href="./danfe-types.html#push-and-pop"><strong>Array</strong></a> and <a href="./danfe-types.html#push-and-pop-1"><strong>Table</strong></a></p><h3 id="string-interplation" tabindex="-1">String Interplation <br> <a class="header-anchor" href="#string-interplation" aria-label="Permalink to &quot;String Interplation &lt;br&gt;&quot;">​</a></h3><p><code>String Interplation</code> can be achieved in <code>Danfe</code> by using <code>%i{</code> before a variable name and <code>}</code> after. The variable will be converted to a string and embedded into the literal:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Oj8k_" id="tab-F1ZgYb0" checked><label data-title="English" for="tab-F1ZgYb0">English</label><input type="radio" name="group-Oj8k_" id="tab-blpWczb"><label data-title="Neplai" for="tab-blpWczb">Neplai</label></div><div class="blocks"><div class="language-danfe vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">name</span><span style="color:#FF9492;"> =</span><span style="color:#ADDCFF;"> &quot;Danfe&quot;</span></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Hello from </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">name</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">!&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">name</span><span style="color:#FF9492;"> =</span><span style="color:#ADDCFF;"> &quot;Danfe&quot;</span></span>
<span class="line"><span style="color:#DBB7FF;">dekhauln</span><span style="color:#F0F3F6;">(</span><span style="color:#ADDCFF;">&quot;Hello from </span><span style="color:#FF9492;">%i{</span><span style="color:#ADDCFF;">name</span><span style="color:#FF9492;">}</span><span style="color:#ADDCFF;">!&quot;</span><span style="color:#F0F3F6;">)</span></span>
<span class="line"></span></code></pre></div></div></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#91CBFF;font-weight:bold;"># Output</span></span>
<span class="line"><span style="color:#F0F3F6;">Hello from Danfe!</span></span>
<span class="line"></span></code></pre></div><h2 id="derefrence-identifier" tabindex="-1">Derefrence identifier <a class="header-anchor" href="#derefrence-identifier" aria-label="Permalink to &quot;Derefrence identifier&quot;">​</a></h2><p>After Assignment you can manually deassign an identifier using the keyword <a href="/language/del.html"><code>del</code></a></p>`,35)]))}const u=s(o,[["render",t]]);export{y as __pageData,u as default};
