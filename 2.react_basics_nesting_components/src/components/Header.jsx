import Logo from "./Logo"; // Import Logo component
// Header Component
const Header = () => {
  return (
    <>
      {/* logo not displayed */}
      <Logo /> {/* logo component */}
      <h1>Welcome to React</h1> {/* Header Title */}
    </>
  );
};

// Export Header component
export default Header;
