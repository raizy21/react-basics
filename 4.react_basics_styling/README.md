<p>So far, we haven't added any styles to our components and they look super ugly!</p>
<p>Well, it's not like this 👉🏼 looks super beautiful but we are here to show you how to add styles!</p>
<ul>
<li><strong>Element selectors: </strong>Check out the styles applied to our <code>Footer</code> component. We are selecting the <code>footer</code> element directly because ultimately, React outputs our markup to the actual DOM!</li>
<li><strong>Classes and IDs:</strong><br>
<ul>
<li>Selecting elements by their ID is pretty straight forward, check the About <code>li</code>!</li>
<li>Classes are trickier. Remember we are not writing HTML but JSX! And JSX is transformed to JavaScript, therefore we cannot use <a href="https://www.w3schools.com/js/js_reserved.asp" target="_blank" rel="noopener">reserved words</a> like <code>class</code> or <code>for</code> as JSX elements attributes, we instead have <code>className</code> and <code>htmlFor</code> respectively. Check the <code>className</code> applied to the outer <code>div</code> in the <code>App</code> component. If you were to use <code>class</code> instead, React will warn you in the console.</li>
</ul>
</li>
</ul>
<p>Note: the styles provided are neither pretty nor organised in the most efficient way, but it's jut for illustrative purposes.</p>
<p><img src="https://media1.tenor.com/m/QWdPngpHxZ8AAAAC/family-guy-css.gif" width="306" height="229"></p>