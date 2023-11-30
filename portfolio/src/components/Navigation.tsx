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

function Navigation() {
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
