import React from "react";
import { useSelector } from "react-redux";

export default function TotalIncome() {
  const totalIncome = useSelector((state) => state.transaction.totalIncome);

  return (
    <div className="shadow-md p-3 rounded-xl h-[300px] w-[550px] ring-2 ring-slate-200">
      <div>
        <p className="text-4xl font-semibold p-7">Total Income: </p>
      </div>
      <div className="">
        <p className="text-[55px] text-green-400 text-center font-semibold">{totalIncome}$</p>
      </div>
    </div>
  );
}
