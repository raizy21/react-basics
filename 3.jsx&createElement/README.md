<p>How come our JavaScript functions can return HTML just like that, without using <code>document.createElement</code> or a template literal? Well, the answer is, that's not HTML!</p>
<p><strong>JSX (JavaScript XML)</strong> is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.</p>
<p>It is used with React to describe what the UI should look like. JSX makes the code more readable and easier to write by allowing you to mix HTML with JavaScript logic.</p>
<p>Why is this important and useful? Because, under the hood, whenever we write JSX, it's transpiled into JavaScript and every element we create, is a call to a method of React: <code>React.createElement</code> which is how React is able to keep elements in its Virtual DOM to then update the actual DOM. However, using React without JSX can be... annoying. See for yourself.</p>
<pre class="leading-relaxed">&nbsp;</pre>
<pre class="leading-relaxed">&nbsp;</pre>
<pre class="leading-relaxed">&nbsp;</pre>