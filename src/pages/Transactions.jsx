import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ViewDetails from "./view-details/ViewDetails";
import { Link } from "react-router-dom";
import { categoryIcons } from "../svg_category/svgCategory";

export default function Transactions() {
  const transaction = useSelector((state) => state.transaction.transactionList);

  return (
    <motion.div
      initial={{ y: "-4vh", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="font-outfit h-[calc(100vh-200px)] w-[500px] p-3 rounded-3xl shadow-lg ring-1 ring-slate-200">
        <div>
          <p className="text-2xl font-medium text-[#303030] p-4">
            Transactions
          </p>
        </div>
        <div>
          {transaction.map((transac) => (
            <Link to={`/transaction-details/${transac.transacId}`}>
              <div
                key={transac.transacId}
                className="flex items-center justify-between shadow-md rounded-xl p-3 my-3 mx-5 hover:bg-slate-50 transition-colors duration-100"
              >
                <div>
                  <div className="flex space-x-2">
                    {categoryIcons[transac.transacCategory]}
                    <p className="text-xl">{transac.transacCategory}</p>
                  </div>
                  <p>{transac.transacDate}</p>
                </div>
                <div>
                  <p>{transac.transacAmount}$</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
