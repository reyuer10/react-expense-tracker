import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { categoryIcons } from "../svg_category/svgCategory";
import { viewed_transaction } from "../features/transactionSlice";
import ViewDetails from "./view-details/ViewDetails";

export default function Transactions() {
  const transaction = useSelector((state) => state.transaction.transactionList);

  const [transacDetail, setTransacDetail] = useState(null);
  const [isUserPick, setIsUserPick] = useState(false);

  const dispatch = useDispatch();
  const [searchFilter, setSearchFilter] = useState("");
  const [modifiedFilter, setModifiedFilter] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const handleModifiedFilterChange = (e) => {
    setModifiedFilter(e.target.value);
  };

  const filterSearch = transaction.filter((transac) => {
    const categoryMatch = transac.transacCategory
      .toLowerCase()
      .includes(searchFilter.toLowerCase());

    const matchType = transac.transactionType.includes(modifiedFilter);

    return categoryMatch && matchType;
  });

  const handleViewed = (itemId) => {
    const selectedTransaction = transaction.find(
      (transac) => transac.transacId === itemId
    );

    if (selectedTransaction) {
      setTransacDetail(selectedTransaction);
    }

    dispatch(
      viewed_transaction({
        vId: itemId,
      })
    );
    setIsUserPick(true);
  };

  const handleBackTransaction = () => setIsUserPick(false);
  // h-[calc(100vh-200px)]
  return (
    <motion.div
      initial={{ y: "-4vh", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full"
    >
      <div>
        <div className="font-outfit my-8 p-3 rounded-[36px] shadow-lg border border-slate-300 overflow-y-auto h-[calc(100vh-190px)]">
          <div>
            <p className="text-4xl font-semibold text-[#303030] p-4 max-md:text-center">
              Transactions
            </p>
          </div>
          <div className="mx-5 flex space-x-10 items-center max-md:justify-center">
            <input
              type="text"
              placeholder="Search for category..."
              value={searchFilter}
              onChange={handleSearchInputChange}
              className="flex justify-center items-center w-[350px] rounded-full border border-slate-300 shadow px-3 py-2"
            />
            <div className="space-x-1 flex items-center max-md:hidden">
              <span>Transaction type: </span>
              <select
                className="rounded-full px-4 py-2 shadow-md border border-slate-300"
                name="transaction-type"
                id="transaction_type"
                value={modifiedFilter}
                onChange={handleModifiedFilterChange}
              >
                <option></option>
                <option value="Expenses">Expenses</option>
                <option value="Income">Income</option>
              </select>
            </div>
          </div>
          <div className=" m-5">
            {isUserPick ? (
              <>
                <ViewDetails
                  backButton={handleBackTransaction}
                  setTransacDetail={setTransacDetail}
                  transacDetail={transacDetail}
                />
              </>
            ) : (
              <>
                <div className="flex flex-wrap flex-1 overflow-y-auto max-lg:flex max-lg:flex-col">
                  {filterSearch.map((transac) => (
                    <div
                      key={transac.transacId}
                      onClick={() => handleViewed(transac.transacId)}
                    >
                      <div
                        className={`${
                          transac.viewed_status === false
                            ? "bg-slate-100"
                            : "hover:bg-slate-100"
                        } flex items-center justify-between w-[400px] border border-slate-300 shadow-md shadow-gray-300 rounded-3xl p-4 my-2 mx-2  transition-colors duration-100 cursor-pointer`}
                      >
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
                            } font-semibold text-lg`}
                          >
                            {transac.transactionType === "Expenses" ? "-" : "+"}{transac.transacAmount}$
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
