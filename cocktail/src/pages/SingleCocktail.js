import React from "react";

import { useParams, Link } from "react-router-dom";
//useParams returns an object of key/value pairs of URL parameters. 

function SingleCocktail() {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(false);

  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);                      // Show "Loading..." when data is loading
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`    //Fetch data from API
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strAlcoholic: info,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (!cocktail) {
    return <h2 className="section-title">Error...</h2>;
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary btn-drink">         {/* Back button to main page */}
          Back  
        </Link> 
        <h2 className="drinkPage-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>name : {name}</p>
            <p>category : {category}</p>
            <p>info : {info}</p>
            <p>glass : {glass}</p>
            <p>instructions: {instructions}</p>
            <p>
              ingredients :{" "}
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SingleCocktail;