import React, { useEffect } from "react";
import { categoryIcons } from "../../svg_category/svgCategory";
import { budget_viewed_status } from "../../features/transactionSlice";
import { useDispatch, useSelector } from "react-redux";

export default function DetailsSaved({ detail }) {
  const dispatch = useDispatch();

  const budgetDetailList = useSelector(
    (state) => state.transaction.budgetDetailList
  );

  const budgetPercentage =
    (detail.budgetExpenses / detail.budgetAmount) * detail.budgetPercentage;

  const handleBudgetUserView = (bId) => {
    dispatch(
      budget_viewed_status({
        viewBudgetId: bId,
      })
    );
  };

  useEffect(() => {
    setTimeout(() => {
      handleBudgetUserView(detail.budgetId);
      handleBudgetUserView();
    }, 5000);
    // console.log(detail.isUserSeen);
  }, []);

  return (
    <>
      <div
        className={`${
          detail.isUserSeen === false ? " animate-pulse bg-slate-100" : ""
        } shadow-md border border-slate-100 rounded-3xl p-5 text-[#303030] duration-200 transition-colors`}
      >
        {detail.isUserSeen === false ? (
          <>
            <div className="">New added!</div>
          </>
        ) : null}
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
          style={{ width: budgetPercentage + "%" }}
        ></div>
      </div>
    </>
  );
}
