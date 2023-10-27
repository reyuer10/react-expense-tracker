import React, { useState } from "react";
import { categoryIcons } from "../../svg_category/svgCategory";
import { useSelector } from "react-redux";
// import { categoryColor } from "../../svg_color/svgColor";

export default function RecentTransaction() {
  const transaction = useSelector((state) => state.transaction.transactionList);

  return (
    <div className="my-10 h-[300px] w-[550px] shadow-md p-7 rounded-xl text-[#303030]">
      <div>
        <p className="text-2xl py-3 text-[#303030]">Recent Transaction</p>
      </div>
      <div>
        {transaction.map((transac) => (
          <div
            key={transac.id}
            className="flex items-center justify-between space-y-2"
          >
            <div className={`flex space-x-3`}>
              <div>{categoryIcons[transac.category]}</div>
              <div>
                <p>{transac.category}</p>
              </div>
            </div>
            <div>
              <p>{transac.amount}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
