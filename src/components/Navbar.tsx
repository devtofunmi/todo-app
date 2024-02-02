import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <h1 className='text-white text-xl'>N Notes</h1>
       <div className="flex gap-[10px]  flex-col md:flex-row">
            <button className=" text-white hover:text-[#4cbf87] px-10 py-2 rounded-md"
            >
              <Link to="/login">LogIn</Link>
            </button>
            <button className="bg-black text-white hover:text-[#4cbf87] px-10 py-2 rounded-md"
            >
              <Link to="/signup">SignUp</Link>
            </button>
          </div>
    </div>
  )
}

export default Navbar
