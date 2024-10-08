import React from "react";
import CocktailsList from "../components/CocktailCards";
import SearchForm from "../components/SearchForm";

function Main() {
  //Loading state
  const [loading, setLoading] = React.useState(false);

  //Search state
  const [searchTerm, setSearchTerm] = React.useState("a");

  //Cocktails state
  const [cocktails, setCocktails] = React.useState([]);

  //Using empty array[] as second array so useEffect runs once when component mounts

  React.useEffect(() => {
    setLoading(true);                   // Show "Loading..." when data is loading
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`      //Fetch data from API
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailsList loading={loading} cocktails={cocktails} />
    </main>
  );
}

export default Main;