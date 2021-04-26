import React from 'react';
import data from '../../../data';
import SkillItem from './SkillItem';

const AboutMe = () => {
  const { skills } = data;

  return (
    <div
      id='about'
      className='container text-light bg-dark md: md:px-32 md:pb-32 md:pt-28'
    >
      <div className='md:flex md:divide-x md:divide-light2'>
        <h1 className='text-3xl h-2/4 text-light text-center pt-20 md:pr-8'>
          About Me
        </h1>
        <div className='p-8 text-base md:text-xl text-medium2'>
          <p className='pb-4'>
            Hello! My name is Kshitij Girkar and I'm pursuing a Bachelors's in
            Computer Engineering from Mumbai University.
          </p>
          <p className='pb-4'>
            I'm a passionate learner who's always willing to learn and work
            across technologies and domains. I love to explore new technologies.
            I'm currently into Web Development and working on my Data Structures
            and Algorithms
          </p>
          <p className='pb-4'>
            My interest in programming started back in 2016 when I had C++,
            HTML/CSS in my class XI course. I started following web-development
            tutorials from YouTube, Udemy, Coursera and built some projects.
            Fast-forward to today, I can build a full stack app using MERN
            stack.
          </p>
          <p className='pb-4'>
            At university, I learnt Java. For competitive programming and
            solving Data Structures - Algorithms problems I use Java. Besides, I
            know Python, SQL, Git and Vim.
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
