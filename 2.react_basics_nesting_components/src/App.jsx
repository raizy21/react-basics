/*
Nesting components
Nesting components in React is a way to build complex UIs by combining smaller, reusable components. 
This approach promotes modularity, easier maintenance, and better organization of code. 
Something we can infere from this is that the App function is itself a component, 
meaning that, from the previous example, it's a parent to Header, Button and Footer

App
├─ Header
├─ Button
├─ Footer
In this example, however, we see the same Logo component being re-used in Header and Footer, 
creating a tree that looks like this!

App
├─ Header
│  ├─ Logo
├─ Button
├─ Footer
│  ├─ Logo

Key Points on Nesting Components:
  Hierarchy: Components can be nested within each other, 
creating a parent-child relationship. This hierarchy allows for a structured way to build complex UIs.
  Props Passing: Data can be passed from parent components to child components via a special parameter 
called props. 
This allows child components to be customized and interact with the parent component. 
More on this later.
  Composition: Nested components can be composed to form larger components, 
enabling the reuse of smaller components across different parts of the application.

*/

import Header from "./components/Header"; // Import Header component
import Button from "./components/Button"; // Import Button component
import Footer from "./components/Footer"; // Import Footer component

// App Component (Root Component)
const App = () => {
  return (
    <div>
      {/* header not displayed */}
      <Header /> {/* Header Component */}
      <Button /> {/* Button Component */}
      <Footer /> {/* Footer Component */}
    </div>
  );
};

// Export App component
export default App;
