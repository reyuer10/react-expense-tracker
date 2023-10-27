import React, { useState } from "react";
import Modal from "../modal/Modal";
import ExpensesEntry from "./entry/ExpensesEntry";
import { useNavigate } from "react-router-dom";

import { tSvg } from "./svg/TransactionsSvg";

export default function ChooseTransactions({ onClose }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleNavigateExpensesEntry = () => {
    navigate("/expenses-entry");
  };
  return (
    <div className="px-6 py-2 shadow-md rounded-xl text-[#303030]">
      <div>
        <p className="text-md font-medium">Choose transactions</p>
      </div>
      <div className=" flex items-center justify-center space-x-5 m-7">
        <button className="flex items-center space-x-3 px-4 py-2 rounded-lg shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 font-semibold">
          {tSvg.Income}
          <p>Income</p>
        </button>
        <button
          onClick={handleNavigateExpensesEntry}
          className=" flex items-center space-x-3 px-4 py-2 rounded-lg shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 font-semibold"
        >
          {tSvg.Expenses}
          <p>Expenses</p>
        </button>
      </div>
    </div>
  );
}
