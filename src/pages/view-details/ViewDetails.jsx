import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { buttonOption } from "./ButtonOption";
import BinExpensesModal from "../../modal/BinExpensesModal";
import BinModal from "./binModal";
import Details from "./Details";
import ButtonTransacOption from "./ButtonTransacOption";
import EditTransaction from "./EditTransaction";

export default function ViewDetails() {
  const { id } = useParams();
  const transactionList = useSelector(
    (state) => state.transaction.transactionList
  );

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

  const transaction = useSelector((state) => state.transaction.transactionList);
  const selectedItem = transaction.find(
    (transac) => transac.transacId === parseInt(id)
  );

  if (!selectedItem) {
    return (
      <div className="text-[#303030] my-10 text-xl font-outfit font-normal shadow-md p-8 rounded-xl w-[600px] h-[300px]">
        Item not found
      </div>
    );
  }

  const handleEditTransaction = (itemId) => {
    const tExistingId = transactionList.find(
      (transac) => transac.transacId === itemId
    );
    if (tExistingId) {
      setGetValue(tExistingId);
      setIsTransacEdit(true);
    }
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
              selectedItem={selectedItem}
            />
          </>
        ) : (
          <>
            <Details selectedItem={selectedItem} />
          </>
        )}
      </div>
      <BinExpensesModal closeModal={handleCloseModal} isOpen={binOpenModal}>
        <BinModal
          transacId={selectedItem.transacId}
          closeModal={handleCloseModal}
        />
      </BinExpensesModal>
    </div>
  );
}
