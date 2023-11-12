import React from "react";
import { categoryIcons } from "../../svg_category/svgCategory";

export default function DetailsSaved({ detail }) {
  console.log(detail);

  const budgetPercentage =
    (detail.budgetExpenses / detail.budgetAmount) * detail.budgetPercentage;

  return (
    <>
      <div className="shadow-md border border-slate-200 rounded-xl p-5 text-[#303030]">
        <div className="flex justify-between px-5">
          <div>
            <p className="font-semibold">Category: </p>
          </div>
          <div className="flex space-x-1">
            <p>{categoryIcons[detail.budgetCategory]}</p>
            <p>{detail.budgetCategory}</p>
          </div>
        </div>
        <div className="flex justify-between px-5">
          <div>
            <p className="font-semibold">Budget Limit: </p>
          </div>
          <div>
            <p>{detail.budgetAmount}</p>
          </div>
        </div>
        <div className="flex justify-between px-5">
          <div>
            <p className="font-semibold">Amount Spent: </p>
          </div>
          <div>
            <p>{detail.budgetExpenses}$</p>
          </div>
        </div>
        <div className="flex justify-between px-5">
          <div>
            <p className="font-semibold">Progress / percentage : </p>
          </div>
          <div>
            <p>{budgetPercentage.toFixed(0)}%</p>
          </div>
        </div>
        <div
          className={`${
            budgetPercentage <= 50
              ? "bg-green-400"
              : budgetPercentage <= 75
              ? "bg-yellow-400"
              : "bg-red-400"
          } shadow-md h-2 rounded-full bg-black mx-5 my-1`}
          style={{ width: budgetPercentage + '%' }}
        ></div>
      </div>
    </>
  );
}
