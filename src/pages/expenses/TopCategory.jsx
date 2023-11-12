import React from "react";
import { useSelector } from "react-redux";

export default function TopCategory() {

  // filtered category one by one
  // add all their amount

  const transactionList = useSelector(
    (state) => state.transaction.transactionList
  );

  const budgetDetail = useSelector(
    (state) => state.transaction.budgetDetailList
  );

  const expenses = transactionList.filter(
    (transac) => transac.transactionType === "Expenses"
  );

  const allExpensesList = [...expenses, ...budgetDetail];
  const expensesAmount = expenses.map((exp) => exp.transacAmount);

  // console.log(allExpensesList);
  return (
    <div className="shadow-md p-5 rounded-2xl h-[300px] w-[550px] ring-2 ring-slate-200 m-5">
      <div>
        <p className="text-2xl font-semibold">Top Category Expenses</p>
      </div>
      <div>
        <p>{expensesAmount}</p>
      </div>
    </div>
  );
}
