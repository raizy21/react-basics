// const title = "Change this...";
import Logo from "./Logo"; // Importing Logo component
// Header Component
const Header = ({ title }) => {
  return (
    <header>
      <Logo />
      <h1>AAA</h1>
      <h1>{title}</h1>
      {/* Check line 14, and how the title is coming title.toUpperCase()  */}
      <h1>{title.toUpperCase()}</h1>
    </header>
  );
};

export default Header;
