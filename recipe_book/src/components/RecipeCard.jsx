import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavouriteContext } from "../context/FavouriteContext";
import { useNavigate } from 'react-router-dom'


const RecipeCard = (props) => {
    const navigate = useNavigate()

  const { id, image, title, ingredients, description, category } = props.recipe;
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouriteContext);

  // check if already favourite
  const isFavourite = favourites.some((fav) => fav.id === id);

  const handleFavourite = (e) => {
    e.preventDefault(); // prevent <Link> navigation
    if (isFavourite) {
      removeFromFavourites(id);
    } else {
      addToFavourites(props.recipe);
      navigate("/favourite")
    }
  };

  return (
    <Link
      to={`/recipes/details/${id}`}
      className=" mr-5 mb-10 block w-[25vw] h-full overflow-hidden shadow border-1 rounded p-2 relative"
    >
      <img className="w-full h-[35vh] rounded object-cover mb-2" src={image} alt="" />
      <h1 className="text-2xl font-medium mb-2  text-red-400">{title}</h1>

      <button 
        onClick={handleFavourite}
        className="duration-100 hover:scale-130 text-4xl text-red-400 absolute right-3 top-3"
      >
        <i className={isFavourite ? "ri-heart-fill" : "ri-heart-line"}></i>
      </button>

      <p className="mb-2">
        <span className="text-xl font-normal text-red-300">ingredients:</span> {ingredients}
      </p>
      <p className="mb-2">
        <span className="text-xl font-normal text-red-300">description:</span> {description}
      </p>
      <h3>
        <span className="text-xl font-normal text-red-300">category: </span> {category}
      </h3>
    </Link>
  );
};

export default RecipeCard;
