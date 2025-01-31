/*

Lists
A lot of time you'll have data in a list, i.e. an array, and you'll need to render 
the contents of said list with a similar markup:

Product cards in an eCommerce platform
Pictures on your Instagram feed
Pokémon on your Pokémon apps!
You can rely on language constructs like the for loop or the map method in arrays. 

You can see that when rendering a list, 
we pass a special attribute (property) called key, 
we do this so React can keep track of elements in that list individually and 
therefore only update those elements that change instead of the entire list! 
If you don't pass this special property, React will warn you in the console. 

Using the index value of the array item is not 
advisible because as the array changes, 
the index can change for some elements! 
Ideally, this id should be a unique identifier that comes from your data source!

 

*/
import ListWithMap from "./components/ListWithMap";
import WhyDoesMapWork from "./components/WhyDoesMapWork";
import RenderingAListDirectly from "./components/RenderingAListDirectly";
import "./style.css";

// In short... the map method is your friend!
const App = () => {
  return (
    <>
      <ListWithMap />
      <WhyDoesMapWork />
      <RenderingAListDirectly />
    </>
  );
};

export default App;
