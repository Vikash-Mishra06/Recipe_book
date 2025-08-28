import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { recipeContext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

const SingleRecipes = () => {
  const { data, setdata } = useContext(recipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const navigate = useNavigate();

  const { register, handleSubmit, reset, getValues } = useForm({
    defaultValues: recipe ? {
      title: recipe.title,
      image: recipe.image,
      ingredients: recipe.ingredients,
      description: recipe.description,
      category: recipe.category
    } : {
      title: '',
      image: '',
      ingredients: '',
      description: '',
      category: ''
    }
  });

  const updateHandler = () => {
    const formData = getValues(); // ✅ latest form input values
    const index = data.findIndex((r) => params.id == r.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...formData };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated");
    navigate("/recipes")
  };


  const deleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata))
    toast.error("Recipe Deleted");
    navigate("/recipes");
  };

  return recipe ? (
    <div className='flex justify-between gap-50 w-full'>
      <div className="left w-1/2 p-2">
        <h1 className='text-3xl font-black'>{recipe.title}</h1>
        <img className='w-[25vw] h-[35vh] rounded object-cover' src={recipe.image} alt="" />
        <p><span className='text-2xl font-normal text-red-400'>Ingredients: </span>{recipe.ingredients}</p>
        <p><span className='text-2xl font-normal text-red-400'>Description: </span>{recipe.description}</p>
        <p><span className='text-2xl font-normal text-red-400'>Category: </span>{recipe.category}</p>
      </div>

      <form className='right w-1/2 p-2' onSubmit={handleSubmit(updateHandler)}>
        <input className='block border-1 outline-0 p-2 w-[40%] rounded ' {...register("image")} type="url" placeholder='Enter Image Url' />
        <small className='text-red-400'>Here error will be shown</small>
        <input className='block border-1 outline-0 p-2 w-[40%] mt-5 rounded ' {...register("title")} type="text" placeholder='Recipe Title' />
        <textarea className='block border-1 outline-0 p-2 w-[40%] mt-5 rounded ' {...register("ingredients")} placeholder='Recipe Ingredints' />
        <textarea className='block border-1 outline-0 p-2 w-[40%] mt-5 rounded ' {...register("description")} placeholder='Recipe description' />
        <select className='block border-1 p-2 w-[40%] mt-5 rounded ' {...register("category")}>
          <option value="breakfast" className='bg-gray-800'>Breakfast</option>
          <option value="lunch" className='bg-gray-800'>Lunch</option>
          <option value="dinner" className='bg-gray-800'>Dinner</option>
        </select>

        <button type="button" onClick={updateHandler} className='block mt-5 px-4 py-2 border-0 rounded bg-green-900'>Update Recipe</button>
        <button onClick={deleteHandler} className='block mt-5 px-4 py-2 border-0 rounded bg-red-900'>Delete Recipe</button>
      </form>
    </div>
  ) : (
    "loading recipes"
  );
};

export default SingleRecipes;
