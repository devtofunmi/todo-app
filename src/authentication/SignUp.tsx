import React from "react";
import { Link } from "react-router-dom";
import DesktopAuth from "../assets/DesktopAuth.png";

const Signup: React.FC = () => {
  
  return (
    <div className="md:h-[100vh] flex items-center justify-center">
      <div
        className="flex w-[90%] mt-20 md:mt-0 md:w-[70%]
        md:pr-0 md:py-0 lg:w-7/12 md:justify-between md:items-center
        bg-black shadow-2xl rounded-2xl p-5  bg-opacity-25"
      >
        <div className="w-[95%] md:w-[50%] md:h-[60%] flex flex-col justify-center">
          <h1 className="my-[20px] text-white text-2xl font-semibold text-center">
            Create account
          </h1>
          <div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Username"
                 className="bg-transparent py-3 px-3 mt-5 md:mt-2 text-white bg-black shadow-xl border-[0px] border-white rounded-md  bg-opacity-25"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent py-3 px-3 mt-5 md:mt-2 text-white bg-black shadow-xl border-[0px] border-white rounded-md  bg-opacity-25"
              />
               <input
                  type="password"
                  placeholder="Password"
                   className="bg-transparent py-3 px-3 mt-5 md:mt-2 text-white bg-black shadow-xl border-[0px] border-white rounded-md  bg-opacity-25"
                />
              <button className=" w-full bg-black py-2 rounded-md hover:text-[#4cbf87] mt-2 text-white">
              <Link
              to="/note"
             
            >  Submit  </Link>
              </button>
            </div>
             <div className="flex gap-5 mt-2">
          <h1 className="text-white">Already have an account? </h1>
          <Link
              to="/login"      
            > 
            <h1 className="text-white underline hover:text-[#4cbf87]"> Login </h1> </Link>
        </div>
          </div>
        </div>
        <div className="hidden md:flex ">
          <img
          src={DesktopAuth}
          className="desktop-img flex h-[545px] ml-[35px]"
        />
        </div>
      </div>
    </div>
  );
};

export default Signup;