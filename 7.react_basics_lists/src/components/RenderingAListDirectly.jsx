const RenderingAListDirectly = () => {
  // A pre-made array of JSX elements
  const legendaryBirds = [
    <div key={1}>
      <div>Articuno</div>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
        alt="Articuno"
      />
    </div>,
    <div key={2}>
      <div>Articuno</div>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
        alt="Zapdos"
      />
    </div>,
    <div key={3}>
      <div>Articuno</div>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
        alt="Moltres"
      />
    </div>,
    <div key={4}>
      <div>Lugia</div>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png"
        alt="Lugia"
      />
    </div>,
  ];
  // Returned directly. This approach is of course impractical but is here to illustrate a point (and show more cool Pok�mon)
  return <div className="list">{legendaryBirds}</div>;
};

export default RenderingAListDirectly;
