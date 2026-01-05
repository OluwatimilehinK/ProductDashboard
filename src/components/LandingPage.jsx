import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-3xl'>
        <h1 className='font-bold'>Welcome to Kazeem's Store</h1>
        <Link to="/product" className='text-blue-600 hover:underline text-lg'>Go to products</Link>
    </div>
  )
}

export default LandingPage