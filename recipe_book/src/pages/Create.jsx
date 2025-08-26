import React, { useContext } from 'react'
import { set, useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { recipeContext } from '../context/RecipeContext'

const Create = () => {
  const { register, handleSubmit, reset } = useForm()
  const { data, setdata } = useContext(recipeContext)

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid()

    setdata([...data, recipe])
    reset()
  }
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input className='block border-1 outline-0 p-2 w-[40%] rounded ' {...register("image")} type="url" placeholder='Enter Image Url' />
      <small className='text-red-400'>Here error will be shown</small>
      <input className='block border-1 outline-0 p-2 w-[40%] mt-5 rounded ' {...register("title")} type="text" placeholder='Recipe Title' />
      <textarea className='block border-1 outline-0 p-2 w-[40%] mt-5 rounded ' {...register("description")} placeholder='Recipe Details' />
      <textarea className='block border-1 outline-0 p-2 w-[40%] mt-5 rounded ' {...register("ingredints")} placeholder='Recipe Ingredints' />
      <select className='block border-1 p-2 w-[40%] mt-5 rounded ' {...register("category")} >
        <option value="cat-1" className='bg-gray-800'>Category 1</option>
        <option value="cat-2" className='bg-gray-800'>Category 2</option>
        <option value="cat-3" className='bg-gray-800'>Category 3</option>
      </select>

      <button className='block mt-5 px-4 py-2 border-0 rounded bg-gray-900'>Create Recipe</button>
    </form>
  )
}

export default Create