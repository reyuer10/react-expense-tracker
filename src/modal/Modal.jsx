import React from "react";
import { motion } from "framer-motion";

export default function Modal({ isOpen, children, isClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="bg-[#FFFFFF81] inset-0 fixed z-0 flex justify-center items-center font-outfit text-[#303030]">
      <motion.div
        initial={{ y: "-4vh", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="container bg-white ring-1 ring-slate-200 rounded-lg"
        >
          <div className="text-right p-3">
            <button onClick={isClose} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
              </svg>
            </button>
          </div>
          <div>{children}</div>
        </div>
      </motion.div>
    </div>
  );
}
