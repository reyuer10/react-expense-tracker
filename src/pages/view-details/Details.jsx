import React from "react";
import { categoryIcons } from "../../svg_category/svgCategory";

export default function Details({ selectedItem }) {

  return (
    <>
      <div>
        <div className="flex justify-between">
          <span className="font-medium">Transaction type:</span>
          <p
            className={`${
              selectedItem.transactionType === "Expenses"
                ? "bg-red-400"
                : "bg-green-400"
            } text-white rounded-lg px-4`}
          >
            {selectedItem.transactionType}
          </p>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Category: </span>
          <div className="flex space-x-2 ">
            {categoryIcons[selectedItem.transacCategory]}
            <p>{selectedItem.transacCategory}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Date: </span>
          <p>{selectedItem.transacDate}</p>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Amount: </span>
          <p
            className={`${
              selectedItem.transactionType === "Expenses"
                ? "text-red-400"
                : "text-green-400"
            }`}
          >
            {selectedItem.transacAmount}$
          </p>
        </div>
        <div className="py-10 space-y-7">
          <div>
            <span className="font-medium">Title:</span>
            <p>{selectedItem.transacTitle}</p>
          </div>
          <div>
            <span className="font-medium">Description:</span>
            <div className="bg-slate-50 rounded-xl p-5 shadow-md">
              <p>{selectedItem.transacDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
