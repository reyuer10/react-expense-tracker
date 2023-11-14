import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categoryIcons } from "../svg_category/svgCategory";
import {
  transaction_detail,
  viewed_transaction,
} from "../features/transactionSlice";
import ViewDetails from "./view-details/ViewDetails";

export default function Transactions() {
  const transaction = useSelector((state) => state.transaction.transactionList);
  const transactionDetails = useSelector(
    (state) => state.transaction.transactionDetails
  );

  const dispatch = useDispatch();
  const [searchFilter, setSearchFilter] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const filterSearch = transaction.filter((transac) =>
    transac.transacCategory.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const handleViewed = (itemId) => {
    dispatch(
      transaction_detail({
        transactionId: itemId,
      })
    );
    dispatch(
      viewed_transaction({
        vId: itemId,
      })
    );
  };
  // h-[calc(100vh-200px)]
  return (
    <motion.div
      initial={{ y: "-4vh", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex"
    >
      <div className="font-outfit my-8 p-3 rounded-[36px] shadow-lg border border-slate-300">
        <div>
          <p className="text-2xl font-medium text-[#303030] p-4">
            Transactions
          </p>
        </div>
        <div className="mx-5">
          <input
            type="text"
            placeholder="Search for category..."
            value={searchFilter}
            onChange={handleSearchInputChange}
            className="flex justify-center items-center w-full rounded-full border border-gray-200 shadow px-3 py-2"
          />
        </div>
        <div className="border border-slate-200 rounded-[32px] m-5 shadow-md bg-slate-100">
          <div className="grid grid-cols-2 overflow-y-auto m-5 max-lg:flex max-lg:flex-col">
            {filterSearch.map((transac) => (
              <div
                // to={`/transaction-details/${transac.transacId}`}
                key={transac.transacId}
                onClick={() => handleViewed(transac.transacId)}
              >
                <div
                  className={`${
                    transac.viewed_status === false
                      ? "bg-slate-100"
                      : "hover:bg-slate-50"
                  } flex items-center justify-between w-[400px] border border-slate-200 bg-white shadow-md rounded-3xl p-4 my-2 mx-2  transition-colors duration-100`}
                >
                  <div>
                    <div className="flex space-x-2">
                      {categoryIcons[transac.transacCategory]}
                      <p className="text-xl">{transac.transacCategory}</p>
                    </div>
                    <p>{transac.transacDate}</p>
                  </div>
                  <div className="p-3 border border-slate-300 rounded-xl shadow-md">
                    <p
                      className={`${
                        transac.transactionType === "Expenses"
                          ? "text-red-400"
                          : "text-green-400"
                      } font-semibold text-lg`}
                    >
                      {transac.transacAmount}$
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {transactionDetails.map((transac) => (
          <ViewDetails key={transac.transacId} transac={transac} />
        ))}
      </div>
    </motion.div>
  );
}
