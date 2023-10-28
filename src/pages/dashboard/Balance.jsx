import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Balance() {
  const balance = useSelector((state) => state.transaction.balance);
  return (
    <div className="shadow-md p-3 rounded-xl h-[300px] w-[550px] ring-2 ring-slate-200">
      <div>
        <p className="text-4xl font-semibold p-8">Balance: </p>
        <p className="text-[55px] font-semibold text-[#3e9c35] text-center">
          {balance}$
        </p>
      </div>
    </div>
  );
}
