/*


React Intro
React is a popular JavaScript library for building interactive user interfaces, 
particularly single-page applications. It emphasizes the following key concepts:

Interactive UI with Reusable Components
  React allows developers to create complex UIs from small, 
  isolated pieces of code called components. 
  Each component is a self-contained block that manages its own state and rendering logic. 
  By composing these components, developers can build intricate and dynamic interfaces efficiently. 
  This modular approach promotes reusability and maintainability, as components 
  can be reused across different parts of an application.

Virtual DOM
  React uses a Virtual DOM to optimize updates and rendering. 
  The Virtual DOM is a lightweight copy of the actual DOM. 
  When the state of a component changes, React creates a new Virtual DOM and compares 
  it with the previous version. 
  This process, known as reconciliation, determines the minimal set of changes needed to update 
  the real DOM. By only updating the parts of the DOM that have changed, 
  React enhances performance and ensures a smooth user experience.

Declarative Approach
  React employs a declarative programming style, 
  which means developers describe what the UI should look like for a given state, 
  and React takes care of updating the actual UI to match this state. 
  Instead of manually manipulating the DOM, 
  developers define components and their interactions in a straightforward manner, 
  making the code more predictable and easier to debug.

In summary, React enables the creation of interactive UIs through reusable components, 
uses the Virtual DOM to efficiently update only what's necessary, 
and leverages a declarative approach to simplify development and improve code readability.

In this familiar example, we declare that given an existing list of pokemon, 
it should render as many list items, 
then we bind the button to an event to fetch more items and React takes care of updating the UI. 
Pretty cool! We'll learn how to do this and more!




*/

import { useRef, useState } from "react"; //import useRef and useState from react

const App = () => {
  const listRef = useRef(); //create a ref
  const [loading, setLoading] = useState(false); //create a loading state
  const [currentID, setCurentID] = useState(1); //create a currentID state
  const [pokemon, setPokemon] = useState([]); //create a pokemon state

  //get a pokemon from the API
  const getPokemon = async () => {
    try {
      setLoading(true); //loads for loading
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentID}`); //call the fetch
      if (!res.ok) throw new Error("Something went wrong"); //if not ok, throw an error
      const data = await res.json(); //get the data to json
      setPokemon((prev) => [...prev, data]); //set the pokemon in useState [pokemon, setPokemon]
      setCurentID((prev) => prev + 1); //increment the currentID
      listRef.current.lastElementChild?.scrollIntoView(); //scroll to the last element
    } catch (e) {
      //catch the error
      console.error(e); //log the error
    } finally {
      setLoading(false); //set loading to false
    }
  };

  return (
    //  first container
    <div
      className="bg-red-400 p-5 md:p-20"
      style={{ height: "calc(100vh - 40px)" }}
    >
      {/* second container */}
      <div className="bg-white p-5 rounded-lg shadow-md w-full h-full">
        {/* title */}
        <h1 className="text-2xl text-center font-bold text-gray-800 mb-4">
          Pokemon
        </h1>
        {/* button loading with onclick event fetch  
        
        ${
            loading
              ? "bg-gray-300 hover:bg-gray-300"
              : "bg-red-500 hover:bg-yellow-500"
          }`}
        
        */}
        <button
          className={`text-white font-bold py-2 px-4 rounded w-full ${
            loading
              ? "bg-gray-300 hover:bg-gray-300"
              : "bg-red-500 hover:bg-yellow-500"
          }`}
          onClick={getPokemon}
          disabled={loading}
        >
          Catch them all
        </button>

        {/* list */}
        <ul
          id="todo-list"
          className="overflow-y-scroll"
          style={{ height: "480px" }}
          ref={listRef} //ref
        >
          {/* map pokemon from useState*/}
          {pokemon.map((p) => (
            <li key={p.id} className="flex items-center justify-around">
              <div className="capitalize">{p.species.name}</div>
              <img src={p.sprites.front_default} />
            </li>
          ))}
          {/* end of map */}
        </ul>
      </div>
    </div>
  );
};

export default App;
