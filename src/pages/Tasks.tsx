import {FC} from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import Topbar from '../components/Topbar';
import { BsPlusCircle } from 'react-icons/bs';
import { CiClock1 } from "react-icons/ci";

import "../App.css"

const Tasks: FC = () => {
  return (
    <DashboardLayout>
      <div className="main h-[90vh] md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:w-[80%] md:p-5 z-20 border-[0px] md:border-[1px] border-white border-opacity-10 overflow-scroll">
        <div className="hidden md:block">
          <Topbar />
        </div>
        <div className="text-white text-lg font-bold mt-2">
          Ready For Today’s Tasks?
          <br /> Let’s Do This!!!
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-[#56CFE1] text-[13px]">Todo</h1>
            <div className="w-[100px]  md:w-[150px] h-[70px] border-[1px] border-[#56CFE1] border-dashed flex justify-center items-center cursor-pointer md:mt-2 rounded-md">
              <BsPlusCircle className="text-[#56CFE1]" />
            </div>
          </div>
        
        </div>
        <div className="flex gap-[20px] mt-10">
          <div className="w-[100px]  md:w-[150px] h-fit p-2 md:mt-2 rounded-md bg-gray-600 ">
            <div className="flex justify-between items-center">
              <h1 className="text-black">12 Tasks</h1>
              <div className="h-[10px] w-[10px] rounded-full bg-[#BD6AF7]"></div>
            </div>
            <h1 className="font-bold">Personal</h1>
            <div className="w-full h-[5px] bg-white rounded-md">
              <div className="bg-[#052659] h-[5px] w-[80px]"></div>
            </div>
          </div>
          <div className="w-[100px]  md:w-[150px] h-fit p-2 md:mt-2 rounded-md bg-gray-600 ">
            <div className="flex justify-between items-center">
              <h1 className="text-black">4 Tasks</h1>
              <div className="h-[10px] w-[10px] rounded-full bg-[#FBC02D]"></div>
            </div>
            <h1 className="font-bold">Work</h1>
            <div className="w-full h-[5px] bg-white rounded-md">
              <div className="bg-[#052659] h-[5px] w-[80px]"></div>
            </div>
          </div>
          <div className="w-[100px]  md:w-[150px] h-fit p-2 md:mt-2 rounded-md bg-gray-600 ">
            <div className="flex justify-between items-center">
              <h1 className="text-black">17 Tasks</h1>
              <div className="h-[10px] w-[10px] rounded-full bg-[#7CB342]"></div>
            </div>
            <h1 className="font-bold">Family</h1>
            <div className="w-full h-[5px] bg-white rounded-md">
              <div className="bg-[#052659] h-[5px] w-[80px]"></div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Tasks
