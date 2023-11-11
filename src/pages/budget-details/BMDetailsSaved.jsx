import React from "react";
import { useSelector } from "react-redux";
import DetailsSaved from "./DetailsSaved";

export default function BMDetailsSaved() {
  const detailList = useSelector((state) => state.transaction.budgetDetailList);
  console.log(detailList)
  return (
    <div className="font-outfit border border-slate-200 shadow-md p-5 rounded-2xl">
      <div>
        <p className="text-2xl font-semibold">Budget Management</p>
      </div>
      <div>
        {detailList.map((detail) => (
          <DetailsSaved key={detail.budgetId} detail={detail} />
        ))}
      </div>
    </div>
  );
}
