import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[80vh] bg-gray-900 p-8 rounded">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-500 mb-4">🍴 Recipe Book</h1>
        <p className="text-lg text-white mb-6">
          Discover, cook, and save your favourite recipes in one place!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/recipes"
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
          >
            Browse Recipes
          </Link>
          <Link
            to="/createrecipes"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300"
          >
            Create Recipe
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-400 mb-2">🍜 Easy Recipes</h2>
          <p className="text-white">
            Find quick and simple recipes to cook anytime with everyday ingredients.
          </p>
        </div>
        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-400 mb-2">❤️ Save Favourites</h2>
          <p className="text-white">
            Add your favourite recipes and access them instantly from the favourites page.
          </p>
        </div>
        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-400 mb-2">✍️ Share Yours</h2>
          <p className="text-white">
            Create and share your own recipes with the community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
