/*

Events
We know we can attach events to HTML elements in various ways:

Inline: Directly in the HTML by passing an attribute like onclick='functionName()'
Adding an event: with element.addEventListener
Setting a function to the e onEvent properties of the element, e.g. element.onclick = functionName
Well, in React we have an equivalent to attaching an event directly in the JSX element! 
Simple add the Camel Case event as an attribute and assign a handler to it.

Pay attention to the output from line 3! 
You'll see that the type of the event is SyntheticBaseEvent don't be afraid. 
What this means is that React is trying to standarise the way events behave across all browser 
so you app works the same!

You'll use an event whenever you want to do something as a direct result of an user interaction: 
click, input, hover, etc., etc., etc.

*/

const App = () => {
  
  const handleClick = (e) => {
    console.log(e);
    console.log("Hey there!");
  };

  return (
    <>
      <h1>Hello from React!</h1>
      <p>Replace this boilerplate with your own code!</p>
      <button onClick={handleClick}>Click me and check the console</button>
    </>
  );
};

export default App;
