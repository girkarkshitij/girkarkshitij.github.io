import React from 'react';
import data from '../../../data';

import contactProject from '../../../assets/contact-manager.png';
import githubProject from '../../../assets/github-search-app.png';

const Portfolio = () => {
  const { projects } = data;

  return (
    <div
      id='portfolio'
      className='container text-light bg-dark px-32 pb-32 pt-16'
    >
      <h1 className='text-3xl h-2/4 text-light text-center pb-16 pr-8'>
        Portfolio
      </h1>

      <div className='flex pb-16'>
        <div>
          <h3 className='text-light2 text-xl pb-4'>{projects[0].name}</h3>
          <p className='pb-4 pt-2 text-medium2'>{projects[0].description}</p>
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
              return <li className='inline text-light2 pr-3' key={item}>{item}</li>;
            })}
          </ul>
        </div>
        <img src={contactProject} className='w-2/4 h-2/4' alt='' />
      </div>

      <div className='flex pb-16'>
        <img src={githubProject} className='w-2/4 h-2/4' alt='' />
        <div>
          <h3 className='text-light2 text-xl pb-4 pl-8'>{projects[1].name}</h3>
          <p className='pb-4 pt-2 pl-8 text-medium2'>{projects[1].description}</p>
          <a
            href={projects[1].githuburl}
            className='p-4 pl-8 hover:text-light2'
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
          <ul className='pt-4 pl-8'>
            {projects[1].techstack.map((item) => {
              return <li className='inline text-light2 pr-3' key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
