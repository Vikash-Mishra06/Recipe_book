import React, { createContext, useEffect, useState } from 'react'

export const recipeContext = createContext(null)

const RecipeContext = (props) => {
    const [data, setdata] = useState([])

    useEffect(() => {
        setdata(JSON.parse(localStorage.getItem("recipes")) || [])
    }, [])
    return (
        <recipeContext.Provider value={{ data, setdata }}>
            {props.children}
        </recipeContext.Provider>
    )
}

export default RecipeContext