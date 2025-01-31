/*

Creating and rendering components
React components are the fundamental building blocks of a React application. 
They encapsulate logic, structure, and even style into reusable pieces that can be 
combined to build complex user interfaces.

When naming a component, it's important to note that it HAS to start with an uppercase!

Key Features of React Components:

  Reusability: Components can be reused throughout an application, 
promoting code reuse and reducing redundancy.
  Encapsulation: Each component manages its own state and rendering logic, ensuring modularity.
  Composability: Components can be composed together to form more complex UI elements 
and application structures.
  Separation of Concerns: Components enable developers to separate different parts of the UI 
into distinct, manageable pieces.

Types of Components
  Functional Components: In modern React, components are functions that return UI elements.
  Class Components: However, in legacy code, you may encounter components created with classes 
with an OOP approach in design. This is still supported but not longer suggested for new apps.

Each component represents a part of the user interface and can be as small as a button 
or as large as a complete page layout. 
These components can be nested within each other to build more complex UIs.

*/

import Header from "./components/Header"; //import Header component
import Button from "./components/Button"; //import Button component
import Footer from "./components/Footer"; //import Footer component

// App Component (Root Component)
const App = () => {
  return (
    <div>
      {/* add a new line */}
      <h1>New line</h1>
      {/* add the Header component */}
      <Header />
      {/* add the Button component */}
      <Button />
      {/* add the Footer component */}
      <Footer />
    </div>
  );
};

export default App;
