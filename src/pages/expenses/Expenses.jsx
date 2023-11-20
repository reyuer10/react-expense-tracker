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
        <p className="text-4xl font-semibold max-md:text-center">Expenses</p>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
        <div
          className="transition-all md:shadow-md p-3 md:rounded-[36px] md:border md:border-slate-200 md:h-[300px] 
max-md:w-full
max-md:rounded-[24px]
max-md:flex
"
        >
          <div>
            <p className="md:text-4xl font-semibold md:p-7 max-md:text-2xl">
              Total Expenses:{" "}
            </p>
          </div>
          <div>
            <p className="md:text-[55px] text-center font-semibold max-md:text-2xl max-md:mx-3">
              {totalExpenses} ₱
            </p>
          </div>
        </div>
        <div>
          <TopCategory />
        </div>
        <div className="row-span-2 max-md:hidden">
          <BMDetailsSaved />
        </div>
        <div className="border border-slate-200 rounded-[36px] p-5 shadow-md h-[300px]">
          <div>
            <p className="text-2xl font-semibold px-3 max-md:text-xl">Recent Transactions</p>
          </div>
          <div className="h-[220px] overflow-y-scroll my-3 px-4 flex flex-col">
            {expensesList.map((transac) => (
              <ExpensesTransaction transac={transac} key={transac.transacId} />
            ))}
          </div>
        </div>
        <div className="max-md:hidden">
          <NoteExpenses />
        </div>
      </div>
    </div>
  );
}
