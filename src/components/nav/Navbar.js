import React, { useState } from 'react';
import { Link } from 'react-scroll';

import logo from '../../assets/KshitijGirkar-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-dark sticky top-0 text-light pr-2 pb-2 sm:pb-4'>
      <div className='flex justify-between lg:hidden'>
        <div>
          <img src={logo} alt='logo' className='h-12 w-12 ml-8 mt-2' />
        </div>
        <button
          className='focus:outline-none block p-4 lg:hidden hover:text-light2'
          onClick={handleClick}
        >
          <i className='fas fa-bars'></i>
        </button>
      </div>
      <div
        className={`lg:flex  text-center flex-row justify-between 
        `}
      >
        <div>
          <img
            src={logo}
            alt='logo'
            className='h-12 w-12 ml-8 mt-2 hidden lg:block'
          />
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <Link to='about' spy={true} smooth={true} className='nav-btn'>
            About
          </Link>
          <Link to='portfolio' spy={true} smooth={true} className='nav-btn'>
            Portfolio
          </Link>
          <Link to='contact' spy={true} smooth={true} className='nav-btn'>
            Contact
          </Link>
          <a
            href='https://drive.google.com/file/d/1OIxs0nEM963AVNlCMOTS149v2brni6AF/view?usp=sharing'
            className='nav-btn'
            target='_blank'
            rel='noreferrer'
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
