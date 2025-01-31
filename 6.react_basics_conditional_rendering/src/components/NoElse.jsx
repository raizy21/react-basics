import ComponentA from "./ComponetA";
const condition = Math.random > 0.5 ? true : false; // Random condition

// Without an "else" scenario using the logical &&
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation
const NoElse = () => {
  // Only if condition is true!
  return (
    <>
      {/* <p>test</p> */}
      <p>
        {/* {condition} <ComponentA /> */}
      </p>
      {/* {condition && <ComponentA />} */}
    </>
  );
  // condition && <ComponentA />;
};

export default NoElse;
