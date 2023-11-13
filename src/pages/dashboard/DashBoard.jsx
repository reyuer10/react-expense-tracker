import React, { useEffect, useState } from "react";

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

import { Route, Routes } from "react-router-dom";

import BudgetButton from "../button/BudgetButton";
import DraftButton from "../button/DraftButton";

import Draft from "./Draft";
import BudgetManagement from "./BudgetManagement";

export default function DashBoard() {
  const dispatch = useDispatch();
  const [isUserChooseExpense, setIsUserChooseExpense] = useState(false);
  const [isUserChooseIncome, setIsUserChooseIncome] = useState(false);

  const modalTransactions = useSelector(
    (state) => state.transaction.modalTransactions
  );

  const handleOpenModal = () => dispatch(open_modal());
  const handleCloseModal = () => dispatch(close_modal());
  const handleOpenExpense = () => setIsUserChooseExpense(true);
  const handleCloseExpense = () => setIsUserChooseExpense(false);
  const handleOpenIncome = () => setIsUserChooseIncome(true);
  const handleCloseIncome = () => setIsUserChooseIncome(false);

  const dashBoardComponent = [
    { id: 1, component: <Balance /> },
    { id: 2, component: <TotalIncome /> },
    { id: 3, component: <RecentTransaction /> },
    { id: 4, component: <TotalExpenses /> },
  ];

  const [navTop, setNavTop] = useState("");

  const handleFIllButton = (itemId) => {
    setNavTop(itemId);
  };

  useEffect(() => {
    const na = localStorage.getItem("setItem");
    if (na) {
      setNavTop(na);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("setItem", navTop);
  }, [navTop]);

  return (
    <div className="text-[#303030] font-outfit">
      <div className="flex items-center justify-between my-4 mx-5">
        <div>
          <p className="text-2xl font-semibold">DashBoard</p>
        </div>
        <div className="flex space-x-3">
          <BudgetButton handleFIllButton={handleFIllButton} navTop={navTop} />
          <DraftButton handleFIllButton={handleFIllButton} navTop={navTop} />
          <TransactionButton handleOpenModal={handleOpenModal} />
        </div>
      </div>
      {/* flex flex-grow flex-wrap gap-8 mx-5  */}
      <div className="flex">
        <div className="grid grid-cols-2 mx-3 gap-x-8 ">
          {dashBoardComponent.map((component) => (
            <div key={component.id}>
              <div>{component.component}</div>
            </div>
          ))}
        </div>
        <div>
          <Routes>
            <Route path="/" element={<BudgetManagement />} />
            <Route path="/draft" element={<Draft />} />
          </Routes>
        </div>
      </div>
      {modalTransactions && (
        <>
          <Modal isOpen={handleOpenModal} isClose={handleCloseModal}>
            {!isUserChooseExpense ? (
              <>
                {!isUserChooseIncome ? (
                  <>
                    <ChooseTransactions
                      isClose={handleCloseModal}
                      closeExpense={handleCloseExpense}
                      closeIncome={handleCloseIncome}
                      openExpense={handleOpenExpense}
                      openIncome={handleOpenIncome}
                      onClose={handleCloseModal}
                    />
                  </>
                ) : (
                  <IncomeEntry
                    isClose={handleCloseModal}
                    onClose={handleCloseModal}
                    closeIncome={handleCloseIncome}
                    closeExpense={handleCloseExpense}
                  />
                )}
              </>
            ) : (
              <>
                <ExpensesEntry
                  isClose={handleCloseModal}
                  closeExpense={handleCloseExpense}
                  closeIncome={handleCloseIncome}
                />
              </>
            )}
          </Modal>
        </>
      )}
    </div>
  );
}
