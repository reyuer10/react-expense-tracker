import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TotalIncome() {
  const totalIncome = useSelector((state) => state.transaction.totalIncome);
  // w-[550px]
  return (
    <Link to="/income">
      <div className="hover:scale-105 space-y-10 transition-all shadow-md p-5 rounded-[36px] h-[300px]  border border-gray-200">
        <div>
          <p className="text-4xl font-semibold">Income</p>
        </div>
        <div className="border text-3xl border-slate-200 shadow-md rounded-[24px] bg-slate-100 p-6 mx-5">
          <div>
            <p className="font-semibold">Total Income: </p>
          </div>
          <div>
            <p className="text-[48px] text-green-400 text-center font-semibold p-5">
              {totalIncome}$
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
