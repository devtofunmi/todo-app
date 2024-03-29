import React, { useState } from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import Topbar from '../components/Topbar';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import NoteDetails from '../components/NoteDetails';
import AddNote from '../components/AddNote';
import { AiOutlineDelete } from "react-icons/ai";
import '../App.css';
import { GoArchive } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { TiPinOutline } from 'react-icons/ti';

interface Note {
  id: number;
  heading: string;
  description: string;
  pinned: boolean;
}

const Notes: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<number | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isAddNoteVisible, setIsAddNoteVisible] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>([
       {
      id: 1,
      heading: "Funny Day At The Mall",
      pinned: false,
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra vitae arcu est odio. Et velit blandit nunc orci viverra feugiat. Et vitae porttitor tristique ullamcorper posuere sodales eget. Amet quis laoreet egestas dolor vulputate eget. Sit gravida tristique odio sem. A adipiscing nibh vulputate in magna augue a aliquam. Aliquam dis pharetra libero aliquet diam aliquam ornare. Tristique tempus at cras aliquet id fames in felis. Nisi facilisis sit imperdiet nunc. Vehicula elit amet arcu id proin in. Magna iaculis neque nisl elit donec diam dolor placerat nulla. Libero aliquet ac neque sed eu. Sed enim vitae justo quam rutrum vitae eu cursus condimentum.Congue eget ultrices et at ipsum ultricies. Vitae porttitor eget risus sit convallis donec. Rhoncus quis cras neque gravida eget suscipit euismod velit diam. Libero laoreet aliquet sed nisl. In auctor arcu arcu arcu est neque pellentesque accumsan. Quis commodo rutrum nec viverra sed. Varius non vitae tempus erat feugiat egestas. Sit pulvinar id urna turpis dolor venenatis blandit gravida. In metus massa faucibus ac tincidunt varius vivamus.Commodo eget lorem sit malesuada hendrerit morbi quis. Convallis rhoncus ornare amet ac. Sagittis venenatis nisl rhoncus morbi. Gravida nec tincidunt consectetur facilisis. Faucibus ipsum cras pharetra morbi lectus magna nulla feugiat. Mauris cursus turpis vulputate tincidunt. Dignissim lectus sed turpis lorem. Habitasse dolor tristique feugiat nisl tortor in tincidunt facilisis quam. Quis nulla egestas lectus aliquam sociis adipiscing mauris. Magna est amet mauris sagittis dignissim mollis ultrices. Tincidunt dui dui mattis fringilla. Adipiscing pretium non viverra feugiat varius vel rutrum quam. Pellentesque fermentum dictumst est auctor porttitor vitae bibendum.Vitae adipiscing feugiat tincidunt etiam phasellus. A nisl netus turpis eleifend in suspendisse dignissim odio. Feugiat sed sit facilisis semper amet et tristique turpis. Arcu ultrices nulla urna .",
    },
    {
      id: 2,
      heading: "Bucket List For New Year",
      pinned: false,
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra vitae arcu est odio. Et velit blandit nunc orci viverra feugiat. Et vitae porttitor tristique ullamcorper posuere sodales eget. Amet quis laoreet egestas dolor vulputate eget. Sit gravida tristique odio sem. A adipiscing nibh vulputate in magna augue a aliquam. Aliquam dis pharetra libero aliquet diam aliquam ornare. Tristique tempus at cras aliquet id fames in felis. Nisi facilisis sit imperdiet nunc. Vehicula elit amet arcu id proin in. Magna iaculis neque nisl elit donec diam dolor placerat nulla. Libero aliquet ac neque sed eu. Sed enim vitae justo quam rutrum vitae eu cursus condimentum.Congue eget ultrices et at ipsum ultricies. Vitae porttitor eget risus sit convallis donec. Rhoncus quis cras neque gravida eget suscipit euismod velit diam. Libero laoreet aliquet sed nisl. In auctor arcu arcu arcu est neque pellentesque accumsan. Quis commodo rutrum nec viverra sed. Varius non vitae tempus erat feugiat egestas. Sit pulvinar id urna turpis dolor venenatis blandit gravida. In metus massa faucibus ac tincidunt varius vivamus.Commodo eget lorem sit malesuada hendrerit morbi quis. Convallis rhoncus ornare amet ac. Sagittis venenatis nisl rhoncus morbi. Gravida nec tincidunt consectetur facilisis. Faucibus ipsum cras pharetra morbi lectus magna nulla feugiat. Mauris cursus turpis vulputate tincidunt. Dignissim lectus sed turpis lorem. Habitasse dolor tristique feugiat nisl tortor in tincidunt facilisis quam. Quis nulla egestas lectus aliquam sociis adipiscing mauris. Magna est amet mauris sagittis dignissim mollis ultrices. Tincidunt dui dui mattis fringilla. Adipiscing pretium non viverra feugiat varius vel rutrum quam. Pellentesque fermentum dictumst est auctor porttitor vitae bibendum.Vitae adipiscing feugiat tincidunt etiam phasellus. A nisl netus turpis eleifend in suspendisse dignissim odio. Feugiat sed sit facilisis semper amet et tristique turpis. Arcu ultrices nulla urna .",
    },
    {
      id: 3,
      pinned: false,
      heading: "Birthday Wishlist",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sapien est adipiscing odio ullamcorper faucibus aliquam. Hac urna nibh mi vitae",
    },
    {
      id: 4,
      heading: "1st Day At Therapy",
      pinned: false,
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra vitae arcu est odio. Et velit blandit nunc orci viverra feugiat. Et vitae porttitor tristique ullamcorper posuere sodales eget. Amet quis laoreet egestas dolor vulputate eget. Sit gravida tristique odio sem. A adipiscing nibh vulputate in magna augue a aliquam. Aliquam dis pharetra libero aliquet diam aliquam ornare. Tristique tempus at cras aliquet id fames in felis. Nisi facilisis sit imperdiet nunc. Vehicula elit amet arcu id proin in. Magna iaculis neque nisl elit donec diam dolor placerat nulla. Libero aliquet ac neque sed eu. Sed enim vitae justo quam rutrum vitae eu cursus condimentum.Congue eget ultrices et at ipsum ultricies. Vitae porttitor eget risus sit convallis donec. Rhoncus quis cras neque gravida eget suscipit euismod velit diam. Libero laoreet aliquet sed nisl. In auctor arcu arcu arcu est neque pellentesque accumsan. Quis commodo rutrum nec viverra sed. Varius non vitae tempus erat feugiat egestas. Sit pulvinar id urna turpis dolor venenatis blandit gravida. In metus massa faucibus ac tincidunt varius vivamus.Commodo eget lorem sit malesuada hendrerit morbi quis. Convallis rhoncus ornare amet ac. Sagittis venenatis nisl rhoncus morbi. Gravida nec tincidunt consectetur facilisis. Faucibus ipsum cras pharetra morbi lectus magna nulla feugiat. Mauris cursus turpis vulputate tincidunt. Dignissim lectus sed turpis lorem. Habitasse dolor tristique feugiat nisl tortor in tincidunt facilisis quam. Quis nulla egestas lectus aliquam sociis adipiscing mauris. Magna est amet mauris sagittis dignissim mollis ultrices. Tincidunt dui dui mattis fringilla. Adipiscing pretium non viverra feugiat varius vel rutrum quam. Pellentesque fermentum dictumst est auctor porttitor vitae bibendum.Vitae adipiscing feugiat tincidunt etiam phasellus. A nisl netus turpis eleifend in suspendisse dignissim odio. Feugiat sed sit facilisis semper amet et tristique turpis. Arcu ultrices nulla urna .",
    },
    {
      id: 5,
      heading: "Date With Yarden",
      pinned: false,
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra vitae arcu est odio. Et velit blandit nunc orci viverra feugiat. Et vitae porttitor tristique ullamcorper posuere sodales eget. Amet quis laoreet egestas dolor vulputate eget. Sit gravida tristique odio sem. A adipiscing nibh vulputate in magna augue a aliquam. Aliquam dis pharetra libero aliquet diam aliquam ornare. Tristique tempus at cras aliquet id fames in felis. Nisi facilisis sit imperdiet nunc. Vehicula elit amet arcu id proin in. Magna iaculis neque nisl elit donec diam dolor placerat nulla. Libero aliquet ac neque sed eu. Sed enim vitae justo quam rutrum vitae eu cursus condimentum.Congue eget ultrices et at ipsum ultricies. Vitae porttitor eget risus sit convallis donec. Rhoncus quis cras neque gravida eget suscipit euismod velit diam. Libero laoreet aliquet sed nisl. In auctor arcu arcu arcu est neque pellentesque accumsan. Quis commodo rutrum nec viverra sed. Varius non vitae tempus erat feugiat egestas. Sit pulvinar id urna turpis dolor venenatis blandit gravida. In metus massa faucibus ac tincidunt varius vivamus.Commodo eget lorem sit malesuada hendrerit morbi quis. Convallis rhoncus ornare amet ac. Sagittis venenatis nisl rhoncus morbi. Gravida nec tincidunt consectetur facilisis. Faucibus ipsum cras pharetra morbi lectus magna nulla feugiat. Mauris cursus turpis vulputate tincidunt. Dignissim lectus sed turpis lorem. Habitasse dolor tristique feugiat nisl tortor in tincidunt facilisis quam. Quis nulla egestas lectus aliquam sociis adipiscing mauris. Magna est amet mauris sagittis dignissim mollis ultrices. Tincidunt dui dui mattis fringilla. Adipiscing pretium non viverra feugiat varius vel rutrum quam. Pellentesque fermentum dictumst est auctor porttitor vitae bibendum.Vitae adipiscing feugiat tincidunt etiam phasellus. A nisl netus turpis eleifend in suspendisse dignissim odio. Feugiat sed sit facilisis semper amet et tristique turpis. Arcu ultrices nulla urna .",
    },
    {
      id: 6,
      heading: "Terax’s vet. Appointment",
      pinned: false,
      description:
        "Lorem ipsum dolor sit amet consectetur. Pharetra vitae arcu est odio. Et velit blandit nunc orci viverra feugiat. Et vitae porttitor tristique ullamcorper posuere sodales eget. Amet quis laoreet egestas dolor vulputate eget. Sit gravida tristique odio sem. A adipiscing nibh vulputate in magna augue a aliquam. Aliquam dis pharetra libero aliquet diam aliquam ornare. Tristique tempus at cras aliquet id fames in felis. Nisi facilisis sit imperdiet nunc. Vehicula elit amet arcu id proin in. Magna iaculis neque nisl elit donec diam dolor placerat nulla. Libero aliquet ac neque sed eu. Sed enim vitae justo quam rutrum vitae eu cursus condimentum.Congue eget ultrices et at ipsum ultricies. Vitae porttitor eget risus sit convallis donec. Rhoncus quis cras neque gravida eget suscipit euismod velit diam. Libero laoreet aliquet sed nisl. In auctor arcu arcu arcu est neque pellentesque accumsan. Quis commodo rutrum nec viverra sed. Varius non vitae tempus erat feugiat egestas. Sit pulvinar id urna turpis dolor venenatis blandit gravida. In metus massa faucibus ac tincidunt varius vivamus.Commodo eget lorem sit malesuada hendrerit morbi quis. Convallis rhoncus ornare amet ac. Sagittis venenatis nisl rhoncus morbi. Gravida nec tincidunt consectetur facilisis. Faucibus ipsum cras pharetra morbi lectus magna nulla feugiat. Mauris cursus turpis vulputate tincidunt. Dignissim lectus sed turpis lorem. Habitasse dolor tristique feugiat nisl tortor in tincidunt facilisis quam. Quis nulla egestas lectus aliquam sociis adipiscing mauris. Magna est amet mauris sagittis dignissim mollis ultrices. Tincidunt dui dui mattis fringilla. Adipiscing pretium non viverra feugiat varius vel rutrum quam. Pellentesque fermentum dictumst est auctor porttitor vitae bibendum.Vitae adipiscing feugiat tincidunt etiam phasellus. A nisl netus turpis eleifend in suspendisse dignissim odio. Feugiat sed sit facilisis semper amet et tristique turpis. Arcu ultrices nulla urna .",
    },
    ]);
  const [pinnedNotes, setPinnedNotes] = useState<number[]>([]);  

  const handleAddNoteClick = () => {
    setIsAddNoteVisible(true);
  };

  const handleAddNoteClose = () => {
    setSelectedNote(null);
    setIsAddNoteVisible(false);
  };

  const handleNoteClick = (id: number) => {
    setSelectedNote(id);
  };

  const pinUnpinNote = (id: number) => {
  const updatedNotes = notes.map((note) => {
    if (note.id === id) {
      note.pinned = !note.pinned;
    }
    return note;
  });
  setNotes(updatedNotes);
  const updatedPinnedNotes = updatedNotes.filter((note) => note.pinned).map((note) => note.id);
  setPinnedNotes(updatedPinnedNotes);
};


