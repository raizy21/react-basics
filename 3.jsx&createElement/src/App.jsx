/*

JSX
How come our JavaScript functions can return HTML just like that, without using 
document.createElement or a template literal? Well, the answer is, that's not HTML!

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write 
HTML-like code within JavaScript.

It is used with React to describe what the UI should look like. 
JSX makes the code more readable and easier to write by allowing you to mix HTML with JavaScript logic.

Why is this important and useful? 
Because, under the hood, 
whenever we write JSX, it's transpiled into JavaScript 
and every element we create, 
is a call to a method of React: React.createElement which is how React is able to keep elements 
in its Virtual DOM to then update the actual DOM. 
However, using React without JSX can be... annoying. See for yourself.

 
 

*/

import WithJSX from "./components/WithJSX";  // Importing WithJSX component
import WithCreateElement from "./components/WithCreateElement";   // Importing WithCreateElement component
const App = () => {
  return (
    <>
      <WithJSX />
      <WithCreateElement />
    </>
  );
};

// Exporting App component
export default App;
