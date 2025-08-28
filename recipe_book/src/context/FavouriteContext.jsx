import React, { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

// create context
export const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // add recipe to favourites
  const addToFavourites = (recipe) => {
    setFavourites((prev) => {
      // prevent duplicates
      if (prev.find((item) => item.id === recipe.id)) return prev;
      return [...prev, recipe];
    });
      toast.success("Added to Favourite")
  };

  // remove recipe from favourites
  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((item) => item.id !== id));
    toast.error("Removed From Favourite")
  };


  return (
    <FavouriteContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavouriteContext.Provider>
  );
};
