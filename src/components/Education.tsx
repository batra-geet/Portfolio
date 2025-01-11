import React from "react";
import { motion } from "framer-motion";
import { APP_CONSTANTS, EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl"
      >
        {APP_CONSTANTS.EDUCATION}
      </motion.h1>
      <div>
        {EDUCATION.map((education, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {education.degree}
                {"  "}
                <span className="text-sm text-neutral-200">
                  {education?.mode ?? ""}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 text-justify">
                {education.college}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
