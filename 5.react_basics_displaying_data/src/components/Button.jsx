// Button Component
const Button = () => {
  // Function to handle click event
  const handleClick = (e) => {
    console.log(e);
    console.log("Hey there!");
  };
  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

// Exporting Button component
export default Button;
