import React from "react";
import { useSelector } from "react-redux";
import ExpensesTransaction from "./ExpensesTransaction";
import BMDetailsSaved from "../budget-details/BMDetailsSaved";
import TopCategory from "./TopCategory";

export default function Expenses() {
  const totalExpenses = useSelector((state) => state.transaction.totalExpenses);
  const transaction = useSelector((state) => state.transaction.transactionList);

  const expensesList = transaction.filter(
    (transac) => transac.transactionType === "Expenses"
  );

  return (
    <div className="font-outfit my-7">
      <div>
        <p className="text-4xl font-semibold ">Expenses</p>
      </div>
      <div className="flex">
        <div className="flex flex-col my-4 space-y-8">
          <div className="space-y-5">
            <div>
              <div className="transition-all shadow-md p-3 rounded-2xl h-[300px] w-[550px] border border-slate-200 ">
                <div>
                  <p className="text-4xl font-semibold p-7">Total Expenses: </p>
                </div>
                <div className="">
                  <p className="text-[55px] text-red-400 text-center font-semibold">
                    {totalExpenses}$
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-slate-200 rounded-2xl p-5 shadow-md  h-[calc(100vh-580px)]">
            <div>
              <p className="text-xl font-semibold">Recent Transactions</p>
            </div>
            <div className="h-[290px] overflow-y-scroll my-3 px-4 flex flex-col-reverse">
              {expensesList.map((transac) => (
                <ExpensesTransaction
                  transac={transac}
                  key={transac.transacId}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <TopCategory />
        </div>
        <div className="py-4 px-5">
          <BMDetailsSaved />
        </div>
      </div>
    </div>
  );
}
