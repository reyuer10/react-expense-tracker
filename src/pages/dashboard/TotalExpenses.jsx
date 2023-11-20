import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TOtalExpenses() {
  const totalExpenses = useSelector((state) => state.transaction.totalExpenses);

  return (
    <Link to="/expenses">
      <div className="hover:scale-105 space-y-10 transition-all shadow-md p-5 rounded-[36px] h-[300px] border border-gray-200 max-md:space-y-0 max-md:h-[150px] max-md:w-[150px] max-md:rounded-[24px]">
        <div>
          <p className="text-4xl font-semibold max-md:text-2xl">Expenses</p>
          <p className="font-semibold text-xl max-md:hidden">Total Expenses: </p>
        </div>
        <div className=" text-3xl rounded-[24px] p-6 mx-5">
          <div>
            <p className="text-[48px] text-slate-700 text-center font-semibold  max-md:flex max-md:text-2xl">
              <span>{totalExpenses}</span>
              <span>₱</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
