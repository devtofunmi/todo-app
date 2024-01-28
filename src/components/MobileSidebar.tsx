import {FC} from "react";
import { Link } from "react-router-dom";
import { BiTask } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineArchive, MdOutlineLightbulb } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const MobileSidebar: FC = () => {
  return (
    <div className=" h-[300px] rounded-lg text-white p-3 bg-[#181819]  w-[250px] z-20 flex flex-col justify-left   border-[1px] border-white border-opacity-10">
      <div className="mt-7 flex gap-3 items-center   rounded-lg cursor-pointer hover:text-[#4cbf87] ">
        <MdOutlineLightbulb
          size={25}
          className="hover:text-[#4cbf87] text-white cursor-pointer "
        />
        <Link to={"/note"}>
          <h1 className="text-md">Notes</h1>
        </Link>
      </div>
      <div className="mt-5 flex gap-3 items-center cursor-pointer hover:text-[#4cbf87] ">
        <BiTask
          size={25}
          className="hover:text-[#4cbf87] text-white cursor-pointer "
        />
        <Link to={"/task"}>
          <h1 className="text-md">Tasks</h1>
        </Link>
      </div>
      <div className="mt-5 flex gap-3 items-center cursor-pointer hover:text-[#4cbf87] ">
        <IoMdNotificationsOutline 
          size={25}
          className="hover:text-[#4cbf87] text-white cursor-pointer "
        />
        <Link to={"/"}>
          <h1 className="text-md">Reminders</h1>
        </Link>
      </div>
      <div className="flex gap-3 items-center cursor-pointer hover:text-[#4cbf87]  mt-5">
          <MdOutlineArchive
          size={25}
          className="hover:text-[#4cbf87] text-white cursor-pointer "
        />
        <Link to={"/"}>
          <h1 className="text-md">Archive</h1>
        </Link>
      </div>
      <div className="mt-5 flex gap-3 items-center cursor-pointer hover:text-[#4cbf87] ">
        <RiDeleteBin6Line
            size={25}
            className="hover:text-[#4cbf87] text-white cursor-pointer"
        />
        <Link to={"/"}>
          <h1 className="text-md">Bin</h1>
        </Link>
      </div>
    </div>
  );
};

export default MobileSidebar;
