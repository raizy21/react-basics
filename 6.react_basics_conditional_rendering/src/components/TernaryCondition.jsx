// Define or import ComponentA and ComponentB
const ComponentA = () => <div>Component A</div>;
const ComponentB = () => <div>Component B</div>;

// With a ternary
const TernaryCondition = () => {
  const condition = false; // Define your condition here
  return condition ? <ComponentA /> : <ComponentB />;
};

export default TernaryCondition;
