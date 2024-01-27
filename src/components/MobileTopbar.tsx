import React from "react";
import avather from "../assets/avather.png";
import { GiHamburgerMenu } from "react-icons/gi";

interface MobileTopbarProps {
  toggleSidebar: () => void;
}

const MobileTopbar: React.FC<MobileTopbarProps> = ({ toggleSidebar }) => {
  return (
    <div className="flex flex-row justify-between items-center text-white gap-5">
      <div>
        <img className="w-[40px] h-[40px]" src={avather} alt="task" />
      </div>
      <div>
        <GiHamburgerMenu
          size={25}
          className="hover:text-[#4cbf87] text-white cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
    </div>
  );
};

export default MobileTopbar;
