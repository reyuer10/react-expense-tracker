import React from "react";
import { motion } from "framer-motion";

export default function DeleteModal({ isOpen, children }) {
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
          className="container bg-white ring-1 ring-slate-200 rounded-2xl"
        >
          <div className="px-10 py-8">{children}</div>
        </div>
      </motion.div>
    </div>
  );
}
