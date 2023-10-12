import { Reveal } from "./Reveal";
import HomePic from "../assets/home-picture2.png";
import { FaArrowDown } from 'react-icons/fa';
import FrontEnd from "../assets/skills/json/frontend.json";
import BackEnd from "../assets/skills/json/backend.json";
import Other from "../assets/skills/json/other.json";

function Home() {
  return (
    <div>
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
      <div className="w-10/12 mt-14 flex flex-col m-auto">
        <div className="w-full h-80 py-4">
          <Reveal><h2 className="text-5xl text-green font-display">Skills</h2></Reveal>
          <div className="w-full flex flex-row ">
            <div className="w-1/3 mt-10 text-white font-mont font-bold text-xl">
              <Reveal><h6 className="">Front-End</h6></Reveal>
              <div className="w-full flex flex-row flex-wrap">
                 {FrontEnd.map((item, index) => (
                  <div className="w-1/3 p-5 pl-0" key={index}>
                    <Reveal>
                      <img srcSet={`${item.img}`} src={`${item.img}`} alt={`${item.title}`} />
                    </Reveal>
                  </div>
                 ))}
              </div>
            </div>

            <div className="w-1/3 mt-10 text-white font-mont font-bold text-xl">
              <Reveal><h6 className="">Back-End</h6></Reveal>
              <div className="w-full flex flex-row flex-wrap">
                 {BackEnd.map((item, index) => (
                  <div className="w-1/3 p-6 pl-0" key={index}>
                    <Reveal>
                      <img srcSet={`${item.img}`} src={`${item.img}`} alt={`${item.title}`} />
                    </Reveal>
                  </div>
                 ))}
              </div>
            </div>

            <div className="w-1/3 mt-10 text-white font-mont font-bold text-xl">
              <Reveal><h6 className="">Other</h6></Reveal>
              <div className="w-full flex flex-row flex-wrap">
                 {Other.map((item, index) => (
                  <div className="w-1/3 p-6 pl-0" key={index}>
                    <Reveal>
                      <img srcSet={`${item.img}`} src={`${item.img}`} alt={`${item.title}`} />
                    </Reveal>
                  </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
