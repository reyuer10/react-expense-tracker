import React from "react";
import Balance from "./Balance";
import RecentTransaction from "./RecentTransaction";
import TotalExpenses from "./TotalExpenses";
import TotalIncome from "./TotalIncome";

export default function DashBoard() {
  return (
    <div className="text-[#303030] font-outfit">
      <div>
        <p className="text-2xl font-semibold">DashBoard</p>
      </div>
      <div className="flex flex-grow flex-wrap basis-30">
        <div>
          <Balance />
        </div>
        <div>
          <TotalIncome />
        </div>
        <div>
          <RecentTransaction />
        </div>
        <div>
          <TotalExpenses />
        </div>
      </div>
    </div>
  );
}
