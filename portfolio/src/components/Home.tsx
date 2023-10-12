import { Reveal } from "./Reveal";
import HomePic from "../assets/home-picture2.png";
import { FaArrowDown } from 'react-icons/fa';

function Home() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="w-10/12 h-full flex flex-row items-center justify-center">
        <div className="w-full flex flex-col home-title">
          <Reveal>
            <h1 className="text-8xl text-green font-display h-full home-title">Joachim Hamraoui.</h1>
          </Reveal>
          <Reveal>
            <p className="text-white text-xl font-mont py-4">Front-End Developer & Graphic Designer.</p>
          </Reveal>
          <Reveal>
            <button className="text-lg font-display border-solid border-2 border-green text-green py-2 px-8 rounded-full flex flex- row items-center mt-5 transition-text duration-300 hover:text-black transition-bg duration-300 hover:bg-green"><span className="mr-4">Learn more</span> <FaArrowDown /></button>
          </Reveal>
        </div>
        <div className="home-image">
          <Reveal>
            <img src={HomePic} alt="Joachim Hamraoui" />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default Home;
