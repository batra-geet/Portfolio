import React from "react";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { APP_CONSTANTS, MY_DETAILS } from "../constants";

const Contact = ({ ref }) => {
  return (
    <div ref={ref} className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        {APP_CONSTANTS.GET_IN_TOUCH}
      </motion.h1>
      <div className="flex flex-col text-center tracking-tighter justify-center lg:flex-row md:flex-row">
        <span className="my-4 mx-2 inline-flex">
          <span className="mr-2">
            <IoLocationOutline size={20} color="yellow" />
          </span>
          <span>{MY_DETAILS.ADDRESS}</span>
        </span>
        <span className="my-4 mx-2 inline-flex">
          <span className="mr-2">
            <FaPhoneAlt size={20} color="green" />
          </span>
          <span>{MY_DETAILS.PHONE}</span>
        </span>
        <span className="my-4 mx-2 inline-flex">
          <span className="mr-2">
            <MdOutlineMailOutline size={20} color="red" />
          </span>
          <span>
            <a
              href="mailto:batra.geet01@gmail.com"
              className="border-b hover:text-blue-500"
            >
              {MY_DETAILS.EMAIL}
            </a>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Contact;
