/*

Displaying data
JSX is not HTML. JSX is not HTML. JSX is not HTML...

JSX let's your markup so it's converted to JavaScript, but will also allow you to embed JavaScript 
expressions. 

Remember a expression is a valid unit of code that resolves to a value, 
so whether is a variable, an object property, 
the returned value from a function, you can embed it in JSX.

To do so, you need to enclose your expression in curly braces{}

In this example:

Check line 7, we are embedding the value of logoUrl, feel free to change the url to another image!

Check line 14, and how the title is coming title.toUpperCase() 

Check line 27, we are straight up embedding an expression that will ultimately be computed before resolving to the value!

Since your components are nothing but functions, it's natural to assume you can pass arguments to use within your components logic. These arguments in JSX look like HTML attributes and, when a component receives them in React, are called props (short for properties).

To use properties passed by a parent component, every component has access to a parameter called props. Since propsis an an object, its contents can be destructured directly from the parameter list. Check how in line 36, we are passing a title prop that we can then use within the Header component.
https://playground.wbscod.in/static/javascript-objects-i/3
*/

import Header from "./components/Header"; // Importing Header component
import Button from "./components/Button"; // Importing Button component
import Footer from "./components/Footer"; //  Importing Footer component

// App Component (Root Component)
const App = () => {
  return (
    <div>
      <Header title="Change this now!!!!!" />{" "}
      {/* Header component  wit a title*/}
      <Button />
      <Footer />
    </div>
  );
};

// Exporting App component
export default App;
