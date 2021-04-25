import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-dark sticky top-0 text-light pr-2 pb-2 sm:pb-4'>
      <div className='flex justify-end'>
        <button
          className='focus:outline-none block p-4 lg:hidden hover:text-light2'
          onClick={handleClick}
        >
          <i className='fas fa-bars'></i>
        </button>
      </div>
      <ul
        className={`lg:flex text-center flex-row justify-end ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <li>
          <Link to='about' spy={true} smooth={true} className='nav-btn'>
            About
          </Link>
        </li>
        <li>
          <Link to='portfolio' spy={true} smooth={true} className='nav-btn'>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to='contact' spy={true} smooth={true} className='nav-btn'>
            Contact
          </Link>
        </li>
        <li>
          <a
            href='https://drive.google.com/file/d/1OIxs0nEM963AVNlCMOTS149v2brni6AF/view?usp=sharing'
            className='nav-btn'
            target='_blank'
            rel='noreferrer'
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
