import React from "react";
import { useSelector } from "react-redux";

export default function Draft() {
  const draftList = useSelector((state) => state.transaction.draftList)
  return (
    <div className="shadow-md text-[#303030] font-outfit mx-3 p-3 rounded-[40px] w-[580px] h-[calc(100vh-290px)] ring-2 ring-slate-200">
      <div>
        <p className="text-3xl font-semibold">Draft</p>
      </div>
      <div>
        {draftList.map((draft) => (
          <div key={draft.toDraftId}>
            <p>{draft.toDraftCategory}</p>
            <p>{draft.toDraftTitle}</p>
            <p>{draft.toDraftAmount}</p>
            <p>{draft.toDraftDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}