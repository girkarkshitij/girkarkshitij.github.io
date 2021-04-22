import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-dark text-light pr-16 pb-4'>
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
          <button className='nav-btn'>About</button>
        </li>
        <li>
          <button className='nav-btn'>Portfolio</button>
        </li>
        <li>
          <button className='nav-btn'>Contact</button>
        </li>
        <li>
          <button className='nav-btn'>Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
