import React, { useState } from "react";
import Balance from "./Balance";
import RecentTransaction from "./RecentTransaction";
import TotalExpenses from "./TotalExpenses";
import TotalIncome from "./TotalIncome";
import ExpensesEntry from "../ExpensesEntry";
import Modal from "../../modal/Modal";
import TransactionButton from "../button/TransactionButton";

export default function DashBoard() {
  const [modalTransactions, setModalTransactions] = useState(false);

  const handleOpenModalTransaction = () => {
    setModalTransactions(!modalTransactions);
  };

  return (
    <div className="text-[#303030] font-outfit">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-semibold">DashBoard</p>
        </div>
        <div>
          <TransactionButton
            handleOpenModalTransaction={handleOpenModalTransaction}
          />
        </div>
      </div>
      <div className="flex flex-grow flex-wrap basis-30">
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
          <Modal handleOpenModalTransaction={handleOpenModalTransaction}>
            <ExpensesEntry />
          </Modal>
        </>
      )}
    </div>
  );
}
