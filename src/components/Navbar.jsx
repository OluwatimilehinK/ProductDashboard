import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-3 w-full shadow-lg '>
        <h2>KAZEEM'S STORE</h2>
        <div className='flex gap-5'>
            <Link to="/">Home</Link>
            <Link to="/Product">Products</Link>
        </div>
    </div>
  )
}

export default Navbar