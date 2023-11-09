import React from "react";
import { useSelector } from "react-redux";
import IncomeTransaction from "./IncomeTransaction";

export default function Income() {
  const totalIncome = useSelector((state) => state.transaction.totalIncome);

  const transaction = useSelector((state) => state.transaction.transactionList);

  const incomeList = transaction.filter(
    (transac) => transac.transactionType === "Income"
  );
  console.log(incomeList);

  return (
    <div className="font-outfit">
      <div className="space-y-5 my-7 h-1/2">
        <div>
          <p className="text-4xl font-semibold">Income</p>
        </div>
        <div>
          <div className="transition-all shadow-md p-3 rounded-[40px] h-[300px] w-[550px] ring-2 ring-slate-200 ">
            <div>
              <p className="text-4xl font-semibold p-7">Total Income: </p>
            </div>
            <div className="">
              <p className="text-[55px] text-green-400 text-center font-semibold">
                {totalIncome}$
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ring-2 ring-slate-200 rounded-3xl p-5 shadow-md  h-[calc(100vh-580px)]">
        <div>
          <p className="text-xl">Income Transactions</p>
        </div>
        <div className="h-[290px] overflow-y-auto my-3 px-4">
          {incomeList.map((transac) => (
            <IncomeTransaction transac={transac} key={transac.transacId} />
          ))}
        </div>
      </div>
    </div>
  );
}
