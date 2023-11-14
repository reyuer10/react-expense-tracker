import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Balance() {
  const balance = useSelector((state) => state.transaction.balance);
  return (
    <div className="shadow-md p-5 space-y-16 h-[300px] border border-gray-200 rounded-[36px]">
      <div>
        <p className="text-4xl font-semibold">Balance:</p>
      </div>
      <div>
        <p className="text-[48px] font-semibold text-slate-700  text-center rounded-[24px] mx-5 p-6">
          {balance} ₱
        </p>
      </div>
    </div>
  );
}

// text-[#3e9c35]
