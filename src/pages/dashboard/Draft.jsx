import React, { useState } from "react";
import { useSelector } from "react-redux";
import DraftModal from "../../modal/DraftModal";

export default function Draft() {
  const draftList = useSelector((state) => state.transaction.draftList);

  const [openDraftModal, setOpenDraftModal] = useState(false);
  const [existingIncomeId, setExistingIncomeId] = useState(null);

  

  return (
    <div className="shadow-md text-[#303030] font-outfit px-7 rounded-[30px] w-[580px] h-[calc(100vh-290px)] ring-2 ring-slate-200">
      <div>
        <p className="text-3xl font-semibold py-8">Draft</p>
      </div>
      <div>
        {draftList.map((draft) => (
          <div
            key={draft.toDraftId}
            className="border-b-2 border-b-[#303030] my-5 p-3 hover:bg-slate-50 cursor-pointer transition-colors duration-100"
          >
            <div className="flex justify-between">
              <p>
                <span className="font-semibold">Category: </span>
                {draft.toDraftCategory}
              </p>
              <p>
                <span className="font-semibold">Amount:</span>{" "}
                {draft.toDraftAmount}$
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p>
                <span className="font-semibold">Title:</span>{" "}
                {draft.toDraftTitle}
              </p>
              <div>
                <span className="font-semibold">Transaction Type:</span>
                <p
                  className={`${
                    draft.transactionType === "Income"
                      ? "bg-green-400"
                      : "bg-red-400"
                  } w-fit px-4 py-1 rounded-lg text-white flex justify-center`}
                >
                  {draft.transactionType}
                </p>
              </div>
            </div>
            <div>
              <p>
                <span className="font-semibold">Date:</span> {draft.toDraftDate}
              </p>
              <p>
                <span className="font-semibold">
                  Desription: {draft.toDraftDescription}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {openDraftModal && <DraftModal></DraftModal>}
    </div>
  );
}
