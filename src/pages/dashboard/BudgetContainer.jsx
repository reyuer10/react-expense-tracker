import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  add_expenses_budgetM,
  remove_expenses_budget,
  save_details_budget,
} from "../../features/transactionSlice";
import ButtonAddExpenses from "../button-budget/buttonAddExpenses";
import RemoveDetails from "../button-budget/RemoveDetails";
import SaveDetails from "../button-budget/SaveDetails";

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
  const [isRemoveButtonClick, setIsRemoveButtonClick] = useState(false);
  const [limitExceedError, setLimitExceedError] = useState(null);
  const [error, setError] = useState(null);
  // const [isbuttonSaveClick, setIsButtonSaveClick] = useState(false);

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
  const handleSaveDetails = (detailsId) => {
    dispatch(
      save_details_budget({
        cMId: detailsId,
      })
    );
  };

  const handleCancelRemove = () => {
    setIsRemoveButtonClick(false);
  };

  const handleRemoveButton = () => {
    setIsRemoveButtonClick(true);
  };
  const currentSpent = budget.budgetAmount - budget.budgetExpenses;

console.log(currentSpent)
  const handleSave = (itemId) => {
    if (newExpensesOne > budget.budgetAmount) {
      setLimitExceedError("Amount has exceed the budget limit.");
      setError(true)
      return;
    }
    else if(newExpensesOne > currentSpent){
      setLimitExceedError("Amount has exceed the budget limit.");
      setError(true)
      return;
    }
    else{
      setError(null)
    }

    dispatch(
      add_expenses_budgetM({
        bId: itemId,
        newEOneVal: newExpensesOne,
      })
    );
    setIsButtonEditClick(false);
  };

  const handleRemoveBudget = () => {
    dispatch(
      remove_expenses_budget({
        bMId: budget.budgetId,
      })
    );
  };

  return (
    <>
      <div
        className={`${
          isRemoveButtonClick ? "bg-[#FFFFFF81]" : "bg-white"
        } ring-1 p-3 my-3  shadow-md rounded-2xl ring-slate-300`}
      >
        {isRemoveButtonClick ? (
          <>
            <div className="flex justify-center items-center h-[196px]">
              <div className="flex space-x-3">
                <button
                  className="px-4 py-2 rounded-lg shadow-md border border-slate-200 bg-[#303030] text-white hover:bg-slate-700 transition-colors duration-100"
                  onClick={handleRemoveBudget}
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 rounded-lg shadow-md border border-slate-200 hover:bg-slate-50 transition-colors duration-100"
                  onClick={handleCancelRemove}
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-evenly relative">
              <div className="absolute right-1 top-0">
                <RemoveDetails confirm={handleRemoveButton} />
              </div>
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
              {/* limitExceedError */}
              {isButtonEditClick && isBudgetI === budget.budgetId ? (
                <>
                  <div className="flex justify-between items-center">
                    <div className="mx-5 text-red-400">
                      {error && <p>{limitExceedError}</p>}
                    </div>
                    <div className="space-x-3 flex">
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
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center space-x-3 px-5">
                    <div className="space-x-3 flex">
                      <SaveDetails
                        budget={budget}
                        // isbuttonSaveClick={isbuttonSaveClick}
                        handleSaveDetails={handleSaveDetails}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div>
                        <ButtonAddExpenses
                          handleEdit={handleEdit}
                          budget={budget}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
