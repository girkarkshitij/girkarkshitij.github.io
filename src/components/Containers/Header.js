import React from 'react';
import data from '../../data';

const Header = () => {
  const { name, role, aboutMe } = data;

  return (
    <div className='box-border container bg-dark px-32 pb-28 pt-20 bg-dark'>
      <h1 className='text-3xl text-light2 leading-relaxed'>
        Hi, my name is
        <br />
        <span className='text-7xl text-light block mt-4'> {name}</span>{' '}
      </h1>
      <h3 className='text-7xl text-medium2 leading-relaxed'>A {role}</h3>
      <h5 className='text-medium2 leading-relaxed w-6/12'>{aboutMe}</h5>
    </div>
  );
};

export default Header;
