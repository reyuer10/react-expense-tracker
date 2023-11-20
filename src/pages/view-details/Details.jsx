import React from "react";
import { categoryIcons } from "../../svg_category/svgCategory";

export default function Details({ transacDetail }) {
  
  return (
    <>
      <div className="max-md:text-lg">
        <div className="flex justify-between">
          <span className="font-medium max-md:text-lg">Transaction type:</span>
          <p
            className={`${
              transacDetail.transactionType === "Expenses"
                ? "bg-red-400"
                : "bg-green-400"
            } text-white rounded-lg px-4`}
          >
            {transacDetail.transactionType}
          </p>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Category: </span>
          <div className="flex space-x-2 ">
            {categoryIcons[transacDetail.transacCategory]}
            <p>{transacDetail.transacCategory}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Date: </span>
          <p>{transacDetail.transacDate}</p>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Amount: </span>
          <p
            className={`${
              transacDetail.transactionType === "Expenses"
                ? "text-red-400"
                : "text-green-400"
            }`}
          >
            {transacDetail.transacAmount}$
          </p>
        </div>
        <div className="py-10 space-y-7">
          <div>
            <span className="font-medium">Title:</span>
            <p>{transacDetail.transacTitle}</p>
          </div>
          <div>
            <span className="font-medium">Description:</span>
            <div className="bg-slate-50 rounded-xl p-5 shadow-md">
              <p>{transacDetail.transacDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
