import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Balance() {
  const balance = useSelector((state) => state.transaction.balance);
  return (
    <div className="max-md:flex max-md:flex-col shadow-md p-5 space-y-16 max-md:space-y-0 h-[300px] max-md:h-[150px] max-md:w-[150px] max-md:rounded-[24px] border border-gray-200 rounded-[36px]">
      <div>
        <p className="text-4xl font-semibold max-md:text-2xl">Balance:</p>
      </div>
      <div className="max-md:m-auto">
        <p className="max-md:flex max-md:space-x-1 text-[48px] max-md:mx-0 max-md:text-2xl font-semibold text-slate-700  text-center rounded-[24px] mx-5 p-6">
          <span>{balance}</span>
          <span> ₱</span>
        </p>
      </div>
    </div>
  );
}

// text-[#3e9c35]
5;
