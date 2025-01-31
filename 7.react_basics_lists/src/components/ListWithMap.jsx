const yesPokemonAgain = [
  {
    id: 1,
    name: "Bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 2,
    name: "Charmander",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 3,
    name: "Squirtle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 4,
    name: "Pikachu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
];

const ListWithMap = () => {
  // Yes, this is the .map() method all arrays have!
  return (
    <div className="list">
      {/* map */}
      {yesPokemonAgain.map(({ id, name, sprite }) => (
        <div key={id}>
          <div>{name}</div>
          <img src={sprite} alt={name} />
        </div>
      ))}
    </div>
  );
};

export default ListWithMap;
