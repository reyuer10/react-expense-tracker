import React, { useEffect, useState } from "react";
import AddCategory from "../button/AddCategory";
import { useSelector } from "react-redux";

export default function BudgetManagement() {
  const budgetList = useSelector((state) => state.transaction.budgetList);
  const expenseLimit = useSelector((state) => state.transaction.expenseLimit);
  
  const expensesOne = useSelector((state) => state.transaction.expensesOne);
  const expensesTwo = useSelector((state) => state.transaction.expensesTwo);
  const expensesThree = useSelector((state) => state.transaction.expensesThree);
  const expensesFour = useSelector((state) => state.transaction.expensesFour);
  
  
  const [isbuttonBudgetClick, setIsButtonBudgetClick] = useState(false);
  const [isBudgetComplete, setIsBudgetComplete] = useState(false);

  const handleButtonSet = () => setIsButtonBudgetClick(true);
  const handleBudgetCancel = () => setIsButtonBudgetClick(false);

  const [expense, setExpense] = useState(0);

  const percent = (expense / expenseLimit) * 100;

  // useEffect(() => {

  //   if ((expense / expenseLimit) * percent > 50) {
  //     console.log("half");
  //   }
  // }, []);
  // console.log(percent);

  return (
    <div className="shadow-md mx-3 py-3 px-8 rounded-[30px] w-[580px] h-[calc(100vh-290px)] ring-2 ring-slate-200 font-outfit space-y-10">
      <div>
        <p className="text-2xl font-semibold pt-5">Budget Management</p>
      </div>
      <div className="my-5">
        {isbuttonBudgetClick ? (
          <>
            <div className="w-full ring-1 ring-slate-400 rounded-lg">
              <AddCategory
                setIsBudgetComplete={setIsBudgetComplete}
                setIsButtonBudgetClick={setIsButtonBudgetClick}
                handleBudgetCancel={handleBudgetCancel}
              />
            </div>
          </>
        ) : (
          <>
            {!isBudgetComplete ? (
              <button
                onClick={handleButtonSet}
                className="flex shadow-sm rounded-lg px-4 py-2 ring-1 ring-slate-400 hover:bg-slate-100 transition-colors font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
                </svg>
                <span>Set budget</span>
              </button>
            ) : null}
          </>
        )}
      </div>
      {isBudgetComplete && (
        <>
          {budgetList.map((budget) => (
            <div key={budget.budgetId}>
              <div className="flex items-center justify-evenly">
                <div className="text-center">
                  <p className="text-xl">Amount:</p>
                  <div className="my-2 space-y-3">
                    <p>{expensesOne}$</p>
                    <p>{expensesTwo}$</p>
                    <p>{expensesThree}$</p>
                    <p>{expensesFour}$</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xl">Category:</p>
                  <div className="my-2 space-y-3">
                    <p>{budget.bOneCategory}</p>
                    <p>{budget.bTwoCategory}</p>
                    <p>{budget.bThreeCategory}</p>
                    <p>{budget.bFourCategory}</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="flex items-center my-5 float-right px-4 py-2 rounded-lg ring-1 ring-slate-200 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Outline"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
                  </svg>
                  <span>Expenses</span>
                </button>
              </div>
              <div className="w-full ring-2 ring-slate-200">
                <h1>Progress Bar Example</h1>
                <div
                  className="h-8 text-center text-white bg-gray-700 transition-all rounded-lg"
                  style={{ width: `${percent}%` }}
                >
                  {percent}%
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
