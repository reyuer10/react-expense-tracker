import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TOtalExpenses() {
  const totalExpenses = useSelector((state) => state.transaction.totalExpenses);

  return (
    <Link to="/expenses">
      <div className="hover:scale-105 space-y-10 transition-all shadow-md p-5 rounded-[36px] h-[300px]  border border-gray-200">
        <div>
          <p className="text-4xl font-semibold">Expenses</p>
        </div>
        <div className="border text-3xl border-slate-200 shadow-md rounded-[24px] bg-slate-100 p-6 mx-5">
          <div>
            <p className="font-semibold">Total Expenses: </p>
          </div>
          <div>
            <p className="text-[48px] text-green-400 text-center font-semibold p-5">
              {totalExpenses}$
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
