import React from "react";
import { categoryIcons } from "../../svg_category/svgCategory";

export default function DetailsSaved({ detail }) {
  console.log(detail);
  return (
    <>
      <div className="shadow-md border border-slate-200 rounded-xl p-5">
        <div className="flex space-x-1">
          <p>Category: </p>
          <p>{categoryIcons[detail.budgetCategory]}</p>
          <p>{detail.budgetCategory}</p>
        </div>
        <div className="flex space-x-1">
          <p>Budget Limit: </p>
          <p>{detail.budgetAmount}</p>
        </div>
        <div className="flex space-x-1">
          <p>Amount Spent: </p>
          <p>{detail.budgetExpenses}</p>
        </div>
        <div className="flex space-x-1">
            <p>Progress / percentage : </p>
          <p>
            {(detail.budgetExpenses / detail.budgetAmount) *
              detail.budgetPercentage}
          </p>
        </div>
      </div>
    </>
  );
}
