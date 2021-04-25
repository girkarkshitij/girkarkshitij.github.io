import React from 'react';
import data from '../../../data';
import SkillItem from './SkillItem';

const AboutMe = () => {
  const { skills } = data;

  return (
    <div
      id='about'
      className='container text-light bg-medium md:px-32 md:pb-32 md:pt-24'
    >
      <div className='md:flex md:divide-x md:divide-light2'>
        <h1 className='text-3xl h-2/4 text-light text-center pt-20 md:pr-8'>
          About Me
        </h1>
        <div className='p-8 text-base md:text-xl text-medium2'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            pariatur eaque placeat! Explicabo nulla, animi harum blanditiis
            similique culpa et.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
            aliquid iusto! At laudantium deleniti ducimus laboriosam, nulla
            itaque asperiores ratione?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            officia aliquid fugiat ratione eligendi, quos voluptatum dignissimos
            molestiae et voluptatibus, at possimus accusamus quas non similique
            sequi eveniet vitae ad. Nesciunt voluptas reprehenderit veritatis
            est modi vel corporis cupiditate autem?
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
