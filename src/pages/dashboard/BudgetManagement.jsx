import React, { useEffect, useState } from "react";
import AddCategory from "../button/AddCategory";
import { useDispatch, useSelector } from "react-redux";
import { add_expenses_budgetM } from "../../features/transactionSlice";

export default function BudgetManagement() {
  const dispatch = useDispatch();

  const budgetList = useSelector((state) => state.transaction.budgetList);
  const expenseLimit = useSelector((state) => state.transaction.expenseLimit);
  
  const expenseOneLimit = useSelector((state) => state.transaction.expenseOneLimit);
  const expenseTwoLimit = useSelector((state) => state.transaction.expenseTwoLimit);
  const expenseThreeLimit = useSelector((state) => state.transaction.expenseThreeLimit);


  const [isbuttonBudgetClick, setIsButtonBudgetClick] = useState(false);
  const [isBudgetComplete, setIsBudgetComplete] = useState(false);

  const handleButtonSet = () => setIsButtonBudgetClick(true);
  const handleBudgetCancel = () => setIsButtonBudgetClick(false);

  const [newExpensesOne, setNewExpensesOne] = useState(0);
  const [newExpensesTwo, setNewExpensesTwo] = useState(0);
  const [newExpensesThree, setNewExpensesThree] = useState(0);

  const [isButtonEditClick, setIsButtonEditClick] = useState(false);

  const handleEdit = (itemId) => {
    const budgetExistingId = budgetList.find(
      (budget) => budget.budgetId === itemId
    );
    if (budgetExistingId) {
      setNewExpensesOne(0);
      setNewExpensesTwo(0);
      setNewExpensesThree(0);
    }

    setIsButtonEditClick(true);
  };

  const handleSave = (itemId) => {
    dispatch(
      add_expenses_budgetM({
        bId: itemId,
        newEOneVal: newExpensesOne,
        newTwoVal: newExpensesTwo,
        newThreeVal: newExpensesThree,
      })
    );

    setIsButtonEditClick(false);
  };

  const handleCancel = () => {
    setIsButtonEditClick(false);

  }

  console.log(expenseLimit);

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
                  {!isButtonEditClick ? (
                    <>
                      <div className="my-2 space-y-3">
                        <p>{budget.expensesOne}$</p>
                        <p>{budget.expensesTwo}$</p>
                        <p>{budget.expensesThree}$</p>
                      </div>
                    </>
                  ) : (
                    <div className="my-2 space-y-3 flex flex-col">
                      <input
                        value={newExpensesOne}
                        onChange={(e) => setNewExpensesOne(e.target.value)}
                        className="w-20 rounded-lg ring-1 ring-slate-400 text-center"
                        type="number"
                      />
                      <input
                        value={newExpensesTwo}
                        onChange={(e) => setNewExpensesTwo(e.target.value)}
                        className="w-20 rounded-lg ring-1 ring-slate-400 text-center"
                        type="number"
                      />
                      <input
                        value={newExpensesThree}
                        onChange={(e) => setNewExpensesThree(e.target.value)}
                        className="w-20 rounded-lg ring-1 ring-slate-400 text-center"
                        type="number"
                      />
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-xl">Category:</p>
                  <div className="my-2 space-y-3">
                    <p>{budget.bOneCategory}</p>
                    <p>{budget.bTwoCategory}</p>
                    <p>{budget.bThreeCategory}</p>
                  </div>
                </div>
              </div>
              <div className="w-full ring-2 ring-slate-200">
                <p>{budget.bOneCategory}</p>
                <div
                  className="h-8 text-center text-white bg-gray-700 transition-all rounded-lg"
                  style={{
                    width: `${((budget.expensesOne / expenseOneLimit) * 100).toFixed(0)}%`,
                  }}
                >
                  {((budget.expensesOne / expenseOneLimit) * 100).toFixed(0)}%
                </div>
              </div>
              <div className="w-full ring-2 ring-slate-200">
                <p>{budget.bTwoCategory}</p>
                <div
                  className="h-8 text-center text-white bg-gray-700 transition-all rounded-lg"
                  style={{
                    width: `${((budget.expensesTwo / expenseTwoLimit) * 100).toFixed(0)}%`,
                  }}
                >
                  {((budget.expensesTwo / expenseTwoLimit) * 100).toFixed(0)}%
                </div>
              </div>
              <div className="w-full ring-2 ring-slate-200">
                <p>{budget.bThreeCategory}</p>
                <div
                  className="h-8 text-center text-white bg-gray-700 transition-all rounded-lg"
                  style={{
                    width: `${((budget.expensesThree / expenseThreeLimit) * 100).toFixed(0)}%`,
                  }}
                >
                  {((budget.expensesThree / expenseThreeLimit) * 100).toFixed(0)}%
                </div>
              </div>
              <div>
                {!isButtonEditClick ? (
                  <>
                    <button
                      onClick={() => handleEdit(budget.budgetId)}
                      className="flex items-center my-5 float-right px-4 py-2 rounded-lg ring-1 ring-slate-200 shadow-md"
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
                      <span>Expenses</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex justify-end items-end space-x-3">
                      <button
                      onClick={() => handleSave(budget.budgetId)}
                      className="flex items-center my-5  px-4 py-2 rounded-lg bg-[#303030] text-white shadow-md hover:bg-slate-700 transition-colors duration-100">
                        Save
                      </button>
                      <button
                      onClick={handleCancel}
                      className="flex items-center my-5 px-4 py-2 rounded-lg ring-1 ring-slate-200 shadow-md hover:bg-slate-100 transition-colors duration-100">
                        Cancel
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
