import React from "react";
import data from "../../../data";
import SkillItem from "./SkillItem";

const AboutMe = () => {
  const { skills } = data;

  return (
    <div
      id="about"
      className="text-light bg-dark md: md:px-32 md:pb-32 md:pt-28"
    >
      <div className="md:flex md:divide-x md:divide-light2">
        <h1 className="text-3xl h-2/4 text-light text-center pt-20 md:pr-8">
          About Me
        </h1>
        <div className="p-8 text-base md:text-xl text-medium2">
          <p className="pb-4">
            Currently I'm working at{" "}
            <span className="text-light2">Zeus Learning</span>.
          </p>
          <p className="pb-4">
            I've around <span className="text-light2">2 years</span> of
            professional experience of Software Engineering.
          </p>
          <p className="pb-4">
            I'm a passionate{" "}
            <span className="text-light2">Frontend Developer</span> with a focus
            on creating dynamic, user-centric web applications using{" "}
            <span className="text-light2">ReactJS</span>. I bring a strong blend
            of technical expertise and creativity to build intuitive interfaces
            that enhance user engagement. Experienced in collaborating with
            cross-functional teams to integrate RESTful APIs and deliver
            responsive, accessible solutions. Adept at turning complex
            requirements into seamless user experiences, with a proven track
            record in Agile environments. Committed to continuous learning and
            delivering high-quality code that drives business outcomes.
          </p>
          <p className="pb-4">
            I am committed to keeping up with the latest technology trends and
            best practices and eager to continue learning and growing in this
            field.
          </p>
        </div>
      </div>
      <div className="text-center text-xl pt-12 md:text-lg md:p-12 md:pt-20">
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
