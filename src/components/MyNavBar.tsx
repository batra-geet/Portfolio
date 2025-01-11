import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { APP_CONSTANTS, MY_DETAILS } from "../constants";
import logo from "../assets/GeetanshuBatraLogo.png";

const MyNavBar = ({ onClickContact }) => {
  return (
    <nav className="mb-16 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-16 h-16 mx-6" src={logo} alt="logo" />
      </div>
      <div className="mx-6 flex gap-4 items-center justify-center text-3xl">
        <button
          onClick={onClickContact}
          className="text-xs lg:text:2xl md:text-xl font-thin lg:font-bold hover:text-blue-600 hover:bg-neutral-900 rounded-lg p-2"
        >
          {APP_CONSTANTS.CONTACT_ME}
        </button>
        <a href={MY_DETAILS.GITHUB} target="_blank" rel="noreferrer">
          <FaGithub
            className="text-xl lg:text-4xl md:text-2xl"
            title="Github"
            color="#114221"
          />
          <p className="text-xs mt-1 hover:text-blue-500">
            {APP_CONSTANTS.GITHUB}
          </p>
        </a>
        <a href={MY_DETAILS.LINKEDIN} target="_blank" rel="noreferrer">
          <FaLinkedin
            className="text-xl lg:text-4xl md:text-2xl"
            title="LinkedIn"
            color="#0f5585"
          />
          <p className="text-xs mt-1 hover:text-blue-500">
            {APP_CONSTANTS.LINKEDIN}
          </p>
        </a>
      </div>
    </nav>
  );
};

export default MyNavBar;
