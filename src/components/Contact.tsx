import React from "react";
import { APP_CONSTANTS, MY_DETAILS } from "../constants";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">
        {APP_CONSTANTS.GET_IN_TOUCH}
      </h1>
      <div className="flex flex-col text-center tracking-tighter justify-center lg:flex-row md:flex-row">
        <span className="my-4 mx-2 inline-flex">
          <span className="mr-2">
            <IoLocationOutline size={20} />
          </span>
          <span>{MY_DETAILS.ADDRESS}</span>
        </span>
        <span className="my-4 mx-2 inline-flex">
          <span className="mr-2">
            <FaPhoneAlt size={20} />
          </span>
          <span>{MY_DETAILS.PHONE}</span>
        </span>
        <span className="my-4 mx-2 inline-flex">
          <span className="mr-2">
            <MdOutlineMailOutline size={20} />
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
