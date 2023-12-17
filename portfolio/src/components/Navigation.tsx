// App.js
// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Logo from '../../public/jh-logo.svg';
import Web from './Web';
import WebProjectDetail from './WebProjectDetail';
import Design from './Design';
import DesignProjectDetail from './DesignProjectDetail';
import Contact from './Contact';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { Reveal } from './Reveal';


function Navigation() {

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }

  return (
    <Router>
      <div>
        <nav className='w-full bg-black p-8 fixed font-display text-md xl:flex flex-row sm:hidden'>
          <ul className='w-1/3 flex'>
            <li className='flex-auto'>
              <img className='h-8' src={Logo} alt="" />
            </li>
            <li className='flex-auto flex items-center'>
              <Link to="/" className='transition-text duration-300 hover:text-green'>Home</Link>
            </li>
            <li className='flex-auto flex items-center'>
              <Link to="/web" className='transition-text duration-300 hover:text-green'>Web</Link>
            </li>
            <li className='flex-auto flex items-center'>
              <Link to="/design" className='transition-text duration-300 hover:text-green'>Design</Link>
            </li>
            <li className='flex-auto flex items-center'>
              <Link to="/contact" className='transition-text duration-300 hover:text-green'>Contact</Link>
            </li>
          </ul>
          <ul className='w-2/3 flex justify-end'>
            <li>
            <a href="./cv-joachim-nl.pdf">
                <button className="text-md font-display border-solid border-2 border-green text-green py-1 px-8 rounded-full flex flex- row items-center transition-text duration-300 hover:text-black transition-bg duration-300 hover:bg-green">Download CV</button>
              </a>
            </li>
          </ul>
        </nav>

        <div className='w-full p-8 fixed font-display text-md md:hidden flex-row sm:flex justify-end hamburger-btn z-50'>
          <ul className='w-1/3 flex justify-end'>
            <li className=' text-3xl text-green' onClick={handleClick}>
              {click ? <RxCross1 /> : <RiMenu3Fill/>}
            </li>
          </ul>
        </div>

        {click && 
            <div className='hamburger-nav z-40 fixed bg-black'>
              <ul className='fixed w-full h-full bg-black px-8 py-8 flex'>
                <div className='w-full h-3/6 flex flex-col justify-end mt-14'>
                <li className='flex-auto flex justify-end'>
                  <Reveal>
                    <Link to="/" className='text-4xl font-display font-bold text-white z-50' onClick={handleClick}>Home</Link>
                  </Reveal>
                </li>
                <li className='flex-auto flex justify-end'>
                  <Reveal>
                    <Link to="/web" className='text-4xl font-display font-bold text-white' onClick={handleClick}>Web</Link>
                  </Reveal>
                </li>
                <li className='flex-auto flex justify-end'>
                  <Reveal>
                    <Link to="/design" className='text-4xl font-display font-bold text-white' onClick={handleClick}>Design</Link>
                  </Reveal>
                </li>
                <li className='flex-auto flex justify-end'>
                  <Reveal>
                    <Link to="/contact" className='text-4xl font-display font-bold text-white' onClick={handleClick}>Contact</Link>
                  </Reveal>
                </li>
                </div>
              </ul>
            </div>
          }

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<Web />} />
          <Route path="/web/project/:id" element={<WebProjectDetail />} />
          <Route path="/design" element={<Design />} />
          <Route path="/design/project/:id" element={<DesignProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
