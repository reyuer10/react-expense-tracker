import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { categoryIcons } from "../../svg_category/svgCategory";

export default function TopCategory() {
  // filtered category one by one
  // add all their amount
  const [categoryList, setCategoryList] = useState([]);
  const transactionList = useSelector(
    (state) => state.transaction.transactionList
  );
  useEffect(() => {
    const transactionCategory = transactionList.reduce((acc, transaction) => {
      const { transacCategory, transacAmount, transactionType } = transaction;

      if (!acc[transacCategory]) {
        acc[transacCategory] = transacAmount;
      } else {
        acc[transacCategory] += transacAmount;
      }

      return acc;
    }, {});

    const sortedCategoryTotals = Object.entries(transactionCategory).map(
      ([transacCategory, totalAmount]) => ({
        transacCategory,
        totalAmount,
      })
    );

    // Sort categories by total amount in descending order
    sortedCategoryTotals.sort((a, b) => b.totalAmount - a.totalAmount);

    console.log("Sorted Category Totals:", sortedCategoryTotals);

    setCategoryList(sortedCategoryTotals);
  }, []);
  console.log(categoryList);

  return (
    <div className="shadow-md p-5 rounded-2xl ring-2 ring-slate-200 h-[300px] text-slate-700">
      <div>
        <p className="text-2xl font-semibold">Top Category Expenses</p>
      </div>
      <div className="h-[220px] overflow-y-auto px-5 py-2">
        {categoryList.map((transac, index) => (
          <div className="flex justify-between my-3" key={index}>
            <div className="flex space-x-2 ">
              <span className="font-semibold">{index + 1}</span>
              <span>{categoryIcons[transac.transacCategory]}</span>
              <span>{transac.transacCategory}</span>
            </div>
            <p>{transac.totalAmount} ₱</p>
          </div>
        ))}
      </div>
    </div>
  );
}
