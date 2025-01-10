import React from "react";
import logo from "../assets/GeetanshuBatraLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const MyNavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-16 h-16" src={logo} alt="logo" />
      </div>
      <div className="m-10 flex gap-6 items-center justify-center text-2xl">
        <FaGithub />
        <FaLinkedin />
      </div>
    </nav>
  );
};

export default MyNavBar;
