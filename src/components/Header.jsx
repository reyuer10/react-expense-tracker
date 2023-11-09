import React from "react";
import Notifcation from "./Notifcation";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-4xl font-outfit font-semibold m-10 text-[#303030]">
        Expense Tracker
      </div>
      <div>
        <Notifcation />
      </div>
    </div>
  );
}
