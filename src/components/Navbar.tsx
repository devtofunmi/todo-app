import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-white text-xl'>N Notes</h1>
       <div className="flex gap-[10px]  flex-col md:flex-row">
            <button className=" text-white hover:text-[#4cbf87] px-10 py-1 rounded-md underline"
            >
              <Link to="/login">LogIn</Link>
            </button>
            <button className="border-[1px] border-white text-white hover:text-[#4cbf87] px-5 py-1 rounded-md"
            >
              <Link to="/signup">SignUp</Link>
            </button>
          </div>
    </div>
  )
}

export default Navbar
