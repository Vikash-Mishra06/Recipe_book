import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-800 text-white font-thin py-5 px-[10%]'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App