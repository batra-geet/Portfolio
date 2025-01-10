import React from "react";
import { MY_DETAILS } from "../constants";
import profile from "../assets/GeetanshuBatraProfile.png";

const Summary = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              {MY_DETAILS.NAME}
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              {MY_DETAILS.DOMAIN}
            </span>
            <p className="my-2 max-w-xl py-6 tracking-tighter font-light">
              {MY_DETAILS.SUMMARY_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="w-72 lg:w-96 rounded-3xl"
              src={profile}
              alt="Geetanshu"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
