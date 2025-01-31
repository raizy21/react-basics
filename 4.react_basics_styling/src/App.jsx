/*
Styling
So far, we haven't added any styles to our components and they look super ugly!

Well, it's not like this 👉🏼 looks super beautiful but we are here to show you how to add styles!

  Element selectors: Check out the styles applied to our Footer component. 
We are selecting the footer element directly because ultimately, 
React outputs our markup to the actual DOM!

  Classes and IDs:
    Selecting elements by their ID is pretty straight forward, check the About li!
    Classes are trickier. Remember we are not writing HTML but JSX!
And JSX is transformed to JavaScript, 
therefore we cannot use reserved words like class or for as JSX elements attributes, 
we instead have className and htmlFor respectively. https://www.w3schools.com/js/js_reserved.asp
Check the className applied to the outer div in the App component. 
If you were to use class instead, React will warn you in the console.

Note: the styles provided are neither pretty nor organised in the most efficient way, 
but it's jut for illustrative purposes.

*/

import Header from "./components/Header"; // Importing Header component
import Footer from "./components/Footer"; // Importing Footer component
import Button from "./components/Button"; //  Importing Button component

import './style.css';  //importing style.css


// App Component (Root Component)
const App = () => {
  return (
    <div className="container">
      <Header />
      <Button />
      <Footer />
    </div>
  );
};

// Exporting App component
export default App;
