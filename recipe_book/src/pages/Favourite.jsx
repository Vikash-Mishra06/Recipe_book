import React, { useContext } from "react";
import { FavouriteContext } from "../context/FavouriteContext";
import RecipeCard from "../components/RecipeCard";

const Favourite = ({ recipe }) => {
  const { favourites } = useContext(FavouriteContext);
  

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Your Favourites</h1>
      {favourites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        <div className="flex flex-wrap gap-5">
          {favourites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourite;
