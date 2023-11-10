import React, { useEffect, useState } from "react";
import AddCategory from "../button/AddCategory";
import { useDispatch, useSelector } from "react-redux";
import {
  notification_budget,
} from "../../features/transactionSlice";
import SetButton from "../button/SetButton";
import BudgetContainer from "./BudgetContainer";

export default function BudgetManagement() {
  const dispatch = useDispatch();

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
    <div className="shadow-md mx-3 py-3  px-4 rounded-[30px] w-[580px] h-[calc(100vh-290px)] ring-2 ring-slate-200 font-outfit space-y-10">
      <div className="overflow-y-hidden h-[630px]">
        <div>
          <p className="text-2xl font-semibold pt-5">Budget Management</p>
        </div>
        <div className="my-5">
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
          <div className="overflow-y-auto h-[480px] px-3 my-5 rounded-2xl">
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
