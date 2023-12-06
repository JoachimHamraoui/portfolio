import { Reveal } from "./Reveal";
import HomePic from "../assets/home-picture2.png";
import { FaArrowDown } from 'react-icons/fa';
import FrontEnd from "../assets/skills/json/frontend.json";
import BackEnd from "../assets/skills/json/backend.json";
import Other from "../assets/skills/json/other.json";
// import placeholder from "../../public/projectplaceholder.jpeg"
import highlightsJson from "../assets/works/highlighted.json"
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <div className=" w-full h-screen flex justify-center items-center">
        <div className="sm:w-11/12 md:w-9/12 h-full flex flex-row items-center justify-center">
          <div className="w-full flex flex-col home-title sm:rotate-90 md:rotate-0 sm:items-center xl:items-start">
            <Reveal>
              <h1 className="sm:text-8xl xl:text-5xl text-green font-display h-full home-title font-bold">
                <Typewriter options={{
                  strings: [`Joachim Hamraoui.`, 'A Web Developer.', 'A Designer.', 'An Explorer.', 'A Creative Mind.'],
                  autoStart: true,
                  loop: true,
                  delay: 200,
                }}
                /></h1>
            </Reveal>
            <Reveal>
              <p className="text-white xl:text-xl font-mont sm:hidden md:block">Front-End Developer & Graphic Designer.</p>
            </Reveal>
            <Reveal>
              <a href="#skills" className="sm:hidden md:block">
                <button className="text-lg font-display border-solid border-2 border-green text-green py-2 px-8 rounded-full flex flex- row items-center mt-10 transition-text duration-300 hover:text-black transition-bg duration-300 hover:bg-green"><span className="mr-4">Learn more</span> <FaArrowDown /></button>
              </a>
            </Reveal>
          </div>
          <div className="home-image sm:hidden md:block">
            <Reveal>
              <img src={HomePic} alt="Joachim Hamraoui" />
            </Reveal>
          </div>
        </div>
      </div>
      <div className="sm:w-10/12 xl:w-9/12 mt-14 flex flex-col m-auto">
        <div className="w-full py-4">
          <Reveal><h2 id="skills" className="text-4xl text-green font-display font-bold">Skills</h2></Reveal>
          <div className="w-full flex sm:flex-col xl:flex-row">
            <div className="sm:w-12/12 xl:w-1/3 mt-10 text-white font-mont font-bold text-xl">
              <Reveal><h6>Front-End</h6></Reveal>
              <div className="w-full flex flex-row flex-wrap">
                {FrontEnd.map((item, index) => (
                  <div className="w-1/3 p-5 pl-0 sm:py-2 xl:py-5" key={index}>
                    <Reveal>
                      <img className="transition-hover duration-300 hover:p-1" srcSet={`${item.img}`} src={`${item.img}`} alt={`${item.title}`} />
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>

            <div className="sm:w-12/12 xl:w-1/3 mt-10 text-white font-mont font-bold text-xl">
              <Reveal><h6 className="">Back-End</h6></Reveal>
              <div className="w-full flex flex-row flex-wrap">
                {BackEnd.map((item, index) => (
                  <div className="w-1/3 p-6 pl-0 sm:py-2 xl:py-5" key={index}>
                    <Reveal>
                      <img className="transition-hover duration-300 hover:p-1" srcSet={`${item.img}`} src={`${item.img}`} alt={`${item.title}`} />
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>

            <div className="sm:w-12/12 xl:w-1/3 mt-10 text-white font-mont font-bold text-xl">
              <Reveal><h6 className="">Other</h6></Reveal>
              <div className="w-full flex flex-row flex-wrap">
                {Other.map((item, index) => (
                  <div className="w-1/3 p-6 pl-0 sm:py-2 xl:py-5" key={index}>
                    <Reveal>
                      <img className="transition-hover duration-300 hover:p-1" srcSet={`${item.img}`} src={`${item.img}`} alt={`${item.title}`} />
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-4 mt-14">
          <Reveal><h2 className="text-4xl text-green font-display mb-12 font-bold">Highlighted Projects</h2></Reveal>
          <div className="w-full flex flex-col">
            {highlightsJson.map((item, index) => (
              <Link to={item.link}>
                <div key={index} className="w-full flex sm:flex-col xl:flex-row xl:pr-4 mb-10 transition-hover duration-300 hover:p-0.5">
                <div className="sm:w-full xl:w-7/12 sm:h-40 xl:h-60 sm:mr-0 xl:mr-6 truncate">
                  <Reveal><img className="w-full" srcSet={`${item.thumbnail}`} src={`${item.thumbnail}`} alt="" /></Reveal>
                </div>
                <div className="sm:w-full xl:w-5/12 sm:h-auto xl:h-60 flex flex-col xl:justify-end">
                  <Reveal>
                    <h3 className="sm:text-3xl xl:text-4xl text-green font-display font-bold sm:mt-8 xl:mt-0">{item.name}</h3>
                  </Reveal>
                  <Reveal>
                    <div className="flex flex-row mt-2 flex-wrap">
                      {item.technologies.map((item) => (
                        <span className="text-xs bg-black font-mont border-solid border-2 border-white text-white py-1 px-4 rounded-full font-semibold mb-2 mr-2">{item}</span>
                      ))}
                    </div>
                  </Reveal>
                  <Reveal>
                    <p className="text-white text-lg font-regular text-sm mt-4">{item.shortdescription}</p>
                  </Reveal>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full py-4 xl:mt-10">
          <Reveal><h2 className="text-4xl text-green font-display mb-12 font-bold">Experience</h2></Reveal>
          <div className="flex sm:flex-col md:flex-row  flex-wrap">
            <div className="sm:w-full xl:w-1/2 mb-10 transition-hover duration-300 hover:p-0.5">
              <Reveal>
                <div className="w-full">
                  <h3 className="text-white text-xl font-mont">2016-2018</h3>
                  <h4 className="text-white">Diploma 3de graad</h4>
                  <h2 className="text-green text-2xl font-display font-bold my-1">Multimedia</h2>
                  <h3 className="text-white text-xl font-mont">Don Bosco Halle</h3>
                </div>
              </Reveal>
            </div>
            <div className="sm:w-full xl:w-1/2 mb-10 transition-hover duration-300 hover:p-0.5">
              <Reveal>
                <div className="w-full">
                  <h3 className="text-white text-xl font-mont">2018-2019</h3>
                  <h4 className="text-white">Diploma Se-n-Se Specialisatiejaar</h4>
                  <h2 className="text-green text-2xl font-display font-bold my-1">Interactieve Multimedia Technieken</h2>
                  <h3 className="text-white text-xl font-mont">Don Bosco Halle</h3>
                </div>
              </Reveal>
            </div>
            <div className="sm:w-full xl:w-1/2 mb-10 transition-hover duration-300 hover:p-0.5">
              <Reveal>
                <div className="w-full">
                  <h3 className="text-white text-xl font-mont">2019</h3>
                  <h4 className="text-white">Stagiair & Studentenjob</h4>
                  <h2 className="text-green text-2xl font-display font-bold my-1">Webmaster CCX</h2>
                  <h3 className="text-white text-xl font-mont">Colruyt Group Halle</h3>
                </div>
              </Reveal>
            </div>
            <div className="sm:w-full xl:w-1/2 mb-10 transition-hover duration-300 hover:p-0.5">
              <Reveal>
                <div className="w-full">
                  <h3 className="text-white text-xl font-mont">2019-2024</h3>
                  <h4 className="text-white">Bachelor Degree</h4>
                  <h2 className="text-green text-2xl font-display font-bold my-1">Multimedia & Creatieve Technologieën</h2>
                  <h3 className="text-white text-xl font-mont">Erasmushogeschool Brussel</h3>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
