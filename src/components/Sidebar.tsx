import {FC} from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";

const Sidebar: FC = () => {
  return (
    <div className="mt-6 ml-8 h-[90vh] text-white p-5 bg-white shadow-2xl rounded-2xl bg-opacity-5 w-[200px] border-white border-[1px] border-opacity-10">
      <div>
        <h1>Notes</h1>
      </div>
      <Link to={"/"}>
        <div className="mt-7 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#4cbf87]">
          <MdSpaceDashboard
            size={25}
            className="hover:text-blue-500 text-white cursor-pointer "
          />
          <span>
            <h1 className="text-md">Dashboard</h1>
          </span>
        </div>
      </Link>

      <Link to={"/task"}>
        <div className="mt-5 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#4cbf87]">
          <BiTask
            size={25}
            className="hover:text-blue-500 text-white cursor-pointer "
          />
          <span>
            <h1 className="text-md">Tasks</h1>
          </span>
        </div>
      </Link>

      <Link to={"/note"}>
        <div className="mt-5 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#4cbf87]">
          <CgNotes
            size={25}
            className="hover:text-blue-500 text-white cursor-pointer "
          />
          <span>
            <h1 className="text-md">Notes</h1>
          </span>
        </div>
      </Link>

      <Link to={"/"}>
        <div className="flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#4cbf87] mt-20">
          <AiOutlineSetting
            size={25}
            className="hover:text-blue-500 text-white cursor-pointer "
          />
          <span>
            <h1 className="text-md">Settings</h1>
          </span>
        </div>
      </Link>

      <Link to={"/"}>
        <div className="mt-5 flex gap-3 items-center py-2 px-4 border-white border-[1px] rounded-lg cursor-pointer hover:bg-[#4cbf87]">
          <BiHelpCircle
            size={25}
            className="hover:text-blue-500 text-white cursor-pointer"
          />
          <span>
            <h1 className="text-md">Help Center</h1>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
