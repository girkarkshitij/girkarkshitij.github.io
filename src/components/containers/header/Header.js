import React from 'react';
import data from '../../../data';

const Header = () => {
  const { name, role, aboutMe } = data;

  return (
    <div className='box-border container bg-dark pt-32 pb-16 pl-8 md:px-32 md:pb-40 md:pt-20'>
      <h1 className='text-xl md:text-3xl text-light2'>Hi, my name is</h1>
      <h1 className='text-4xl md:text-7xl text-light py-4 md:py-8'>
        {' '}
        {name}
      </h1>{' '}
      <h3 className='text-xl md:text-7xl text-medium2 pb-8'>A {role}</h3>
      <h5 className='text-xl text-medium2 w-11/12 md:w-2/4'>{aboutMe}</h5>
    </div>
  );
};

export default Header;
