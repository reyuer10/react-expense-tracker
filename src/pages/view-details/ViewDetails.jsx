import React, { useState } from "react";
import { buttonOption } from "./ButtonOption";
import BinExpensesModal from "../../modal/BinExpensesModal";
import BinModal from "./binModal";
import Details from "./Details";
import ButtonTransacOption from "./ButtonTransacOption";
import EditTransaction from "./EditTransaction";

export default function ViewDetails({ transacDetail, setTransacDetail }) {
  const [isOptionButtonClick, setIsOptionButtonClick] = useState(null);
  const [binOpenModal, setBinOpenModal] = useState(false);
  const [isTransacEdit, setIsTransacEdit] = useState(false);
  const [getValue, setGetValue] = useState(null);

  const handleCloseTEdit = () => {
    setIsTransacEdit(false);
    setIsOptionButtonClick(false);
  };

  const handleOpenModal = () => {
    setIsOptionButtonClick((prevState) => !prevState);
    setBinOpenModal(true);
  };
  const handleCloseModal = () => setBinOpenModal(false);

  if (transacDetail === null) {
    return (
      <div className="text-[#303030] text-xl border border-slate-300 font-outfit font-normal shadow-md p-8 rounded-[36px]">
        <div>
          <p className="font-semibold text-2xl">View details here </p>
        </div>
        <div className="flex items-center text-slate-500 flex-col m-10">
          <svg
            className="fill-current m-10"
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="54"
            height="54"
          >
            <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
            <path d="M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z" />
            <rect x="11" y="17" width="2" height="2" rx="1" />
          </svg>
          <p className="text-[32px]">Item not found</p>
        </div>
      </div>
    );
  }

  const handleEditTransaction = () => {
    setGetValue(transacDetail.transacId);
    setIsTransacEdit(true);
  };

  const handleButtonClick = (buttonId) => {
    if (buttonId === 1) {
      handleEditTransaction(buttonId);
    } else if (buttonId === 2) {
      handleOpenModal();
    }

    console.log(isTransacEdit);
  };

  const handleOptionButtonClick = () =>
    setIsOptionButtonClick((prevState) => !prevState);

  return (
    <div className="relative flex flex-col justify-center items-center font-outfit shadow-md rounded-xl p-9 my-3 space-y-12 text-[#303030]">
      <div className="flex items-center">
        <div>
          <p className="text-3xl font-medium">Transaction Details</p>
        </div>
        {!isTransacEdit && (
          <>
            <div>
              <div>
                <button
                  onClick={handleOptionButtonClick}
                  className="absolute right-0 mx-10 text-[#303030] hover:text-slate-50"
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
              </div>
              {isOptionButtonClick && (
                <>
                  <div
                    onClick={() => setIsOptionButtonClick(false)}
                    className="inset-1 fixed"
                  />
                  <div
                    onClick={(e) => e.isPropagationStopped()}
                    className="space-y-2 absolute right-0 mx-10 my-5 shadow-md rounded-2xl flex flex-col p-5 ring-1 ring-slate-200 w-[250px] z-10 bg-white items-baseline"
                  >
                    {buttonOption.map((button) => (
                      <ButtonTransacOption
                        handleButtonClick={handleButtonClick}
                        button={button}
                        key={button.id}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div className="text-xl w-[700px]">
        {isTransacEdit ? (
          <>
            <EditTransaction
              onCancel={handleCloseTEdit}
              isTransacEdit={isTransacEdit}
              getValue={getValue}
              transacDetail={transacDetail}
              setTransacDetail={setTransacDetail}
            />
          </>
        ) : (
          <>
            <Details transacDetail={transacDetail} />
          </>
        )}
      </div>
      <BinExpensesModal closeModal={handleCloseModal} isOpen={binOpenModal}>
        <BinModal
          setTransacDetail={setTransacDetail}
          transacId={transacDetail.transacId}
          closeModal={handleCloseModal}
        />
      </BinExpensesModal>
    </div>
  );
}
