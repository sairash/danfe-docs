import{_ as a,c as n,a3 as e,o}from"./chunks/framework.ohJJpums.js";const u=JSON.parse('{"title":"Module","description":"","frontmatter":{},"headers":[],"relativePath":"language/module.md","filePath":"language/module.md"}'),l={name:"language/module.md"};function t(p,s,c,r,i,d){return o(),n("div",null,s[0]||(s[0]=[e(`<h1 id="module" tabindex="-1">Module <a class="header-anchor" href="#module" aria-label="Permalink to &quot;Module&quot;">​</a></h1><p>Module is like a library that can be loaded using require and has a <code>single global</code> name containing a table. <br> This module can consist of a number of <code>functions</code> and <code>variables</code>. <br> All these functions and variables are wrapped in to the <code>table</code>, which acts as a <code>namespace</code>.</p><h2 id="speciality-of-danfe-modules" tabindex="-1">Speciality of Danfe Modules <a class="header-anchor" href="#speciality-of-danfe-modules" aria-label="Permalink to &quot;Speciality of Danfe Modules&quot;">​</a></h2><p>Let&#39;s assume that we have <code>4</code> files <code>./main.df</code>, <code>./rand.df</code>, <code>./v_op/v_time_func.df</code> and <code>./v_op/some_v_code.df</code> in the same folder.</p><p><strong>Let&#39;s check folder and files</strong></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-gOibE" id="tab-y0I5zHx" checked><label data-title="src/" for="tab-y0I5zHx">src/</label><input type="radio" name="group-gOibE" id="tab-22WboUd"><label data-title="src/main.df" for="tab-22WboUd">src/main.df</label><input type="radio" name="group-gOibE" id="tab-hH9hWFA"><label data-title="src/rand.df" for="tab-hH9hWFA">src/rand.df</label><input type="radio" name="group-gOibE" id="tab-uv0j4Rt"><label data-title="src/v_op/v_time_func.df" for="tab-uv0j4Rt">src/v_op/v_time_func.df</label><input type="radio" name="group-gOibE" id="tab-9wAFzKF"><label data-title="src/v_op/some_v_code.df" for="tab-9wAFzKF">src/v_op/some_v_code.df</label></div><div class="blocks"><div class="language-md vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#F0F3F6;">src/</span></span>
<span class="line"><span style="color:#F0F3F6;">├─ v_op/</span></span>
<span class="line"><span style="color:#F0F3F6;">│  ├─ some_v_code.df</span></span>
<span class="line"><span style="color:#F0F3F6;">│  ├─ v_time_func.df</span></span>
<span class="line"><span style="color:#F0F3F6;">├─ main.df</span></span>
<span class="line"><span style="color:#F0F3F6;">├─ rand.df</span></span>
<span class="line"></span></code></pre></div><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FF9492;">import</span><span style="color:#ADDCFF;"> &quot;rand&quot;</span><span style="color:#BDC4CC;"> # You can use file path like import &quot;./rand.df&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFB757;">length</span><span style="color:#FF9492;"> =</span><span style="color:#91CBFF;"> 5</span></span>
<span class="line"><span style="color:#FFB757;">random_ascii</span><span style="color:#FF9492;"> =</span><span style="color:#F0F3F6;"> rand.</span><span style="color:#DBB7FF;">gen_random_ascii</span><span style="color:#F0F3F6;">(length)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9492;">println</span><span style="color:#F0F3F6;">(random_ascii)</span></span>
<span class="line"></span></code></pre></div><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#BDC4CC;"># You can alias imports</span></span>
<span class="line"><span style="color:#FF9492;">import</span><span style="color:#ADDCFF;"> &quot;./v_op/some_v_code&quot;</span><span style="color:#FF9492;"> as</span><span style="color:#F0F3F6;"> v_mods</span></span>
<span class="line"><span style="color:#FF9492;">import</span><span style="color:#ADDCFF;"> &quot;./v_op/v_time_func.df&quot;</span><span style="color:#FF9492;"> as</span><span style="color:#F0F3F6;"> v_mods.time</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFB757;">chars</span><span style="color:#FF9492;"> =</span><span style="color:#ADDCFF;"> &#39;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&#39;</span></span>
<span class="line"><span style="color:#FFB757;">total_chars</span><span style="color:#FF9492;"> =</span><span style="color:#FF9492;"> len</span><span style="color:#F0F3F6;">(chars)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BDC4CC;"># Very Slow 😞 method will get faster soon 💪</span></span>
<span class="line"><span style="color:#FF9492;">function</span><span style="color:#DBB7FF;"> gen_random_ascii</span><span style="color:#F0F3F6;">(length){</span></span>
<span class="line"><span style="color:#FFB757;">    result</span><span style="color:#FF9492;"> =</span><span style="color:#ADDCFF;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#FFB757;">    i</span><span style="color:#FF9492;"> =</span><span style="color:#91CBFF;"> 0</span></span>
<span class="line"><span style="color:#FF9492;">    for</span><span style="color:#F0F3F6;"> i </span><span style="color:#FF9492;">&lt;=</span><span style="color:#DBB7FF;"> length</span><span style="color:#F0F3F6;"> {</span></span>
<span class="line"><span style="color:#FFB757;">        result</span><span style="color:#FF9492;"> =</span><span style="color:#F0F3F6;"> result </span><span style="color:#FF9492;">+</span><span style="color:#F0F3F6;"> chars[</span><span style="color:#DBB7FF;">int</span><span style="color:#F0F3F6;">(v_mods.time.</span><span style="color:#DBB7FF;">get_current_time_nano</span><span style="color:#F0F3F6;">() </span><span style="color:#FF9492;">%</span><span style="color:#F0F3F6;"> total_chars)]</span></span>
<span class="line"><span style="color:#FFB757;">        i</span><span style="color:#FF9492;"> =</span><span style="color:#F0F3F6;"> i </span><span style="color:#FF9492;">+</span><span style="color:#91CBFF;"> 1</span></span>
<span class="line"><span style="color:#F0F3F6;">    }</span></span>
<span class="line"><span style="color:#FF9492;">    return</span><span style="color:#F0F3F6;"> result</span></span>
<span class="line"><span style="color:#F0F3F6;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">time</span><span style="color:#FF9492;"> =</span><span style="color:#FF9492;"> v</span><span style="color:#F0F3F6;"> {</span></span>
<span class="line"><span style="color:#BDC4CC;">    // V code goes here</span></span>
<span class="line"><span style="color:#FF9492;">    import</span><span style="color:#F0F3F6;"> time</span></span>
<span class="line"><span style="color:#FF9492;">    return</span><span style="color:#F0F3F6;">(time.</span><span style="color:#DBB7FF;">now</span><span style="color:#F0F3F6;">()) </span></span>
<span class="line"><span style="color:#F0F3F6;">} </span><span style="color:#FF9492;">endv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9492;">function</span><span style="color:#DBB7FF;"> get_current_time_nano</span><span style="color:#F0F3F6;">(){</span></span>
<span class="line"><span style="color:#FF9492;">    return</span><span style="color:#FF9492;"> v</span><span style="color:#F0F3F6;"> {</span></span>
<span class="line"><span style="color:#FF9492;">        import</span><span style="color:#F0F3F6;"> time</span></span>
<span class="line"><span style="color:#FF9492;">        return</span><span style="color:#F0F3F6;">(time.</span><span style="color:#DBB7FF;">now</span><span style="color:#F0F3F6;">().</span><span style="color:#DBB7FF;">unix_nano</span><span style="color:#F0F3F6;">()) </span></span>
<span class="line"><span style="color:#F0F3F6;">    } </span><span style="color:#FF9492;">endv</span></span>
<span class="line"><span style="color:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFB757;">time_in_int</span><span style="color:#FF9492;"> =</span><span style="color:#DBB7FF;"> get_current_time_nano</span><span style="color:#F0F3F6;">()</span></span>
<span class="line"></span></code></pre></div><div class="language-danfe vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">danfe</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#BDC4CC;"># Some V Blocks Goes Here</span></span>
<span class="line"></span></code></pre></div></div></div><p>Now, If we run the file <strong>main.df</strong>.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#FFB757;">danfe</span><span style="color:#ADDCFF;"> run</span><span style="color:#ADDCFF;"> main.df</span></span>
<span class="line"></span></code></pre></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark-high-contrast" style="background-color:#0a0c10;color:#f0f3f6;" tabindex="0"><code><span class="line"><span style="color:#91CBFF;font-weight:bold;"># Output</span></span>
<span class="line"><span style="color:#F0F3F6;">X68pDj</span></span>
<span class="line"></span></code></pre></div><h2 id="import-syntax" tabindex="-1">Import Syntax <a class="header-anchor" href="#import-syntax" aria-label="Permalink to &quot;Import Syntax&quot;">​</a></h2><p>There are multiple ways to import a Danfe module.</p><table tabindex="0"><thead><tr><th>Syntax</th><th>Description</th><th>Example</th><th>Named Import</th></tr></thead><tbody><tr><td><code>import &quot;file_name.df&quot;</code></td><td>Imports <code>file_name.df</code> from the current folder without specifying a path.</td><td><code>import &quot;main.df&quot;</code></td><td>Named as <code>main</code></td></tr><tr><td><code>import &quot;file_name&quot;</code></td><td>Imports <code>file_name</code> without <code>.df</code> extension if it’s in the current folder.</td><td><code>import &quot;main&quot;</code></td><td>Named as <code>main</code></td></tr><tr><td><code>import &quot;path/file_name.df&quot;</code></td><td>Imports a file using its full path, useful for files outside the current folder.</td><td><code>import &quot;./src/math.df&quot;</code></td><td>Named as <code>src.math</code></td></tr><tr><td><code>import &quot;path/file_name.df&quot; as alias</code></td><td>Imports a file using its path and assigns a custom name specified by <code>alias</code>.</td><td><code>import &quot;./src/math.df&quot; as math</code></td><td>Named as <code>math</code></td></tr></tbody></table><h3 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h3><ul><li><strong>Path Import Required</strong>: Use a relative or absolute path (e.g., <code>./src/math.df</code>) if the module isn’t in the current folder.</li><li><strong>Automatic Naming</strong>: When no alias is specified, the import is named based on its file path.</li><li><strong>Custom Naming</strong>: Use <code>as</code> to specify a custom alias for easier reference.</li></ul>`,14)]))}const y=a(l,[["render",t]]);export{u as __pageData,y as default};
