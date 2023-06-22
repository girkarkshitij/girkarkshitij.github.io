import React from 'react';
import data from '../../../data';
import SkillItem from './SkillItem';

const AboutMe = () => {
  const {skills} = data;

  return (
    <div
      id='about'
      className='text-light bg-dark md: md:px-32 md:pb-32 md:pt-28'
    >
      <div className='md:flex md:divide-x md:divide-light2'>
        <h1 className='text-3xl h-2/4 text-light text-center pt-20 md:pr-8'>
          About Me
        </h1>
        <div className='p-8 text-base md:text-xl text-medium2'>
          <p className='pb-4'>
            Currently I'm working at{' '}
            <span className='text-light2'>Zeus Learning</span>. <br></br>I've
            around <span className='text-light2'>~1 year</span> of professional
            experience of Software Engineering.
          </p>
          <p className='pb-4'>
            I have a knack for quickly understanding new concepts and finding
            solutions to problems. I am passionate about writing clean,
            efficient, and well-explained code.
          </p>
          <p className='pb-4'>
            I am committed to keeping up with the latest technology trends and
            best practices and eager to continue learning and growing in this
            field.
          </p>
        </div>
      </div>
      <div className='text-center text-xl pt-12 md:text-lg md:p-12 md:pt-20'>
        Technologies I'm working with
        <br />
        {skills.map((item) => {
          return <SkillItem skill={item.skill} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default AboutMe;
