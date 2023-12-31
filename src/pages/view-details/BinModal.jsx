import React from "react";
import { move_to_bin } from "../../features/transactionSlice";
import { useDispatch, useSelector } from "react-redux";

export default function BinModal({ closeModal, backButton, transacDetail }) {
  const dispatch = useDispatch();
  const handleMovetoBin = (itemId) => {
    dispatch(
      move_to_bin({
        detailsExistingId: itemId,
      })
    );
    backButton();
    closeModal();
  };

  console.log(transacDetail)
  return (
    <>
      <div className="flex flex-col font-outfit">
        <div className="text-right">
          <button onClick={closeModal}>
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
            </svg>
          </button>
        </div>

        <div>
          <p className="px-6 py-7">
            Are you sure you want to move this transaction to the bin?
          </p>
        </div>
        <div className="space-x-3 text-center">
          <button
            onClick={() => handleMovetoBin(transacDetail.transacId)}
            className="font-bold px-6 py-2 rounded-xl bg-black text-white hover:bg-slate-700 transition-colors duration-100"
          >
            Yes
          </button>
          <button
            onClick={closeModal}
            className="font-bold border-2 px-6 py-2 rounded-xl border-black hover:bg-slate-100 transition-colors duration-100"
          >
            No
          </button>
        </div>
      </div>
    </>
  );
}
