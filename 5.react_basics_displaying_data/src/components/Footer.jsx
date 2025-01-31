import Logo from "./Logo"; // Importing Logo component
// Footer Component
const Footer = () => {
  return (
    <footer>
      {/* Check line 27, we are straight up embedding an expression that will ultimately be computed 
    before resolving to the value! */}
      <Logo />

      <br />
      {Math.sqrt(4)}
      <br />
      {Math.sqrt(25)}
    </footer>
  );
};

// Exporting Footer component
export default Footer;
