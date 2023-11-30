import { Reveal } from "./Reveal";
import WebJson from "../assets/works/webworks.json"
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import { SiGithub } from "react-icons/si";
import { ImSphere } from "react-icons/im";
// import React from "react";

function getObjectById(id: string | number | undefined) {
    return WebJson.find(item => item.id == id);
  }

function ProjectDetail() {

    const { id } = useParams(); 
    console.log(id)
    const selectedProject = getObjectById(id)
    console.log(selectedProject)
  return (
    <div>
      <div className=" w-full h-screen flex justify-center items-center" style={{ marginBottom: '8em'}}>
        {selectedProject ? (
          <div className="w-9/12 h-full flex flex-row">
          <div className="w-full py-4 web">
              <Link to="/web" className="text-green text-2xl"><FaArrowLeft /></Link>
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-row mt-10 mb-8">
                        <div className="w-full flex flex-col pr-4">
                          <div className="w-full h-60 mr-6 truncate mb-8">
                              <Reveal><img className="w-full" srcSet={`${selectedProject.thumbnail}`} src={`${selectedProject.thumbnail}`} alt="" /></Reveal>
                          </div>
                          <Reveal>
                            <h2 className="text-5xl text-green font-display pb-2 font-bold" >{selectedProject.name}</h2>
                            </Reveal>
                        </div>
                    </div>
                    <div className="w-full flex flex-row">
                          <div className="w-8/12 mr-10">
                            <Reveal><h3 className="text-3xl text-white font-mont pb-2">Project Info</h3></Reveal>
                            <Reveal><p className="text-white text-xl font-regular text-sm mt-2 mb-7" style={{ whiteSpace: 'pre-line' }}>{selectedProject.description}</p></Reveal>
                            <Reveal><h3 className="text-3xl text-white font-mont pb-2">Images</h3></Reveal>
                            <div className="w-full flex flex-row mt-2 flex-wrap">
                            {selectedProject.images.map((item, index) => (
                                          <div key={index} className="w-1/2 pr-4">
                                            <Reveal>
                                            <img className="w-full mb-10" src={item.src} srcSet={item.src} alt="" />
                                            </Reveal>
                                          </div>
                                      ))}
                            </div>
                          </div>
                          <div className="w-4/12 flex flex-col float-left">
                            <div className="mb-8">
                              <Reveal><h3 className="text-3xl text-white font-mont pb-2">Technologies</h3></Reveal>
                              <Reveal>
                                  <div className="flex flex-row mt-2 flex-wrap">
                                      {selectedProject.technologies.map((item) => (
                                          <span className="text-sm bg-black font-mont border-solid border-2 border-white text-white py-1 px-4 mt-2 rounded-full font-semibold mb-2 mr-2 transition-text duration-300 hover:text-black transition-bg hover:bg-green transition-border hover:border-green">{item}</span>
                                      ))}
                                  </div>
                              </Reveal>
                            </div>
                            <div className="mb-8">
                              <Reveal><h3 className="text-3xl text-white font-mont pb-2">Collaborators</h3></Reveal>
                                  <div className="flex flex-col mt-2 flex-wrap">
                                  {selectedProject.madeby.map((item, index) => (
                                      <Reveal key={index}>
                                        <div className="pb-2">
                                          {item.github ? (
                                            <a href={item.github} target="_blank" rel="noopener noreferrer">
                                              <h4 className="text-xl text-white font-mont transition-text duration-300 hover:text-green">{item.name}</h4>
                                              <p className="text-sm text-white font-mont">{item.role}</p>
                                            </a>
                                          ) : (
                                            <div>
                                              <h4 className="text-xl text-white font-mont">{item.name}</h4>
                                              <p className="text-sm text-white font-mont">{item.role}</p>
                                            </div>
                                          )}
                                        </div>
                                      </Reveal>
                                    ))}

                                  </div>
                            </div>
                            <div className="mb-8">
                              <Reveal><h3 className="text-3xl text-white font-mont pb-2">More</h3></Reveal>
                                  <div className="w-2/6 flex flex-row mt-2 flex-wrap">
                                      {selectedProject.github ? (
                                        <div className="text-white flex-auto text-4xl transition-text duration-300 hover:text-green">
                                          <Reveal><a href={`${selectedProject.github}`} target="_blank"><SiGithub /></a></Reveal>
                                        </div>
                                      ): (
                                        <div className="text-grey flex-auto text-4xl ">
                                          <Reveal><SiGithub /></Reveal>
                                        </div>
                                      )}
                                      {selectedProject.website ? (
                                        <div className="text-white flex-auto text-4xl transition-text duration-300 hover:text-green">
                                          <Reveal><a href={`${selectedProject.website}`} target="_blank"><ImSphere /></a></Reveal>
                                        </div>
                                      ): (
                                        <div className="text-grey flex-auto text-4xl">
                                          <Reveal><ImSphere /></Reveal>
                                        </div>
                                      )}
                                  </div>
                            </div>
                          </div>
                    </div>
                
                </div>
            </div>
        </div>
        ) : (
          <div className="w-9/12 h-full flex flex-row">
          <div className="web mt-14">
            <div className="w-full py-4 mt-14">
                <Reveal><h2 className="text-6xl text-green font-display pb-2">Project does not exist</h2></Reveal>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
