import React from "react";
import profile from "../assets/GeetanshuBatraProfile.png";
import { MY_DETAILS, APP_CONSTANTS } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        {APP_CONSTANTS.ABOUT}
        <span className="text-neutral-500">{APP_CONSTANTS.ME}</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="w-72 lg:w-96 rounded-3xl"
              src={profile}
              alt="about"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{MY_DETAILS.ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
