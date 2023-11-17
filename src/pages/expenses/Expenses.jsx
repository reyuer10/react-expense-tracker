import React from "react";
import { useSelector } from "react-redux";
import ExpensesTransaction from "./ExpensesTransaction";
import BMDetailsSaved from "../budget-details/BMDetailsSaved";
import TopCategory from "./TopCategory";
import NoteExpenses from "./NoteExpenses";

export default function Expenses() {
  const totalExpenses = useSelector((state) => state.transaction.totalExpenses);
  const transaction = useSelector((state) => state.transaction.transactionList);

  const expensesList = transaction.filter(
    (transac) => transac.transactionType === "Expenses"
  );

  return (
    <div className="font-outfit text-slate-700">
      <div className="my-4 mx-5">
        <p className="text-4xl font-semibold">Expenses</p>
      </div>
      <div className="grid grid-cols-3 gap-x-10">
        <div className="transition-all shadow-md p-3 rounded-[36px] border border-slate-200 h-[300px] ">
          <div>
            <p className="text-4xl font-semibold p-7">Total Expenses: </p>
          </div>
          <div>
            <p className="text-[55px] text-center font-semibold">
              {totalExpenses} ₱
            </p>
          </div>
        </div>
        <div>
          <TopCategory />
        </div>
        <div className="row-span-2">
          <BMDetailsSaved />
        </div>
        <div className="border border-slate-200 rounded-[36px] p-5 shadow-md h-[300px] w-[550px]">
          <div>
            <p className="text-2xl font-semibold px-3">Recent Transactions</p>
          </div>
          <div className="h-[220px] overflow-y-scroll my-3 px-4 flex flex-col-reverse">
            {expensesList.map((transac) => (
              <ExpensesTransaction transac={transac} key={transac.transacId} />
            ))}
          </div>
        </div>
        <div>
          <NoteExpenses />
        </div>
      </div>
    </div>
  );
}