// const handlePinClick = (id: number) => {
//     const isPinned = pinnedNotes.includes(id);
//     const updatedPinnedNotes = isPinned
//       ? pinnedNotes.filter((noteId) => noteId !== id)
//       : [...pinnedNotes, id];

//     setPinnedNotes(updatedPinnedNotes);
    
//   };

  // const handleUnpinClick = (id: number) => {
  //   const updatedPinnedNotes = pinnedNotes.filter((noteId) => noteId !== id);
  //   setPinnedNotes(updatedPinnedNotes);
  // };


  const handleBackClick = () => {
    setSelectedNote(null);
  };
  

  const filteredData = notes.filter((item) => {
    const headingLowerCase = item.heading.toLowerCase();
    const descriptionLowerCase = item.description.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();

    return (
      headingLowerCase.includes(searchTermLowerCase) ||
      descriptionLowerCase.includes(searchTermLowerCase)
    );
  });

  const truncateDescription = (description: string, maxLength: number) => {
    const truncatedWords = description
      .split(' ')
      .slice(0, maxLength)
      .join(' ');
    return description.length > truncatedWords.length ? `${truncatedWords} ...` : truncatedWords;
  };
  const removeNote = (noteId:number): void => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
    const updatedPinnedNotes = pinnedNotes.filter((id) => id !== noteId);
    setPinnedNotes(updatedPinnedNotes);
  };

 const handleAddNote = (title: string, description: string) => {
    const newNote: Note = {
      id: notes.length + 1,
      heading: title,
      description: description,
      pinned: false,
    };
    setNotes([...notes, newNote]);

     if (!selectedNote) {
      setSelectedNote(newNote.id);
    }
    setIsAddNoteVisible(false);
  };

  

  return (
    <DashboardLayout>
      <div className="main h-[90vh] mt-1 pb-3 md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:mr-[-30px] md:w-[80%] md:p-5 border-[0px] md:border-[1px] border-white border-opacity-10 z-20 overflow-scroll">
        <div className="hidden md:block">
          <Topbar />
        </div>
        <div className="flex justify-between items-center p-2">
          <div className="text-white text-lg font-bold mt-2">
            Notes Are Reminders,
            <br /> Check Them Out.
          </div>
          <div>
            <div className="mt-[-20px]">
              <div
                className="w-[80px] h-[40px] md:w-[100px] md:h-[40px] border-[1px] border-white border-dashed flex justify-center items-center cursor-pointer md:mt-2"
                onClick={handleAddNoteClick}
              >
                <BsPlusCircle className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex pl-[10px] items-center gap-5 w-[95%] rounded-md mt-10">
          <div>
            <AiOutlineSearch className="text-white text-[25px]" />
          </div>
          <input
            className="w-full bg-transparent text-white p-3 border-[1px] border-white rounded-md"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Notes"
          />
        </div>
     <div>
       {pinnedNotes.length > 0 && (
        <div>
          <h1 className="text-white lg:px-8 md:px-5 mt-5">Pinned Notes</h1>
           <div className="flex flex-wrap lg:px-8 justify-evenly text-white mt-5 md:gap-5 md:justify-start md:px-5">
          {pinnedNotes.map((id) => {
            const note = notes.find((note) => note.id === id);
            return (
              <div
                key={id}
                className={`border-[1px] border-white p-4 mb-3 lg:w-[200px] rounded-md cursor-pointer md:w-full ${
                  selectedNote === id ? 'bg-gray-500' : ''
                }`}
               
              >
                <div className='relative mb-2'>
        
                <div className='absolute right-0 '>
                   <TiPinOutline
                   onClick={() => pinUnpinNote(id)}
                   size={15}
                   className="hover:text-[#4cbf87] text-white cursor-pointer "
                   />
                </div>
              </div>
                <h2 
                 onClick={() => handleNoteClick(id)}
                className="text-[14px] font-bold mb-[10px] md:text-[18px]">{note?.heading}</h2>
                <p
                onClick={() => handleNoteClick(id)} 
                className="text-[13px] md:text-[15px]">
                      {selectedNote === id
                        ? note?.description
                        : truncateDescription(note?.description || '', 10)}
                    </p>
                  <div className='mt-2 flex gap-3'>
               <AiOutlineDelete
                        size={15}
                        onClick={() => removeNote(id)}
                        className="hover:text-[#4cbf87] text-white cursor-pointer"
                      />
                 <GoArchive 
                   size={15}
            className="hover:text-[#4cbf87] text-white cursor-pointer "
          />
          <IoMdNotificationsOutline 
            size={15}
            className="hover:text-[#4cbf87] text-white cursor-pointer "
          />
              </div>    
              </div>
            );
          })}
        </div>
        </div>
      )}
      </div>  
        <div className="flex flex-wrap lg:px-8 justify-evenly text-white mt-14 md:gap-5 md:justify-start md:px-5">
          {filteredData.map((item) => (
            <div
              className={`border-[1px] border-white p-4 mb-3 lg:w-[200px] rounded-md cursor-pointer md:w-full ${
                selectedNote === item.id ? 'bg-gray-500' : ''
              }`}
              key={item.id}
            >
              <div className='relative mb-2'>
        
                <div className='absolute right-0 '>
                   <TiPinOutline
                  onClick={() => pinUnpinNote(item.id)}
                   size={15}
                   className="hover:text-[#4cbf87] text-white cursor-pointer "
                   />
                </div>
              </div>
            
              <h2 
              onClick={() => handleNoteClick(item.id)}
               className="text-[14px] font-bold mb-[10px] md:text-[18px]">{item.heading}</h2>
              <p 
              onClick={() => handleNoteClick(item.id)}
              
              className="text-[13px] md:text-[15px] ">
                {selectedNote === item.id ? (
                  item.description
                ) : (
                  truncateDescription(item.description, 10)
                )}
              </p>
               <div className='mt-2 flex gap-3'>
                <AiOutlineDelete 
                  size={15}
                  onClick={() => removeNote(item.id)}
                 className="hover:text-[#4cbf87] text-white cursor-pointer "
                />
                 <GoArchive 
                   size={15}
            className="hover:text-[#4cbf87] text-white cursor-pointer "
          />
          <IoMdNotificationsOutline 
            size={15}
            className="hover:text-[#4cbf87] text-white cursor-pointer "
          />
              </div>          
            </div>
          ))}
        </div>
         {selectedNote && (
        <NoteDetails
          notes={notes.find((item) => item.id === selectedNote) || { id: notes.length + 1, heading: '', description: '',pinned: false }}
          onClose={handleBackClick}
        />
      )}
      {isAddNoteVisible && <AddNote onClose={handleAddNoteClose} onAddNote={handleAddNote} />}
      </div>
    </DashboardLayout>
  );
};

export default Notes;