import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryIcons } from "../svg_category/svgCategory";
import { delete_bin, restore_bin } from "../features/transactionSlice";
import DeleteModal from "../modal/DeleteModal";
import DeleteConfirmation from "../modal/DeleteConfirmation";

export default function Bin() {
  const dispatch = useDispatch();
  const bin = useSelector((state) => state.transaction.bin);
  const [selectOption, setSelectOption] = useState(null);
  const [exisitngId, setExistingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConfirmation = () => setIsModalOpen(true);
  const handleCloseConfirmation = () => setIsModalOpen(false);

  const handleOpenOption = (itemId) => {
    const binExistingId = bin.find((b) => b.transacId === itemId);
    console.log(binExistingId);
    if (binExistingId) {
      setExistingId(itemId);
      setSelectOption((prevState) => !prevState);
    }
  };

  const handleRestore = (restoreId) => {
    dispatch(
      restore_bin({
        restoreBinId: restoreId,
      })
    );
  };

  return (
    <div className="font-outfit my-8 p-3 rounded-[36px] shadow-lg border border-slate-300 overflow-y-auto h-[calc(100vh-250px)] w-full">
      <div>
        <p className="text-4xl font-semibold text-[#303030] p-4 max-md:text-center">
          Bin
        </p>
      </div>
      <div
        className={`${
          bin.length === 0
            ? "grid place-items-center h-[calc(100vh-400px)]"
            : "grid grid-cols-3  max-2xl:grid-cols-2 max-xl:grid-cols-1 gap-5 overflow-y-auto rounded-3xl p-5"
        }  `}
      >
        {bin.length === 0 ? (
          <>
            <p className="text-2xl">Empty Bins</p>
          </>
        ) : (
          <>
            {bin.map((b) => (
              <div
                key={b.transacId}
                className="border p-5 rounded-3xl  max-2xl:h-full shadow-md flex flex-col"
              >
                <div className="relative">
                  <button
                    onClick={() => handleOpenOption(b.transacId)}
                    className="float-right px-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                    >
                      <circle cx="2" cy="12" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="22" cy="12" r="2" />
                    </svg>
                  </button>
                  {selectOption && exisitngId === b.transacId && (
                    <>
                      <div
                        onClick={() => setSelectOption(false)}
                        className="inset-1 fixed "
                      />
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className=" absolute bg-white right-0 my-6 px-4 py-3 flex flex-col rounded-xl border shadow-md items-start"
                      >
                        <button
                          className="hover:text-slate-500 w-full text-left rounded-lg px-3"
                          onClick={() => handleRestore(b.transacId)}
                        >
                          Restore
                        </button>
                        <button
                          className="hover:text-slate-500 transition-colors w-full text-left rounded-lg px-3"
                          onClick={handleOpenConfirmation}
                        >
                          Delete permanently
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex space-x-1">
                  <p className="font-semibold"> Category: </p>
                  {categoryIcons[b.transacCategory]}
                  <span>{b.transacCategory}</span>
                </div>
                <div className="flex justify-between max-2xl:flex-col">
                  <div>
                    <label className="font-semibold">Title: </label>
                    <span>{b.transacTitle}</span>
                  </div>
                  <div className="flex space-x-2">
                    <p className="font-semibold">Amount:</p>
                    <span> {b.transacAmount}$</span>
                  </div>
                </div>
                <div className="flex justify-between max-2xl:flex-col">
                  <div className="flex space-x-2">
                    <p className="font-semibold">Date: </p>
                    <span>{b.transacDate}</span>
                  </div>
                  <div>
                    <label className="font-semibold">Transaction type: </label>
                    <span
                      className={`${
                        b.transactionType === "Income"
                          ? "bg-green-400"
                          : "bg-red-400"
                      } text-white px-4 py-1 rounded-lg`}
                    >
                      {b.transactionType}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="font-semibold">Description: </label>
                  <span>{b.transacDescription}</span>
                </div>
                <DeleteModal
                  closeModal={handleCloseConfirmation}
                  isOpen={isModalOpen}
                >
                  <DeleteConfirmation
                    binId={b.transacId}
                    closeModal={handleCloseConfirmation}
                  />
                </DeleteModal>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
