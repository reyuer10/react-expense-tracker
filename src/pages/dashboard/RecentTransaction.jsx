import React, { useState } from "react";
import { categoryIcons } from "../../svg_category/svgCategory";
import { useSelector } from "react-redux";
// import { categoryColor } from "../../svg_color/svgColor";

export default function RecentTransaction() {
  const transaction = useSelector((state) => state.transaction.transactionList);
  // console.log(transaction);
  return (
    <div className=" h-[300px] shadow-md p-5 rounded-[36px] border border-slate-200 text-[#303030]">
      <div>
        <p className="text-2xl font-semibold py-3 text-[#303030]">Recent Transaction</p>
      </div>
      <div className="border border-slate-200 rounded-3xl p-3 shadow-md">
        <div className="h-44 overflow-y-scroll p-3 ">
          {transaction.map((transac) => (
            <div
              key={transac.transacId}
              className="flex items-center justify-between space-y-2"
            >
              <div className={`flex space-x-3`}>
                <div>{categoryIcons[transac.transacCategory]}</div>
                <div>
                  <p>{transac.transacCategory}</p>
                </div>
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
          ))}
        </div>
      </div>
    </div>
  );
}
