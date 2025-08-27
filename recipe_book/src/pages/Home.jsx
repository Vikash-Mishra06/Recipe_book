import React from 'react'
import axios from '../utils/axios'

const Home = () => {
  const getproduct = async () => {
    try{
      const response = await axios.get("/products")
      console.log(response.data)
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={getproduct}>Get Products</button>
    </div>
  )
}

export default Home