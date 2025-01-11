import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/AboutMe.jpeg";
import { MY_DETAILS, APP_CONSTANTS } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl"
      >
        {APP_CONSTANTS.ABOUT}
        <span className="text-purple-900 bg-slate-200 rounded-xl px-1">
          {APP_CONSTANTS.ME}
        </span>
      </motion.h1>
      <div className="flex flex-wrap lg:justify-center">
        <motion.div
          className="w-full lg:w-1/4 lg:p-8"
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center">
            <img
              className="w-24 lg:w-48 rounded-full"
              src={profile}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:max-w-xl lg:w-3/4"
        >
          <div className="flex justify-center lg:justify-center">
            <p className="my-2 py-4 text-justify">{MY_DETAILS.ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
