import React, { useState } from "react";
import AddCategory from "../button/AddCategory";
import { useSelector } from "react-redux";
import SetButton from "../button/SetButton";
import BudgetContainer from "./BudgetContainer";

export default function BudgetManagement() {

  const budgetList = useSelector((state) => state.transaction.budgetList);
  const expensesLimit = useSelector((state) => state.transaction.expensesLimit);

  const [isbuttonBudgetClick, setIsButtonBudgetClick] = useState(false);
  const [isBudgetComplete, setIsBudgetComplete] = useState(false);

  const handleButtonSet = () => setIsButtonBudgetClick(true);
  const handleBudgetCancel = () => setIsButtonBudgetClick(false);

  const [newExpensesOne, setNewExpensesOne] = useState(0);

  const [isButtonEditClick, setIsButtonEditClick] = useState(false);
  const [isBudgetId, setIsBudgetId] = useState(null);
  
  const handleEdit = (itemId) => {
    const budgetExistingId = budgetList.find(
      (budget) => budget.budgetId === itemId
    );
    if (budgetExistingId) {
      setIsBudgetId(itemId);
      setNewExpensesOne(0);
    }

    setIsButtonEditClick(true);
  };

  const handleCancel = () => setIsButtonEditClick(false);

  return (
    <div className="shadow-md p-8 rounded-[36px] h-[620px] border border-slate-300 font-outfit space-y-10">
      <div className="overflow-y-hidden ">
        <div>
          <p className="text-2xl font-semibold">Budget Management</p>
        </div>
        <div className="py-2 overflow-y-auto h-[480px]">
          {isbuttonBudgetClick ? (
            <>
              <div>
                <AddCategory
                  setIsBudgetComplete={setIsBudgetComplete}
                  setIsButtonBudgetClick={setIsButtonBudgetClick}
                  handleBudgetCancel={handleBudgetCancel}
                />
              </div>
            </>
          ) : (
            <>
              <div className="px-3">
                <SetButton
                  handleButtonSet={handleButtonSet}
                  isBudgetComplete={isBudgetComplete}
                />
              </div>
            </>
          )}
          <div className="px-3 rounded-2xl">
            {budgetList.map((budget) => (
              
              <BudgetContainer
                key={budget.budgetId}
                budget={budget}
                isBudgetI={isBudgetId}
                newExpensesOne={newExpensesOne}
                setNewExpensesOne={setNewExpensesOne}
                expensesLimit={expensesLimit}
                isButtonEditClick={isButtonEditClick}
                setIsButtonEditClick={setIsButtonEditClick}
                handleEdit={handleEdit}
                handleCancel={handleCancel}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
