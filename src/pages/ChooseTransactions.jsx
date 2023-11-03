import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { tSvg } from "./svg/TransactionsSvg";

export default function ChooseTransactions({
  openExpense,
  openIncome,
  isClose,
  closeExpense,
  closeIncome,
}) {
  const handleCloseModal = () => {
    isClose();
    closeExpense();
    closeIncome();
  };

  return (
    <div className="px-6 py-2 shadow-md rounded-xl text-[#303030]">
      <div className="flex justify-end">
        <button type="button" onClick={handleCloseModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
          </svg>
        </button>
      </div>
      <div>
        <p className="text-md font-medium">Choose transactions</p>
      </div>
      <div className=" flex items-center justify-center space-x-5 m-7">
        <button
          onClick={openIncome}
          className="flex items-center space-x-3 px-4 py-2 rounded-lg shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 font-semibold"
        >
          {tSvg.Income}
          <p>Income</p>
        </button>
        <button
          onClick={openExpense}
          className=" flex items-center space-x-3 px-4 py-2 rounded-lg shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 font-semibold"
        >
          {tSvg.Expenses}
          <p>Expenses</p>
        </button>
      </div>
    </div>
  );
}
