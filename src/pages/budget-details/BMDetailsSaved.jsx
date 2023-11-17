import React from "react";
import { useSelector } from "react-redux";
import DetailsSaved from "./DetailsSaved";

export default function BMDetailsSaved() {
  const detailList = useSelector((state) => state.transaction.budgetDetailList);
  console.log(detailList);
  return (
    <div className="font-outfit border border-slate-200 shadow-md rounded-[36px] h-[620px] p-5">
      <div>
        <p className="text-2xl font-semibold px-3">Budget Management</p>
      </div>
      <div className="flex justify-between p-3">
        <p className="text-xl ">Saved Details</p>
        {detailList.map((detail) => (
          <p key={detail.budgetId} className="text-green-400">
            {detail.isUserSeen === false ? "New added" : ""}
          </p>
        ))}
      </div>
      <div className="space-y-3 overflow-y-auto h-[480px] px-5 py-2">
        {detailList.map((detail) => (
          <DetailsSaved key={detail.budgetId} detail={detail} />
        ))}
      </div>
    </div>
  );
}