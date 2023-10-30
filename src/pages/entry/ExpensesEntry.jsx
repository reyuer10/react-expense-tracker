import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  close_modal,
  expense_transaction,
} from "../../features/transactionSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { expCategory } from "./category-expense/expCategory";

export default function ExpensesEntry({ isClose, closeExpense }) {
  const dispatch = useDispatch();

  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseDate, setExpenseDate] = useState(new Date());

  const handleAddExpenseEntry = () => {
    const formattedDate = new Date(expenseDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    dispatch(
      expense_transaction({
        eCategory: expenseCategory,
        eTitle: expenseTitle,
        eAmount: expenseAmount,
        eDescription: expenseDescription,
        eDate: formattedDate,
      })
    );

    dispatch(close_modal());
    isClose();
    closeExpense();
  };

  return (
    <div className="py-7 px-8 space-y-5 w-[470px]">
      <div>
        <p className="text-xl text-center">Expenses</p>
      </div>
      <div className="space-x-3 flex items-center">
        <label htmlFor="category">Category:</label>
        <select
          value={expenseCategory}
          id="category"
          className="p-3 shadow-md ring-1 ring-slate-200 rounded-lg w-full"
          onChange={(e) => setExpenseCategory(e.target.value)}
        >
          {expCategory.map((expenses) => (
            <option key={expenses.id} value={`${expenses.value}`}>
              {expenses.name}
            </option>
          ))}
        </select>
      </div>
      <div className="space-x-3 flex items-center">
        <label htmlFor="title">Title: </label>
        <input
          value={expenseTitle}
          className="p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full"
          type="text"
          id="title"
          onChange={(e) => setExpenseTitle(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1">
          <label htmlFor="date">Date:</label>
          <DatePicker
            id="date"
            selected={expenseDate}
            onChange={(date) => setExpenseDate(date)}
            className="p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full"
          />
        </div>
        <div className="space-x-1 flex items-center">
          <label htmlFor="amount">Amount: </label>
          <input
            value={expenseAmount}
            placeholder="$$"
            className="p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full"
            type="text"
            id="amount"
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
        </div>
      </div>

      <div>
        <textarea
          value={expenseDescription}
          placeholder="Enter description..."
          id="description"
          cols="30"
          rows="3"
          className="rounded-lg ring-1 ring-slate-200 shadow-md p-3 w-full"
          onChange={(e) => setExpenseDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={handleAddExpenseEntry}
          className="px-4 py-2 rounded-lg bg-[#303030] text-white font-medium w-full shadow-md hover:bg-slate-600 transition-colors"
        >
          Add transaction
        </button>
        <button className="border shadow-md rounded-lg font-medium w-full hover:bg-slate-50">
          Save as Draft
        </button>
      </div>
    </div>
  );
}
