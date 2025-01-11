import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES, APP_CONSTANTS } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-12 text-center text-4xl"
      >
        {APP_CONSTANTS.EXPERIENCE}
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 p-2"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 hover:bg-neutral-950 hover:shadow-2xl rounded-lg p-2"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} @{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 text-justify">
                {experience.description}
              </p>
              <div className="flex flex-wrap">
                {experience.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded bg-slate-300 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
