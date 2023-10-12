// App.js
// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Logo from '../../public/jh-logo.svg';

function Navigation() {
  return (
    <Router>
      <div>
        <nav className='w-full h-2 p-8 fixed font-display text-xl tracking-wide'>
          <ul className='w-1/5 flex'>
            <li className='flex-auto'>
              <img className='h-8' src={Logo} alt="" />
            </li>
            <li className='flex-auto'>
              <Link to="/" className='transition-text duration-300 hover:text-green'>Home</Link>
            </li>
            <li className='flex-auto'>
              <Link to="/" className='transition-text duration-300 hover:text-green'>Web</Link>
            </li>
            <li className='flex-auto'>
              <Link to="/" className='transition-text duration-300 hover:text-green'>Design</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
