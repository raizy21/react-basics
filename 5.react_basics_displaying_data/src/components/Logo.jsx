//logo url
const logoURL =
  "https://www.wbscodingschool.com/wp-content/uploads/2023/10/WBSCS-Red-logo.webp";

// Logo Component
const Logo = () => {
  // Check line 7, we are embedding the value of logoUrl, feel free to change the url to another image!

  return <img src={logoURL} alt="WBS CS" width="200" />;
};

// Exporting Logo component
export default Logo;
