import React from "react";
import { useSelector } from "react-redux";

export default function Transactions() {
  const transaction = useSelector((state) => state.transaction.transactionList);

  return (
    <div className="font-outfit h-full w-[500px] p-3 rounded-3xl shadow-md ring-1 ring-slate-200">
      <div>
        <p className="text-2xl font-medium text-[#303030]">Transactions</p>
      </div>
      <div>
        {transaction.map((transac) => (
          <div key={transac.transacId}>
            <div className="flex items-center">
              <div>
                <p>{transac.transacCategory}</p>
                <p>{transac.transacDate}</p>
              </div>
              <p>{transac.transacAmount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
