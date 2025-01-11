import React from "react";
import { motion } from "framer-motion";
import { APP_CONSTANTS, MY_DETAILS } from "../constants";
import profile from "../assets/GeetanshuBatraProfile.png";

const container = (delay) => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: delay },
    },
  };
};

const buttonAnimation = (delay) => {
  return {
    hidden: { x: 0, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: delay },
    },
  };
};

const Summary = () => {
  return (
    <div className="border-b border-neutral-800 pb-16 lg:mb-30 lg:pb-2">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl font-thin tracking-tight lg:text-8xl md:text-6xl"
            >
              {MY_DETAILS.NAME}
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent lg:text-4xl"
            >
              {MY_DETAILS.DOMAIN}
            </motion.span>
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 tracking-tighter font-light text-justify"
              style={{ whiteSpace: "pre-line" }}
            >
              {MY_DETAILS.SUMMARY_CONTENT}
            </motion.p>
            <motion.a
              href="/GeetanshuBatraReactCV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonAnimation(2)}
              initial="hidden"
              animate="visible"
              className="mb-8 mx-2 py-4 px-2 bg-slate-200 text-purple-950 font-bold rounded-3xl hover:text-white hover:bg-purple-950 lg:mb-4 md:mb-4"
            >
              {APP_CONSTANTS.DOWNLOAD_RESUME}
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="w-56 lg:w-96 rounded-3xl"
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
