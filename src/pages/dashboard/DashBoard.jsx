import React, { useState } from "react";

// Dashboard component
import Balance from "./Balance";
import RecentTransaction from "./RecentTransaction";
import TotalExpenses from "./TotalExpenses";
import TotalIncome from "./TotalIncome";

// button for new transactions
import TransactionButton from "../button/TransactionButton";

// modal
import Modal from "../../modal/Modal";

// choose transactions
import ChooseTransactions from "../ChooseTransactions";
import { useDispatch, useSelector } from "react-redux";
import { close_modal, open_modal } from "../../features/transactionSlice";


export default function DashBoard() {
  const dispatch = useDispatch();

  const modalTransactions = useSelector(
    (state) => state.transaction.modalTransactions
  );


  const handleOpenModal = () => {
    dispatch(open_modal());
  };

  const handleCloseModal = () => {
    dispatch(close_modal());
  };


  return (
    <div className="text-[#303030] font-outfit">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-semibold">DashBoard</p>
        </div>
        <div>
          <TransactionButton handleOpenModal={handleOpenModal} />
        </div>
      </div>
      <div className="flex flex-grow flex-wrap gap-x-10">
        <div>
          <Balance />
        </div>
        <div>
          <TotalIncome />
        </div>
        <div>
          <RecentTransaction />
        </div>
        <div>
          <TotalExpenses />
        </div>
      </div>
      {modalTransactions && (
        <>
          <Modal isOpen={handleOpenModal} isClose={handleCloseModal}>
            <ChooseTransactions onClose={handleCloseModal} />
          </Modal>
        </>
      )}
    </div>
  );
}
