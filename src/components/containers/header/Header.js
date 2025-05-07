import React from 'react';
import { Link } from 'react-scroll';
import data from '../../../data';

const Header = () => {
  const { name, role } = data;

  return (
    <div id='header' className='box-border bg-dark pt-32 pb-16 pl-8 md:px-32 md:pb-48 md:pt-20'>
      <h1 className='text-xl md:text-3xl text-light2'>Hi, my name is</h1>
      <h1
        translate='no'
        className='text-4xl md:text-7xl text-light py-4 md:py-8'
      >
        {' '}
        {name}
      </h1>{' '}
      <h3 className='text-xl md:text-7xl text-medium2 pb-8'>A passionate {role}</h3>
      <Link to='contact' spy={true} smooth={true} className='nav-btn'>
        <button className='text-light2 border-2 border-light hover:border-light2 focus:outline-none rounded p-2'>
          Get In Touch
        </button>
      </Link>
    </div>
  );
};

export default Header;
