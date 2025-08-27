import React from 'react'
import {Link} from 'react-router-dom'

const RecipeCard = (props) => {
    const { id, image, title, ingredients, description, category } = props.recipe
    return (
        <Link to={`/recipes/details/${id}`} className='duration-100 hover:scale-101 mr-5 mb-10 block w-[25vw] h-full overflow-hidden shadow border-1 rounded p-2'>
            <img className='w-full h-[35vh] rounded object-cover mb-2' src={image} alt="" />
            <h1 className='text-2xl font-medium mb-2  text-red-400'>{title}</h1>
            <p className='mb-2'><span className='text-xl font-normal text-red-300'>ingredients:</span> {ingredients.slice(0, 100)}... {""} <small className='text-blue-400'>more</small> </p>
            <p className='mb-2'><span className='text-xl font-normal text-red-300'>description:</span> {description.slice(0, 100)}... {""} <small className='text-blue-400'>more</small> </p>
            <h3><span className='text-xl font-normal text-red-300'>category: </span> {category}</h3>
        </Link>
    )
}

export default RecipeCard