import React from "react";
import { categoryIcons } from "../../svg_category/svgCategory";

export default function ExpensesTransaction({ transac }) {
  return (
    <>
      <div className="flex items-center justify-between shadow-md rounded-xl p-3 my-3 hover:bg-slate-50 transition-colors duration-100">
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
    </>
  );
}
