import React from "react";
import Cocktail from "./Cocktail";

function CocktailCards({ cocktails, loading }) {
  if (loading) {
    return <h1 className="section-title">Loading...</h1>;
  }
  if (cocktails.length < 1) {
    return (
      <h1 className="section-title">
        No cocktails found :(
      </h1>
    );
  }
  return (
    <section className="section">
      <h1 className="section-title">Cocktails</h1>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default CocktailCards;