import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
import { FavouriteProvider } from './context/FavouriteContext'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-800 text-white font-thin py-5 px-[10%]'>
      <FavouriteProvider>
      <Navbar />
      <Mainroutes />
      </FavouriteProvider>
    </div>
  )
}

export default App