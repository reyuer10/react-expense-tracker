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

// import { Route, Routes } from "react-router-dom";

// import BudgetButton from "../button/BudgetButton";
// import DraftButton from "../button/DraftButton";

// import Draft from "./Draft";
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
  // <Route path="/" element={<BudgetManagement />} />

  const dashBoardComponent = [
    { id: 1, component: <Balance /> },
    { id: 2, component: <TotalIncome /> },
    { id: 3, component: <BudgetManagement /> },
    { id: 4, component: <RecentTransaction /> },
    { id: 5, component: <TotalExpenses /> },
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
      <div className="flex items-center justify-between my-4 mx-5 max-md:w-full">
        <div>
          <p className="text-4xl font-semibold max-md:text-2xl">DashBoard</p>
        </div>
        <div className="flex">
          <TransactionButton handleOpenModal={handleOpenModal} />
        </div>
      </div>
      {/* flex flex-grow flex-wrap gap-8 mx-5  */}
      {/* grid grid-flow-col auto-cols-[500px] mx-3 gap-x-8 */}
      <div className="flex">
        <div
          className={`grid grid-cols-3 max-lg:grid-cols-2 max-[768px]:grid-cols-2 gap-x-5 max-[768px]:text-sm`}
        >
          {dashBoardComponent.map((component) => (
            <div
              className={`${
                component.id === 3 ? "row-span-2 max-lg:hidden" : ""
              }`}
              key={component.id}
            >
              <div>{component.component}</div>
            </div>
          ))}
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
