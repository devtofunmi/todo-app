import {FC} from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";

const MobileSidebar: FC = () => {
  return (
    <div className=" h-[500px] text-white p-3 bg-[#181819]  w-[280px] z-20 flex flex-col justify-center items-center  border-[1px] border-white border-opacity-10">
      <div>
        {/* <img className="w-[100px]" src={dashboadlogo} alt="dashboard_logo" /> */}
        {/* <h1>Notes</h1> */}
      </div>
      <div className="mt-7 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#4cbf87] ">
        <MdSpaceDashboard
          size={25}
          className="hover:text-blue-500 text-white cursor-pointer "
        />
        <Link to={"/"}>
          <h1 className="text-md">Dashboard</h1>
        </Link>
      </div>
      <div className="mt-5 flex gap-3 items-center py-2 px-9 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#4cbf87] ">
        <BiTask
          size={25}
          className="hover:text-blue-500 text-white cursor-pointer "
        />
        <Link to={"/task"}>
          <h1 className="text-md">Tasks</h1>
        </Link>
      </div>
      <div className="mt-5 flex gap-3 items-center py-2 px-8 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#4cbf87] ">
        <CgNotes
          size={25}
          className="hover:text-blue-500 text-white cursor-pointer "
        />
        <Link to={"/note"}>
          <h1 className="text-md">Notes</h1>
        </Link>
      </div>
      <div className="flex gap-3 items-center py-2 px-8 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#4cbf87]  mt-20">
        <AiOutlineSetting
          size={25}
          className="hover:text-blue-500 text-white cursor-pointer "
        />
        <Link to={"/"}>
          <h1 className="text-md">Settings</h1>
        </Link>
      </div>
      <div className="mt-5 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#4cbf87] ">
        <BiHelpCircle
          size={25}
          className="hover:text-blue-500 text-white cursor-pointer "
        />
        <Link to={"/"}>
          <h1 className="text-md">Help Center</h1>
        </Link>
      </div>
    </div>
  );
};

export default MobileSidebar;
