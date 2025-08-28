import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { data, setdata } = useContext(recipeContext);

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data, recipe];
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("✅ Recipe Created Successfully!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-800">
      <div className="bg-gray-900 shadow-lg rounded-xl p-8 w-full max-w-2xl h-[100vh] overflow-y-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-red-500 mb-6 text-center">
          Create Your Own Recipe
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-5">
          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Image URL
            </label>
            <input
              {...register("image")}
              type="url"
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Title
            </label>
            <input
              {...register("title")}
              type="text"
              placeholder="Recipe title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Ingredients
            </label>
            <textarea
              {...register("ingredients")}
              placeholder="Enter recipe ingredients"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
              rows="3"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Description
            </label>
            <textarea
              {...register("description")}
              placeholder="Enter recipe description"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
              rows="4"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Category
            </label>
            <select
              {...register("category")}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg shadow hover:bg-red-600 transition duration-200"
          >
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
