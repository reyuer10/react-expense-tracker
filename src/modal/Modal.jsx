import React from "react";
import { motion } from "framer-motion";

export default function Modal({ children }) {
  return (
    <div className="bg-[#FFFFFF81] inset-0 fixed z-0 flex justify-center items-center font-outfit text-[#303030]">
      <div className="z-10" />
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white h-[200px] w-[600px] rounded-lg "
      >
        <motion.div
          initial={{ y: "-4vh", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="container">{children}</div>
        </motion.div>
      </div>
    </div>
  );
}
