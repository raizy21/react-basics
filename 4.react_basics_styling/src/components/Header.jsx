import Logo from "./Logo";  // Logo Component

// Header Component
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav>
        <ul className="navbar">
          <li>Home</li>
          <li id="active">About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
export default Logo;
