import React from "react"; // Import the React library
import Logo from "./Logo"; // Import the Logo component
// Footer Component - Class-based, only here for illustrative purposes, we won't cover them
//class Footer extends React.Component needs to import react
class Footer extends React.Component {
  // Create a class-based component called Footer
  render() {
    return (
      <footer>
        <Logo />
        Footer content
      </footer>
    );
  }
}
// Export Footer component
export default Footer;
