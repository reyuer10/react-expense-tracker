import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryIcons } from "../svg_category/svgCategory";
import { delete_bin } from "../features/transactionSlice";

export default function Bin() {
  const dispatch = useDispatch();
  const bin = useSelector((state) => state.transaction.bin);
  const [selectOption, setSelectOption] = useState(false);
  const [exisitngId, setExistingId] = useState(null);

  const handleOpenOption = (itemId) => {
    const binExistingId = bin.find((b) => b.transacId === itemId);
    console.log(binExistingId)
    if (binExistingId) {
      setExistingId(itemId);
      setSelectOption(!selectOption);
    }
    
  };

  const handleDeleteItem = (binId) => {
    dispatch(
      delete_bin({
        existingBinId: binId,
      })
    );
  };
  return (
    <div className="text-[#303030] font-outfit my-8">
      <div className="">
        <p className="text-3xl font-semibold">Bin</p>
      </div>
      <div>
        {bin.map((b) => (
          <div
            key={b.transacId}
            className="border p-3 rounded-2xl shadow-md flex flex-col w-[700px] my-3"
          >
            <div className="relative">
              <button onClick={() => handleOpenOption(b.transacId)} className="float-right px-2">
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
              {selectOption && exisitngId === b.transacId && (
                <div className="absolute bg-white right-0 my-6 px-4 py-2 flex flex-col rounded-xl border shadow-md items-start">
                  <button>Restore</button>
                  <button onClick={() => handleDeleteItem(b.transacId)}>
                    Delete permanently
                  </button>
                </div>
              )}
            </div>
            <div className="flex space-x-1">
              <p className="font-semibold"> Category: </p>
              {categoryIcons[b.transacCategory]}
              <span>{b.transacCategory}</span>
            </div>
            <div className="flex justify-between">
              <div>
                <label className="font-semibold">Title: </label>
                <span>{b.transacTitle}</span>
              </div>
              <div className="flex space-x-2">
                <p className="font-semibold">Amount:</p>
                <span> {b.transacAmount}$</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2">
                <p className="font-semibold">Date: </p>
                <span>{b.transacDate}</span>
              </div>
              <div>
                <label className="font-semibold">Transaction type: </label>
                <span
                  className={`${
                    b.transactionType === "Income"
                      ? "bg-green-400"
                      : "bg-red-400"
                  } text-white px-4 py-1 rounded-lg`}
                >
                  {b.transactionType}
                </span>
              </div>
            </div>
            <div>
              <label className="font-semibold">Description: </label>
              <span>{b.transacDescription}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
