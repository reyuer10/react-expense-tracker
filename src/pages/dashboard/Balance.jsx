import React, { useState } from "react";

export default function Balance() {
  const [balance, setBalance] = useState(1000);
  return (
    <div className="shadow-md p-3 rounded-xl h-[300px] w-[550px] ring-2 ring-slate-300">
      <div>
        <p className="text-4xl font-semibold p-8">Balance: </p>
        <p className="text-[55px] font-semibold text-[#3e9c35] text-center">{balance}$</p>
      </div>
      <div></div>
    </div>
  );
}
