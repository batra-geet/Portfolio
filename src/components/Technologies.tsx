import React from "react";
import { motion } from "framer-motion";
import { APP_CONSTANTS, SKILLS } from "../constants";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoAndroid } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -8 },
  animate: {
    y: [8, -8],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl"
      >
        {APP_CONSTANTS.TECHNOLOGIES}
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <div className="bg-neutral-950 p-4 rounded-2xl">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4"
          >
            <RiReactjsLine color="cyan" size={56} />
          </motion.div>
          <p className="flex mt-4 justify-center">{SKILLS.REACT}</p>
        </div>

        <div className="bg-neutral-950 p-4 rounded-2xl">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4"
          >
            <IoLogoAndroid color="green" size={56} />
          </motion.div>
          <p className="flex mt-4 justify-center">{SKILLS.ANDROID}</p>
        </div>

        <div className="bg-neutral-950 p-4 rounded-2xl">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4"
          >
            <TbBrandTypescript color="white" size={56} />
          </motion.div>
          <p className="flex mt-4 justify-center">{SKILLS.TYPESCRIPT}</p>
        </div>

        <div className="bg-neutral-950 p-4 rounded-2xl">
          <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4"
          >
            <IoLogoJavascript color="yellow" size={56} />
          </motion.div>
          <p className="flex mt-4 justify-center">{SKILLS.JAVASCRIPT}</p>
        </div>

        <div className="bg-neutral-950 p-4 rounded-2xl">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4"
          >
            <RiTailwindCssLine color="cyan" size={56} />
          </motion.div>
          <p className="flex mt-4 justify-center">{SKILLS.TAILWIND}</p>
        </div>
        <div className="bg-neutral-950 p-4 rounded-2xl">
          <motion.div
            variants={iconVariants(7.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4"
          >
            <FaHtml5 color="orange" size={56} />
          </motion.div>
          <p className="flex mt-4 justify-center">{SKILLS.HTML}</p>
        </div>
        <div className="bg-neutral-950 p-4 rounded-2xl">
          <motion.div
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4"
          >
            <FaCss3Alt color="blue" size={56} />
          </motion.div>
          <p className="flex mt-4 justify-center">{SKILLS.CSS}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
