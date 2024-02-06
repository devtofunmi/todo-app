import {FC} from "react";
import { Link } from "react-router-dom";
import { BiTask } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineArchive, MdOutlineLightbulb } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Sidebar: FC = () => {
  return (
    <div className="mt-6 ml-8 h-[90vh] text-white p-5 bg-white shadow-2xl rounded-2xl bg-opacity-5 w-[200px] border-white border-[1px] border-opacity-10">
      <Link to={"/note"}>
        <div className="mt-5 flex gap-3 items-center  cursor-pointer hover:text-[#4cbf87]">
          <MdOutlineLightbulb 
            size={25}
            className="hover:text-[#4cbf87] text-white cursor-pointer "
          />
          <span>
            <h1 className="text-md">Notes</h1>
          </span>
        </div>
      </Link>

      <Link to={"/task"}>
        <div className="mt-5 flex gap-3 items-center  cursor-pointer hover:text-[#4cbf87]">
          <BiTask
            size={25}
            className="hover:text-[#4cbf87] text-white cursor-pointer "
          />
          <span>
            <h1 className="text-md">Tasks</h1>
          </span>
        </div>
      </Link>

      <Link to={"/reminder"}>
        <div className="mt-5 flex gap-3 items-center  cursor-pointer hover:text-[#4cbf87]">
          <IoMdNotificationsOutline 
            size={25}
            className="hover:text-[#4cbf87] text-white cursor-pointer "
          />
          <span>
            <h1 className="text-md">Reminders</h1>
          </span>
        </div>
      </Link>

      <Link to={"/archive"}>
        <div className="flex gap-3 items-center  cursor-pointer hover:text-[#4cbf87] mt-5">
          <MdOutlineArchive 
            size={25}
            className="hover:text-[#4cbf87] text-white cursor-pointer "
          />
          <span>
            <h1 className="text-md">Archive</h1>
          </span>
        </div>
      </Link>

      <Link to={"/bin"}>
        <div className="mt-5 flex gap-3 items-center  cursor-pointer hover:text-[#4cbf87]">
          <RiDeleteBin6Line 
            size={25}
            className="hover:text-[#4cbf87] text-white cursor-pointer"
          />
          <span>
            <h1 className="text-md">Bin</h1>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
