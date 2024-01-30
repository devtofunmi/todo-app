import { useState,FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface AddNoteProps {
  onClose: () => void;
  onAddNote: (title: string, description: string) => void;
}

const AddNote: FC<AddNoteProps> = ({ onClose, onAddNote }) => {
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteDescription, setNoteDescription] = useState<string>("");

   const handleAddNote = () => {
     console.log("New Note:", {
      title: noteTitle,
      description: noteDescription,
    });
    if (noteTitle.trim() !== "" && noteDescription.trim() !== "") {
      onAddNote(noteTitle, noteDescription);
      onClose();
    }
  };


  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-white w-full md:w-[50%]  h-screen md:h-[500px] bg-[#181819] p-4 rounded-md shadow-md">
        <div className="md:p-5">
          <div className="flex justify-between items-center text-center">
            <button className="" onClick={onClose}>
              <AiOutlineClose className="md:text-[35px] text-[25px] text-white" />
            </button>
            <h2 className="text-lg md:text-xl font-semibold text-white">
              Add Note
            </h2>
            <button className="" onClick={onClose}>
              <AiOutlineClose className="md:text-[35px] text-[30px] text-transparent" />
            </button>
          </div>

          <h1 className="block text-sm font-medium mt-10">
            Note Title
          </h1>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 mb-3 rounded-md bg-transparent mt-5"
            placeholder="e.g my weirdest moment"
             onChange={(e) => setNoteTitle(e.target.value)}
          />

          <h1 className="block text-sm font-medium mt-5">
            Note Details
          </h1>
          <textarea
            className="w-full border border-gray-300 p-2 mb-3 rounded-md bg-transparent mt-5"
            rows={4}
            placeholder="e.g my weirdest moment"
            onChange={(e) => setNoteDescription(e.target.value)}
          ></textarea>

          <button
            className="bg-black text-white py-2 px-4 w-full rounded-md hover:bg-[#4cbf87] md:mt-5 mt-10"
            onClick={handleAddNote}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;