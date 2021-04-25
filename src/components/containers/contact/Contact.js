import React from 'react';
import data from '../../../data';

const Contact = () => {
  const { socialLinks } = data;

  return (
    <div
      id='contact'
      className='container text-light text-center bg-medium px-4 pt-8 pb-8 md:px-32 md:pt-20 md:pb-16'
    >
      <h1 className='text-3xl text-light pb-24'>Get in Touch</h1>
      <h3 className='text-lg md:text-xl text-medium2 pb-8'>
        Want to discuss something or just want to say hi?
        <br /> My inbox is open for all
      </h3>
      <h3 className='text-xl text-light2 pb-8'>girkarkshitij@gmail.com</h3>
      <ul className='pb-16'>
        {socialLinks.map((link) => {
          return (
            <li className='inline p-8 hover:text-light2' key={link.name}>
              <a href={link.url} target='_blank' rel='noreferrer'>
                <i className={link.className}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <a
        href='https://github.com/girkarkshitij/portfolio'
        target='_blank'
        rel='noreferrer'
      >
        <h5 className='pt-32'>
          Built by
          <span className='text-light2'> Kshitij Girkar</span>
        </h5>
      </a>
    </div>
  );
};

export default Contact;
