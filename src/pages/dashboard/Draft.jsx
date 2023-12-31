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
    <div className="font-outfit my-8 p-3 rounded-[36px] shadow-lg border border-slate-300 overflow-hidden h-[calc(100vh-250px)] w-full">
      <div>
        <p className="text-4xl font-semibold text-[#303030] p-4 max-mfd:text-center">
          Draft
        </p>
      </div>

      <div
        className={`${
          draftList.length === 0 ? "flex justify-center items-center" : ""
        } h-[calc(100vh-400px)]  relative overflow-y-auto rounded-[32px] m-5 p-5`}
      >
        {draftList.length === 0 ? (
          <>
            <p className="text-2xl">Empty Drafts</p>
          </>
        ) : (
          <>
            {draftList.map((draft) => (
              <div
                onClick={handleOpenModalDraft}
                key={draft.toDraftId}
                className="m-5 px-5 hover:bg-slate-100 first:rounded-t-[24px] border-b-2 border-b-slate-300 cursor-pointer transition-colors duration-100"
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
                  <div className="flex space-x-2">
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
                    <span className="font-semibold">Date:</span>{" "}
                    {draft.toDraftDate}
                  </p>
                </div>
                <DraftModal isOpen={openDraftModal}>
                  <DraftUpdate draft={draft} isClose={handleCloseModalDraft} />
                </DraftModal>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
