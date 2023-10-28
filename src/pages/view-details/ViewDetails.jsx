import React from "react";
import { useParams } from "react-router-dom";
import { categoryIcons } from "../../svg_category/svgCategory";
import { useSelector } from "react-redux";

export default function ViewDetails() {
  const transaction = useSelector((state) => state.transaction.transactionList);
  const { id } = useParams();
  const selectedItem = transaction.find(
    (transac) => transac.transacId === parseInt(id)
  );
  if (!selectedItem) {
    return <div>Item not found</div>;
  }
  return (
    <div className="relative flex flex-col justify-center items-center font-outfit shadow-md rounded-xl p-9 my-3 space-y-12 text-[#303030]">
      <div className="items-start">
        <p className="text-3xl font-medium">Transaction Details</p>
      </div>
      <div className="text-xl w-[700px]">
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
      </div>
    </div>
  );
}
