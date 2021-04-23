import React from 'react';
import data from '../../../data';
import SkillItem from './SkillItem';

const AboutMe = () => {
  const { skills } = data;

  return (
    <div id='about' className=' container text-light bg-dark px-32 pb-32 pt-16'>
      <div className='flex divide-x divide-light2'>
        <div className=''>
          <h1 className='text-3xl h-2/4 text-light text-center pt-20 pr-8'>
            About Me
          </h1>
        </div>
        <div className='p-8 text-lg text-medium2'>
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
      <div className='text-center text-lg p-8'>
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
