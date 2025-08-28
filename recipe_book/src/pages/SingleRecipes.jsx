import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipes = () => {
  const { data, setdata } = useContext(recipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: recipe || {
      title: "",
      image: "",
      ingredients: "",
      description: "",
      category: "",
    },
  });

  const updateHandler = (formData) => {
    const index = data.findIndex((r) => params.id == r.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...formData };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated");
    navigate("/recipes");
  };

  const deleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.error("Recipe Deleted");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="flex flex-col md:flex-row justify-between gap-10 w-full p-6">
      {/* Left Side: Recipe Preview */}
      <div className="left md:w-1/2 bg-gray-900 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          className="w-full h-[50vh] rounded object-cover mb-4"
          src={recipe.image}
          alt={recipe.title}
        />
        <p className="mb-2">
          <span className="text-xl font-semibold text-red-400">Ingredients: </span>
          {recipe.ingredients}
        </p>
        <p className="mb-2">
          <span className="text-xl font-semibold text-red-400">Description: </span>
          {recipe.description}
        </p>
        <p>
          <span className="text-xl font-semibold text-red-400">Category: </span>
          {recipe.category}
        </p>
      </div>

      {/* Right Side: Update Form */}
      <form
        className="right md:w-1/2 bg-gray-900 shadow-lg rounded-lg p-6"
        onSubmit={handleSubmit(updateHandler)}
      >
        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            {...register("image", { required: "Image URL is required" })}
            type="url"
            placeholder="Enter Image Url"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
          {errors.image && <small className="text-red-500">{errors.image.message}</small>}
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            placeholder="Recipe Title"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
          {errors.title && <small className="text-red-500">{errors.title.message}</small>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Ingredients</label>
          <textarea
            {...register("ingredients")}
            placeholder="Recipe Ingredients"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
            rows="3"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            {...register("description")}
            placeholder="Recipe description"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
            rows="4"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            {...register("category")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
          >
            Update Recipe
          </button>
          <button
            type="button"
            onClick={deleteHandler}
            className="flex-1 bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="text-center p-10">Loading recipe...</div>
  );
};

export default SingleRecipes;
