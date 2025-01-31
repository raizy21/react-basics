// Conditions
const fruits = ["lemon", "tangerine", "strawberry", "cucumber", "banana"]; // Array of fruits

// Switch!
const WithASwitch = () => {
  const fruit = fruits[Math.floor(Math.random() * fruits.length)];
  console.log(fruit);
  switch (fruit) {
    case "banana":
    case "blue berry":
      return <div>Such a nice berry!</div>;
    case "lemon":
    case "tangerine":
      return <div>Nice and citrusy...</div>;
    case "strawberry":
    default:
      return <div>That is not a fruit!</div>;
  }
};

export default WithASwitch;
