import React from "react";
import profile from "../assets/AboutMe.jpeg";
import { MY_DETAILS, APP_CONSTANTS } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-16 text-center text-4xl">
        {APP_CONSTANTS.ABOUT}
        <span className="text-purple-900 bg-slate-200 rounded-xl px-1">
          {APP_CONSTANTS.ME}
        </span>
      </h1>
      <div className="flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/4 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="w-24 lg:w-48 rounded-full"
              src={profile}
              alt="about"
            />
          </div>
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-4 text-justify">
              {MY_DETAILS.ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
