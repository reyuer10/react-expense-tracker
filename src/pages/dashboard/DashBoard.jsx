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
import ExpensesEntry from "../entry/ExpensesEntry";
import IncomeEntry from "../entry/IncomeEntry";

export default function DashBoard() {
  const dispatch = useDispatch();
  const [isUserChooseExpense, setIsUserChooseExpense] = useState(false);
  const [isUserChooseIncome, setIsUserChooseIncome] = useState(false);

  const modalTransactions = useSelector(
    (state) => state.transaction.modalTransactions
  );

  const handleOpenModal = () => {
    dispatch(open_modal());
  };

  const handleCloseModal = () => {
    dispatch(close_modal());
  };

  const handleOpenExpense = () => {
    setIsUserChooseExpense(true);
  };

  const handleCloseExpense = () => {
    setIsUserChooseExpense(false);
  };

  const handleOpenIncome = () => {
    setIsUserChooseIncome(true);
  };

  const handleCloseIncome = () => {
    setIsUserChooseIncome(false);
  };

  const dashBoardComponent = [
    { id: 1, component: <Balance /> },
    { id: 2, component: <TotalIncome /> },
    { id: 3, component: <RecentTransaction /> },
    { id: 4, component: <TotalExpenses /> },
  ];

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
        {dashBoardComponent.map((component) => (
          <div key={component.id}>
            <div>{component.component}</div>
          </div>
        ))}
      </div>
      {modalTransactions && (
        <>
          <Modal
            isOpen={handleOpenModal}
            isClose={handleCloseModal}
            closeExpense={handleCloseExpense}
            closeIncome={handleCloseIncome}
          >
            {!isUserChooseExpense ? (
              <>
                {!isUserChooseIncome ? (
                  <>
                    <ChooseTransactions
                      openExpense={handleOpenExpense}
                      openIncome={handleOpenIncome}
                      onClose={handleCloseModal}
                    />
                  </>
                ) : (
                  <IncomeEntry onClose={handleCloseModal} />
                )}
              </>
            ) : (
              <>
                <ExpensesEntry />
              </>
            )}
          </Modal>
        </>
      )}
    </div>
  );
}
