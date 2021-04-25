import React from 'react';
import data from '../../../data';

import contactProject from '../../../assets/contact-manager.png';
import githubProject from '../../../assets/github-search-app.png';

const Portfolio = () => {
  const { projects } = data;

  return (
    <div
      id='portfolio'
      className='container text-light bg-dark p-8 pt-24 md:px-32 md:pb-32 md:pt-16'
    >
      <h1 className='text-3xl h-2/4 text-light text-center pb-4 md:pb-16'>
        Portfolio
      </h1>

      <div className='lg:flex pb-20 md:pb-16'>
        <div className='text-center md:text-left'>
          <h3 className='md:text-left text-light2 text-3xl pb-4'>
            {projects[0].name}
          </h3>
          <p className='pb-4 pt-2 text-base md:text-xl text-medium2'>
            {projects[0].description}
          </p>
          <a
            href={projects[0].githuburl}
            className='p-4 pl-0 hover:text-light2'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            href={projects[0].siteurl}
            className='p-4 hover:text-light2'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fas fa-external-link-square-alt'></i>
          </a>
          <ul className='pt-4'>
            {projects[0].techstack.map((item) => {
              return (
                <li className='inline text-light2 pr-1 md:pr-3' key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={contactProject}
          className='w-full h-full lg:w-2/4 lg:h-2/4 pt-4'
          alt=''
        />
      </div>

      <div className='flex-row-reverse lg:flex pb-8 md:pb-16'>
        <div className='text-center md:text-left'>
          <h3 className='md:text-left text-light2 text-3xl pb-4 lg:pl-8'>
            {projects[1].name}
          </h3>
          <p className='pb-4 pt-2 lg:pl-8 text-base md:text-xl text-medium2'>
            {projects[1].description}
          </p>
          <a
            href={projects[1].githuburl}
            className='p-4 lg:pl-8 hover:text-light2'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            href={projects[1].siteurl}
            className='p-4 hover:text-light2'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fas fa-external-link-square-alt'></i>
          </a>
          <ul className='pt-4 lg:pl-8'>
            {projects[1].techstack.map((item) => {
              return (
                <li className='inline text-light2 pr-1 ,md:pr-3' key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={githubProject}
          className='w-full h-full lg:w-2/4 lg:h-2/4 pt-4'
          alt=''
        />
      </div>
    </div>
  );
};

export default Portfolio;
