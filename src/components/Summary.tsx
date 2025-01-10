import React from "react";
import { MY_DETAILS } from "../constants";
import profile from "../assets/GeetanshuBatraProfile.png";

const Summary = () => {
  return (
    <div className="border-b border-neutral-800 pb-16 lg:mb-30 lg:pb-2">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl">
              {MY_DETAILS.NAME}
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent lg:text-4xl">
              {MY_DETAILS.DOMAIN}
            </span>
            <p
              className="my-2 max-w-xl py-6 tracking-tighter font-light text-justify"
              style={{ whiteSpace: "pre-line" }}
            >
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
