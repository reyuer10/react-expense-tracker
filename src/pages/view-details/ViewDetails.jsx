import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { categoryIcons } from "../../svg_category/svgCategory";
import { useSelector } from "react-redux";
import { buttonOption } from "./ButtonOption";

export default function ViewDetails() {
  const [isOptionButtonClick, setIsOptionButtonClick] = useState(false);

  const transaction = useSelector((state) => state.transaction.transactionList);
  const { id } = useParams();
  const selectedItem = transaction.find(
    (transac) => transac.transacId === parseInt(id)
  );
  if (!selectedItem) {
    return <div>Item not found</div>;
  }

 

  const handleOptionButtonClick = () =>
    setIsOptionButtonClick(!isOptionButtonClick);
  return (
    <div className="relative flex flex-col justify-center items-center font-outfit shadow-md rounded-xl p-9 my-3 space-y-12 text-[#303030]">
      <div className="flex items-center">
        <div>
          <p className="text-3xl font-medium">Transaction Details</p>
        </div>
        <div>
          <button
            onClick={handleOptionButtonClick}
            className="absolute right-0 mx-10 text-[#303030] hover:text-slate-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <circle cx="2" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="22" cy="12" r="2" />
            </svg>
          </button>
          {isOptionButtonClick && (
            <div className="space-y-2 absolute right-0 mx-10 my-5 shadow-md rounded-lg flex flex-col p-3 z-10 bg-white items-baseline">
              {buttonOption.map((button) => (
                <button className="flex items-center space-x-2">
                  {button.svg}
                  <p>{button.name}</p>
                </button>
              ))}
            </div>
          )}
        </div>
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
