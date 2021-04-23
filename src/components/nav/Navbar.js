import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-dark sticky top-0 text-light pr-16 pb-4'>
      <div className='flex justify-end'>
        <button
          className='focus:outline-none block p-4 lg:hidden hover:text-light2'
          onClick={handleClick}
        >
          <i className='fas fa-bars'></i>
        </button>
      </div>
      <ul
        className={`lg:flex flex-row justify-end ${
          isOpen ? 'block text-center' : 'hidden'
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
          <Link to='resume' spy={true} smooth={true} className='nav-btn'>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
