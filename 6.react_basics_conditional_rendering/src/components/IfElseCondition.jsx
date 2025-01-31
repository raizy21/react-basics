import ComponentA from "./ComponetA";
import ComponentB from "./ComponentB";

// With an if/else
const IfElseCondition = ({ condition }) => {
  if (condition) {
    return <ComponentA />;
  } else {
    return <ComponentB />;
  }
};

export default IfElseCondition;
