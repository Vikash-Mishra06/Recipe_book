import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"
import About from "../pages/About"
import Create from "../pages/Create"
import SingleRecipes from '../pages/SingleRecipes'
import PageNotFound from '../pages/PageNotFound'
import Favourite from '../pages/Favourite'



const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<SingleRecipes />} />
      <Route path="/about" element={<About />} />
      <Route path="/createrecipes" element={<Create />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path="/favourite" element={<Favourite />} />
    </Routes>
  )
}

export default Mainroutes