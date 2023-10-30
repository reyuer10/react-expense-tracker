import React from "react";
import { useSelector } from "react-redux";

export default function TOtalExpenses() {
  const totalExpenses = useSelector((state) => state.transaction.totalExpenses);

  return (
    <div className="shadow-md p-3 rounded-[40px] h-[300px] w-[550px] ring-2 ring-slate-200">
      <div>
        <p className="text-4xl font-semibold p-7">Total Expenses: </p>
      </div>
      <div >
        <p className="text-[55px] text-red-400 text-center font-semibold">{totalExpenses}$</p>
      </div>
    </div>
  );
}
