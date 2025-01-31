// This is a functional component that uses JSX, that HTML-like syntax. All is good
const WithJSX = () => {
  return (
    <>
      <h1>with jsx</h1>
      {/* event on click console log */}
      <button onClick={() => console.log("clicked!")}>Click here!</button>
    </>
  );
};

// Exporting WithJSX component
export default WithJSX;
