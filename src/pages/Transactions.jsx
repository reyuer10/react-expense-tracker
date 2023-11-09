import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categoryIcons } from "../svg_category/svgCategory";

export default function Transactions() {
  const transaction = useSelector((state) => state.transaction.transactionList);
  const [searchFilter, setSearchFilter] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const filterSearch = transaction.filter((transac) =>
    transac.transacCategory.toLowerCase().includes(searchFilter.toLowerCase())
  );

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
        <div className="mx-5">
          <input
            type="text"
            placeholder="Search category..."
            value={searchFilter}
            onChange={handleSearchInputChange}
            className="flex justify-center items-center w-full rounded-lg ring-1 ring-slate-300 shadow-md px-3 py-2"
          />
        </div>
        <div>
          {filterSearch.map((transac) => (
            <Link
              to={`/transaction-details/${transac.transacId}`}
              key={transac.transacId}
            >
              <div className="flex items-center justify-between shadow-md rounded-xl p-3 my-3 mx-5 hover:bg-slate-50 transition-colors duration-100">
                <div>
                  <div className="flex space-x-2">
                    {categoryIcons[transac.transacCategory]}
                    <p className="text-xl">{transac.transacCategory}</p>
                  </div>
                  <p>{transac.transacDate}</p>
                </div>
                <div>
                  <p
                    className={`${
                      transac.transactionType === "Expenses"
                        ? "text-red-400"
                        : "text-green-400"
                    } font-semibold`}
                  >
                    {transac.transacAmount}$
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
