import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { tSvg } from "./svg/TransactionsSvg";

export default function ChooseTransactions({
  openExpense,
  openIncome,
}) {

  return (
    <div className="px-6 py-2 shadow-md rounded-xl text-[#303030]">
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
