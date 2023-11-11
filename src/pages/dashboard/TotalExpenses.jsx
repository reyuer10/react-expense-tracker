import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TOtalExpenses() {
  const totalExpenses = useSelector((state) => state.transaction.totalExpenses);

  return (
    <Link to="/expenses">
      <div className=" hover:scale-105 transition-all shadow-md p-5 rounded-3xl h-[300px] w-[550px] border border-gray-200">
        <div>
          <p className="text-2xl font-semibold">Expenses</p>
        </div>
        <div>
          <p className="text-4xl font-semibold p-7">Total Expenses: </p>
        </div>
        <div>
          <p className="text-[55px] text-red-400 text-center font-semibold">
            {totalExpenses}$
          </p>
        </div>
      </div>
    </Link>
  );
}
