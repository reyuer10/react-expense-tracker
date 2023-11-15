import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TotalIncome() {
  const totalIncome = useSelector((state) => state.transaction.totalIncome);
  // w-[550px]
  return (
    <Link to="/income">
      <div className="max-md:flex max-md:flex-col max-md:space-y-0 max-md:h-[150px] max-md:w-[150px] max-md:rounded-[24px] hover:scale-105 space-y-10 transition-all shadow-md p-5 rounded-[36px] h-[300px]  border border-gray-200">
        <div>
          <p className="text-4xl font-semibold max-md:text-xl">Income</p>
          <p className="font-semibold text-xl max-md:text-sm">Total Income: </p>
        </div>
        <div className="text-3xl  rounded-[24px] p-6 mx-5">
          <div>
            <p className=" text-[48px] max-md:text-2xl text-slate-700 text-center font-semibold p-5">
              <span>{totalIncome}</span>
              <span>₱</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
