import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { add_expenses_budgetM, notification_budget } from "../../features/transactionSlice";

export default function BudgetContainer({
  newExpensesOne,
  setNewExpensesOne,
  isButtonEditClick,
  setIsButtonEditClick,
  handleEdit,
  handleCancel,
  isBudgetI,
  budget,
}) {
  const dispatch = useDispatch();

  // const percent =
  // (budget.budgetExpenses / budget.budgetAmount) * budget.budgetPercentage;

  // const message = `You have spent 80% of your budget for ${
  //   budget.budgetCategory
  // }. You have $${
  //   budget.budgetAmount - budget.budgetExpenses
  // } left in your budget.`;

      
  // if (percent > 80) {
  //   console.log("True")
  // }else{
  //   console.log("False")
  // }

  // setIsButtonEditClick(false);


  const handleSave = (itemId) => {
    dispatch(
      add_expenses_budgetM({
        bId: itemId,
        newEOneVal: newExpensesOne,
      })
    );

  };



  return (
    <div className="ring-1 p-3 my-3 ring-slate-400 shadow-md rounded-2xl">
      <div className="flex items-center justify-evenly">
        <div className="text-center my-2">
          <p className="text-xl">Amount spent:</p>
          {isButtonEditClick && isBudgetI === budget.budgetId ? (
            <>
              <div className="my-2 space-y-3 flex flex-col">
                <input
                  value={newExpensesOne}
                  onChange={(e) => setNewExpensesOne(e.target.value)}
                  className="w-20 rounded-lg ring-1 ring-slate-400 text-center"
                  type="number"
                />
              </div>
            </>
          ) : (
            <div className="my-2 space-y-3">
              <p>{budget.budgetExpenses}$</p>
            </div>
          )}
        </div>
        <div className="text-center">
          <p className="text-xl">Budget limit:</p>
          <div className="my-2 space-y-3">
            <p>{budget.budgetAmount}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl">Category:</p>
          <div className="my-2 space-y-3">
            <p>{budget.budgetCategory}</p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div>
          <p>{budget.budgetCategory}</p>
          <div className="flex space-x-2">
            <div className="ring-1 w-full ring-slate-300 rounded-full">
              <div
                className={`${
                  (
                    (budget.budgetExpenses / budget.budgetAmount) *
                    budget.budgetPercentage
                  ).toFixed(0) <= 50
                    ? "bg-green-400"
                    : (
                        (budget.budgetExpenses / budget.budgetAmount) *
                        budget.budgetPercentage
                      ).toFixed(0) <= 75
                    ? "bg-yellow-300"
                    : "bg-red-400"
                } h-6 text-center text-white  transition-all rounded-full `}
                style={{
                  width: `${(
                    (budget.budgetExpenses / budget.budgetAmount) *
                    budget.budgetPercentage
                  ).toFixed(0)}%`,
                }}
              ></div>
            </div>
            <p>
              {(
                (budget.budgetExpenses / budget.budgetAmount) *
                budget.budgetPercentage
              ).toFixed(0)}
              %
            </p>
          </div>
        </div>
      </div>
      <div>
        {isButtonEditClick && isBudgetI === budget.budgetId ? (
          <>
            <div className="flex justify-end items-end space-x-3">
              <button
                onClick={() => handleSave(budget.budgetId)}
                className=" items-center  my-3  px-4 py-2 rounded-lg bg-[#303030] text-white shadow-md hover:bg-slate-700 transition-colors duration-100"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center  my-3 px-4 py-2 rounded-lg ring-1 ring-slate-200 shadow-md hover:bg-slate-100 transition-colors duration-100"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-end items-end space-x-3">
              <button
                onClick={() => handleEdit(budget.budgetId)}
                className="flex items-center my-3  px-4 py-2 rounded-lg ring-1 ring-slate-200 shadow-md"
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
            </div>
          </>
        )}
      </div>
    </div>
  );
}
