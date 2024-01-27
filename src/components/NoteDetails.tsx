import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import '../App.css';


interface NoteDetailsProps {
  note: {
    heading: string;
    description: string;
  };
  onClose: () => void;
}

const NoteDetails: React.FC<NoteDetailsProps> = ({ note, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="main text-white md:shadow-2xl w-full h-[140vh] mt-60 md:mt-0 overflow-scroll md:h-screen md:p-5 z-20 border-[0px] md:border-[1px] border-white border-opacity-10 bg-[#181819] p-8 z-60 ">
        <div className="">
          <div className="flex items-center mb-4">
            <IoIosArrowBack
              className=" text-[30px] cursor-pointer"
              onClick={onClose}
            />
          </div>

          <h2 className="text-[18px] font-bold">{note.heading}</h2>
          <p className="text-[15px] mt-5">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;