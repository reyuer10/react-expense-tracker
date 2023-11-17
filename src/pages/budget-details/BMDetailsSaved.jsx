import React from "react";
import { useSelector } from "react-redux";
import DetailsSaved from "./DetailsSaved";

export default function BMDetailsSaved() {
  const detailList = useSelector((state) => state.transaction.budgetDetailList);
  console.log(detailList);
  return (
    <div className="font-outfit border border-slate-200 shadow-md rounded-[36px] h-[700px] p-5">
      <div>
        <p className="text-2xl font-semibold px-3">Budget Management</p>
      </div>
      <div>
        <p className="text-xl p-3">Saved Details</p>
      </div>
      <div className="space-y-3 overflow-y-auto  h-[550px] px-3">
        {detailList.map((detail) => (
          <DetailsSaved key={detail.budgetId} detail={detail} />
        ))}
      </div>
    </div>
  );
}