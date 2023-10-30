import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  close_modal,
  income_transaction,
} from "../../features/transactionSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { incCategory } from "./category-expense/incCategory";

export default function IncomeEntry({ isClose, closeIncome}) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());

  const handleAddIncomeEntry = () => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    dispatch(
      income_transaction({
        newCategory: category,
        newTitle: title,
        newAmount: amount,
        newDescription: description,
        newDate: formattedDate,
      })
    );

    dispatch(close_modal());
    isClose();
    closeIncome();
  };

  return (
    <div className="py-7 px-8 space-y-5 w-[470px]">
      <div>
        <p className="text-xl text-center">Income</p>
      </div>
      <div className="space-x-3 flex items-center">
        <label htmlFor="category">Category:</label>
        <select
          value={category}
          id="category"
          className="p-3 shadow-md ring-1 ring-slate-200 rounded-lg w-full"
          onChange={(e) => setCategory(e.target.value)}
        >
          {incCategory.map((expenses) => (
            <option key={expenses.id} value={`${expenses.value}`}>
              {expenses.name}
            </option>
          ))}
        </select>
      </div>
      <div className="space-x-3 flex items-center">
        <label htmlFor="title">Title: </label>
        <input
          value={title}
          className="p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full"
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1">
          <label htmlFor="date">Date:</label>
          <DatePicker
            id="date"
            selected={date}
            onChange={(date) => setDate(date)}
            className="p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full"
          />
        </div>
        <div className="space-x-1 flex items-center">
          <label htmlFor="amount">Amount: </label>
          <input
            value={amount}
            placeholder="$$"
            className="p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full"
            type="text"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <div>
        <textarea
          value={description}
          placeholder="Enter description..."
          id="description"
          cols="30"
          rows="3"
          className="rounded-lg ring-1 ring-slate-200 shadow-md p-3 w-full"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={handleAddIncomeEntry}
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
