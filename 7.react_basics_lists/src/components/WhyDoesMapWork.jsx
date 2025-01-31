const eeveeEvolutions = [
  {
    id: 1,
    name: "Eevee",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  },
  {
    id: 2,
    name: "Vaporeon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
  },
  {
    id: 3,
    name: "Jolteon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
  },
  {
    id: 4,
    name: "Flareon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
  },
];

const WhyDoesMapWork = () => {
  // We know the .map method returns an array
  // map
  const arrayOfElements = eeveeEvolutions.map(({ id, name, sprite }) => (
    <div key={id}>
      <p>{id}</p>
      <div>{name}</div>
      <img src={sprite} alt={name} />
    </div>
  ));
  // So, the resulting array is an array of element. See for yourself
  console.log(arrayOfElements);  //object to console
  // This means that JSX support rendering arrays directly. Don't believe us? See the next example
  return <div className="list">{arrayOfElements}</div>;  //returning the array of elements
};

export default WhyDoesMapWork;
