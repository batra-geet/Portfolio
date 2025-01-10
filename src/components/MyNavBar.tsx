import React from "react";
import logo from "../assets/GeetanshuBatraLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MY_DETAILS } from "../constants";

const MyNavBar = () => {
  return (
    <nav className="mb-16 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-16 h-16" src={logo} alt="logo" />
      </div>
      <div className="mx-10 flex gap-6 items-center justify-center text-3xl">
        <a href={MY_DETAILS.GITHUB} target="_blank" rel="noreferrer">
          <FaGithub title="Github" color="#114221" />
          <p className="text-xs mt-1 hover:text-blue-500">Github</p>
        </a>
        <a href={MY_DETAILS.LINKEDIN} target="_blank" rel="noreferrer">
          <FaLinkedin title="LinkedIn" color="#0f5585" />
          <p className="text-xs mt-1 hover:text-blue-500">LinkedIn</p>
        </a>
      </div>
    </nav>
  );
};

export default MyNavBar;
