import React, { useState } from "react";
import { buttonOption } from "./ButtonOption";
import BinExpensesModal from "../../modal/BinExpensesModal";
import BinModal from "./binModal";
import Details from "./Details";
import ButtonTransacOption from "./ButtonTransacOption";
import EditTransaction from "./EditTransaction";

export default function ViewDetails({
  transacDetail,
  setTransacDetail,
  backButton,
}) {
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
    <div className=" font-outfit rounded-xl p-9 my-3 space-y-12 text-[#303030]">
      <div className="flex flex-col space-y-5">
        <div className="flex items-center space-x-10">
          <button onClick={backButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Bold"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M17.921,1.505a1.5,1.5,0,0,1-.44,1.06L9.809,10.237a2.5,2.5,0,0,0,0,3.536l7.662,7.662a1.5,1.5,0,0,1-2.121,2.121L7.688,15.9a5.506,5.506,0,0,1,0-7.779L15.36.444a1.5,1.5,0,0,1,2.561,1.061Z" />
            </svg>
          </button>
          <button
            onClick={handleOptionButtonClick}
            className="text-[#303030] hover:text-slate-50"
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
        {!isTransacEdit && (
          <>
            <div>
              {isOptionButtonClick && (
                <>
                  <div
                    onClick={() => setIsOptionButtonClick(false)}
                    className="inset-1 fixed"
                  />
                  <div
                    onClick={(e) => e.isPropagationStopped()}
                    className="fixed bg-white border border-slate-300 shadow-lg p-4 rounded-3xl mx-14 max-md:top-[180px]"
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
        <div>
          <p className="text-3xl max-md:text-xl font-medium">Transaction Details</p>
        </div>
      </div>
      <div className="text-xl">
        {isTransacEdit ? (
          <>
            <EditTransaction
              backButton={backButton}
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
          closeModal={handleCloseModal}
          transacDetail={transacDetail}
          backButton={backButton}
        />
      </BinExpensesModal>
    </div>
  );
}
