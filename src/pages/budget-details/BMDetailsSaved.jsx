import React from "react";
import { useSelector } from "react-redux";
import DetailsSaved from "./DetailsSaved";

export default function BMDetailsSaved() {
  const detailList = useSelector((state) => state.transaction.budgetDetailList);
  console.log(detailList)
  return (
    <div className="font-outfit border border-slate-200 shadow-md p-5 rounded-2xl space-y-2">
      <div>
        <p className="text-2xl font-semibold">Budget Management</p>
      </div>
      <div>
        <p className="text-xl">Saved Details</p>
      </div>
      <div className="space-y-3 w-[550px] h-[calc(100vh-365px)]">
        {detailList.map((detail) => (
          <DetailsSaved key={detail.budgetId} detail={detail} />
        ))}
      </div>
    </div>
  );
}
