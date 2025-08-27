import React, { useContext } from 'react'
import { set, useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { recipeContext } from '../context/RecipeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()
  const { data, setdata } = useContext(recipeContext)

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid()

    setdata([...data, recipe])
    toast.success("Recipe Created Successfully")
    reset()
    navigate("/recipes")
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create Your Own Recipe</h1>
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input className='block border-1 outline-0 p-2 w-[40%] rounded ' {...register("image")} type="url" placeholder='Enter Image Url' />
      <small className='text-red-400'>Here error will be shown</small>
      <input className='block border-1 outline-0 p-2 w-[40%] mt-5 rounded ' {...register("title")} type="text" placeholder='Recipe Title' />
      <textarea className='block border-1 outline-0 p-2 w-[40%] mt-5 rounded ' {...register("ingredients")} placeholder='Recipe Ingredints' />
      <textarea className='block border-1 outline-0 p-2 w-[40%] mt-5 rounded ' {...register("description")} placeholder='Recipe description' />
      <select className='block border-1 p-2 w-[40%] mt-5 rounded ' {...register("category")} >
        <option value="breakfast" className='bg-gray-800'>Breakfast</option>
        <option value="lunch" className='bg-gray-800'>Lunch</option>
        <option value="dinner" className='bg-gray-800'>Dinner</option>
      </select>

      <button className='block mt-5 px-4 py-2 border-0 rounded bg-gray-900'>Create Recipe</button>
    </form>
    </div>
  )
}

export default Create