import React from "react";
import data from "../../../data";

import contactProject from "../../../assets/contact-manager.png";
import aiProject from "../../../assets/ai-chat.png";
import arProject from "../../../assets/ar-android.png";
import techShopProject from "../../../assets/techshop.png";

const Portfolio = () => {
  const { projects } = data;

  return (
    <div
      id="portfolio"
      className="text-light bg-dark p-8 pt-24 md:px-32 md:pb-32 md:pt-16"
    >
      <h1 className="text-3xl h-2/4 text-light text-center pb-4 md:pb-16">
        Portfolio
      </h1>

      <div className="lg:flex pb-20 md:pb-16">
        <div className="text-center md:text-left">
          <h3 className="md:text-left text-light2 text-3xl pb-4">
            {projects[0].name}
          </h3>
          <p className="pb-4 pt-2 text-base md:text-xl text-medium2">
            {projects[0].description}
          </p>
          <a
            href={projects[0].githuburl}
            className="p-4 pl-0 hover:text-light2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href={projects[0].siteurl}
            className="p-4 hover:text-light2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-external-link-square-alt"></i>
          </a>
          <ul className="pt-4">
            {projects[0].techstack.map((item) => {
              return (
                <li className="inline text-light2 pr-1 md:pr-3" key={item}>
                  <i className="fas fa-caret-right"></i>
                  {" " + item}
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={contactProject}
          className="w-full h-full lg:w-2/4 lg:h-2/4 pt-8 lg:pt-0 lg:ml-8"
          alt="Contact Manager project screenshot"
        />
      </div>

      <div className="flex-row-reverse lg:flex pb-8 md:pb-16">
        <div className="text-center md:text-left">
          <h3 className="md:text-left text-light2 text-3xl pb-4 lg:pl-8">
            {projects[3].name}
          </h3>
          <p className="pb-4 pt-2 lg:pl-8 text-base md:text-xl text-medium2">
            {projects[3].description}
          </p>
          <a
            href={projects[3].githuburl}
            className="p-4 lg:pl-8 hover:text-light2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href={projects[3].siteurl}
            className="p-4 hover:text-light2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-external-link-square-alt"></i>
          </a>
          <ul className="pt-4 lg:pl-8">
            {projects[3].techstack.map((item) => {
              return (
                <li className="inline text-light2 pr-1 md:pr-3" key={item}>
                  <i className="fas fa-caret-right"></i>
                  {" " + item}
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={techShopProject}
          className="w-full h-full lg:w-2/4 lg:h-2/4 pt-8 lg:pt-0"
          alt="TechShop e-commerce project screenshot"
        />
      </div>

      <div className="lg:flex pb-20 md:pb-16">
        <div className="text-center md:text-left">
          <h3 className="md:text-left text-light2 text-3xl pb-4">
            {projects[2].name}
          </h3>
          <p className="pb-4 pt-2 text-base md:text-xl text-medium2">
            {projects[2].description}
          </p>
          <a
            href={projects[2].githuburl}
            className="p-4 pl-0 hover:text-light2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <ul className="pt-4">
            {projects[2].techstack.map((item) => {
              return (
                <li className="inline text-light2 pr-1 md:pr-3" key={item}>
                  <i className="fas fa-caret-right"></i>
                  {" " + item}
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={aiProject}
          className="w-full h-full lg:w-2/4 lg:h-2/4 pt-8 lg:pt-0 lg:ml-8"
          alt="AI Chat project screenshot"
        />
      </div>

      <div className="flex-row-reverse lg:flex pb-8 md:pb-16">
        <div className="text-center md:text-left">
          <h3 className="md:text-left text-light2 text-3xl pb-4 lg:pl-8">
            {projects[1].name}
          </h3>
          <p className="pb-4 pt-2 lg:pl-8 text-base md:text-xl text-medium2">
            {projects[1].description}
          </p>
          <a
            href={projects[1].githuburl}
            className="p-4 lg:pl-8 hover:text-light2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href={projects[1].siteurl}
            className="p-4 hover:text-light2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-external-link-square-alt"></i>
          </a>
          <ul className="pt-4 lg:pl-8">
            {projects[1].techstack.map((item) => {
              return (
                <li className="inline text-light2 pr-1 md:pr-3" key={item}>
                  <i className="fas fa-caret-right"></i>
                  {" " + item}
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={arProject}
          className="w-full h-full lg:w-2/4 lg:h-2/4 pt-8 lg:pt-0"
          alt="Learn 3D Geometry project screenshot"
        />
      </div>
    </div>
  );
};

export default Portfolio;
