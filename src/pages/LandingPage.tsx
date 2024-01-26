import { Link } from "react-router-dom"
import FeaturesCard from "../components/FeaturesCard";
import note from "../assets/note.png";
import { FC } from "react";


const LandingPage: FC = () => {
  return (
    <>
     <div className="flex p-[50px] w-full gap-[50px] flex-col md:flex-row"
      
      >
        <div className="w-full md:w-[60%] mt-[70px]" >
          <h1 className="text-[40px] md:text-[90px] font-bold text-white leading-[50px] md:leading-[100px]"
          >
            BRING <span className="text-[#4cbf87]"  >iDEAS </span> TO lIFE
          </h1>
          <h1 className="text-[20px] text-[#afb1b3] max-w-[500px]" >
            Notes is the best place to jot down quick thoughts or to save longer
            notes filled with checklists.
          </h1>
          <div className="flex gap-[10px] mt-[30px] flex-col md:flex-row">
            <button className="bg-black text-white hover:text-[#4cbf87]"
            >
              <Link to="/login">LogIn</Link>
            </button>
            <button className="bg-black text-white hover:text-[#4cbf87]"
            >
              <Link to="/signup">SignUp</Link>
            </button>
          </div>
        </div>
        <div>
          <img width={"700px"} src={note} />
        </div>
      </div>

      <div className="flex flex-col text-center" >
        <div className="flex justify-center">
          <img
          className="w-[200px]"
            src="https://media.giphy.com/media/Vo6eOQJMg3n6HgDuAA/giphy.gif"
          />
        </div>

        <h1 className="font-[500] text-[25px] md:text-[40px] mt-[10px] text-white"
        >
          Focus on what matters most
        </h1>
        <h1 className="text-[20px] text-[#afb1b3]">
          Some of Nnote key features
        </h1>
      </div>
      <div className="flex justify-center flex-col w-full gap-[10px] text-center mt-[50px]"
      >
        {FeaturesCard.map((card, id) => (
        <div
          key={id}
          className={`flex px-4 sm:px-10 md:px-20 lg:px-32 py-5 justify-between items-center ${
            card.isInverted ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <div className="flex font-bold text-4xl justify-center text-white w-full sm:w-1/2">
            {card.image}
          </div>
          <div className="w-full sm:w-1/2">
            <h2 className="font-bold text-3xl sm:text-5xl text-white mb-10 text-left">
              {card.heading}
            </h2>
            <p className="text-base text-gray-500 text-left">{card.text}</p>
          </div>
        </div>
      ))}
      </div>
      </>
  )
}

export default LandingPage
