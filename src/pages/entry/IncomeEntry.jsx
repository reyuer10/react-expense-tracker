import React, { useState } from "react";
import { expCategory } from "./category-expense/expCategory";
import { useDispatch } from "react-redux";
import { close_modal, new_transaction } from "../../features/transactionSlice";

export default function IncomeEntry() {
  const dispatch = useDispatch;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleAddExpenseEntry = () => {
    dispatch(
      new_transaction({
        newCategory: category,
        newTitle: title,
        newAmount: amount,
        newDate: date,
      })
    );

    dispatch(close_modal());
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
          {expCategory.map((expenses) => (
            <option key={expenses.id} value={`${expenses.value}`}>
              <div>{expenses.svg}</div>
              <div>
                <p>{expenses.name}</p>
              </div>
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

          <input
            className="rounded-lg px-4 py-2 ring-1 ring-slate-200 shadow-md w-full"
            type="date"
            id="date"
          />
        </div>
        <div className="flex items-center space-x-1">
          <label htmlFor="date">Time:</label>

          <input
            className="rounded-lg px-4 py-2 ring-1 ring-slate-200 shadow-md w-full"
            type="time"
            id="time"
          />
        </div>
      </div>
      <div className="space-x-3 flex items-center">
        <label htmlFor="title">Amount: </label>
        <input
          value={amount}
          placeholder="$$"
          className="p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full"
          type="text"
          id="title"
          onChange={(e) => setAmount(e.target.value)}
        />
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
      <div>
        <button
          onClick={handleAddExpenseEntry}
          className="px-4 py-2 rounded-lg bg-[#303030] text-white font-medium w-full shadow-md hover:bg-slate-600 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
