import React, { useState } from "react";
import { useSelector } from "react-redux";
import DraftModal from "../../modal/DraftModal";
import DraftUpdate from "../../modal/DraftUpdate";

export default function Draft() {
  const draftList = useSelector((state) => state.transaction.draftList);

  const [openDraftModal, setOpenDraftModal] = useState(false);
  const [existingIncomeId, setExistingIncomeId] = useState(null);

  const handleOpenModalDraft = () => setOpenDraftModal(true);
  const handleCloseModalDraft = () => setOpenDraftModal(false);
  // h-[calc(100vh-290px)]
  return (
    <div className=" shadow-md mx-3 py-3  px-4 rounded-[30px] w-[580px] border border-slate-300 font-outfit space-y-10">
      <div>
        <p className="text-3xl font-semibold pt-5">Draft</p>
      </div>
      <div className=" h-[540px] overflow-y-auto">
        {draftList.map((draft) => (
          <div
            onClick={handleOpenModalDraft}
            key={draft.toDraftId}
            className="my-5 p-3 hover:bg-slate-100 rounded-3xl cursor-pointer transition-colors duration-100"
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
            <DraftModal isOpen={openDraftModal}>
              <DraftUpdate draft={draft} isClose={handleCloseModalDraft} />
            </DraftModal>
          </div>
        ))}
      </div>
    </div>
  );
}
