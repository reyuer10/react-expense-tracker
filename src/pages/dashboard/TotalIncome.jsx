import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TotalIncome() {
  const totalIncome = useSelector((state) => state.transaction.totalIncome);

  return (
    <Link to="/income">
      <div className=" hover:scale-105 transition-all shadow-md p-5 rounded-3xl h-[300px] w-[550px] border border-gray-200">
        <div>
          <p className="text-2xl font-semibold">Income</p>
        </div>
        <div>
          <p className="text-4xl font-semibold p-7">Total Income: </p>
        </div>
        <div className="">
          <p className="text-[55px] text-green-400 text-center font-semibold">
            {totalIncome}$
          </p>
        </div>
      </div>
    </Link>
  );
}
