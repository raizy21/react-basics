/*
Conditional Rendering
Conditional rendering refers to, well, rendering a particular output or UI element 
based on a given condition.

This is where React really shows its strength: 
React can respond to changes in the data within our app and render the appropriate version of 
the UI for a given state of said data!

There's no special syntax to declare conditions, so you can use different approaches!

Right click on the preview and reload frame to see the output changing!


*/

import IfElseCondition from "./components/IfElseCondition";
import TernaryCondition from "./components/TernaryCondition";
import NoElse from "./components/NoElse";
import WithASwitch from "./components/WithASwitch";

// Entry point
const App = () => {
  return (
    <>
      <p>test</p>
      {/* if else */}
      <IfElseCondition />
      {/* end of if else */}
      {/* ternary */}
      <TernaryCondition />
      {/* end of ternary */}
      {/* no else */}
      <NoElse />
      {/* end of no else */}
      {/* switch */}
      <WithASwitch />
      {/* end of switch */}
    </>
  );
};

export default App;
