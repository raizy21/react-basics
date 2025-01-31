import React from "react"; // Importing react

// This component is not using JSX, instead,
// it calls React.createElement directly.
// Notice how, in order to create a nesting relationship,
// you'd need to nest these calls... Imagine doing that for a complex layout!
// Ain't nobody got time for that!
// If you REAAAAALLY want to know more about this method,
// go here https://react.dev/reference/react/createElement

const WithCreateElement = () => {
  return React.createElement(
    // React.createElement method
    React.Fragment, //  React.Fragment
    {},
    React.createElement("h1", {}, "with create element"), // React.createElement method
    React.createElement(
      "button",
      {
        onClick: () => console.log("clicked!"),
      },
      "Click here!"
    )
    // event onclick to console log
  );
};
export default WithCreateElement;
