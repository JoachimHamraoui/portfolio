import { Reveal } from "./Reveal";
import DesignJson from "../assets/works/designworks.json"
import { Link } from "react-router-dom";

function Design() {
  return (
    <div>
      <div className=" w-full h-screen flex justify-center items-center mb-14">
        <div className="sm:w-10/12 xl:w-9/12 h-full flex flex-row mb-14">
          <div className="web mt-14">
            <div className="w-full py-4 mt-5">
                <Reveal><h2 className="text-4xl text-green font-display pb-2 font-bold">Graphic Design</h2></Reveal>
                <div className="w-full flex flex-row">
                    <div className="w-full flex flex-row mt-10 flex-wrap">

                    {DesignJson.map((item, index) => (
                        <Link to={`/design/project/${item.id}`}>
                          <div key={index} className="w-full flex sm:flex-col xl:flex-row xl:pr-4 mb-10 transition-hover duration-300 hover:p-0.5">
                        <div className="sm:w-full xl:w-7/12 sm:h-28 xl:h-60 sm:mr-0 xl:mr-6 truncate">
                          <Reveal><img className="w-full" srcSet={`${item.thumbnaillg}`} src={`${item.thumbnail}`} alt="" /></Reveal>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
