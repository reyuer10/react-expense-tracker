import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  close_modal,
  income_transaction,
} from "../../features/transactionSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { incCategory } from "./category-expense/incCategory";

export default function IncomeEntry({ isClose, closeIncome }) {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());

  const [incomeValue, setIncomeValue] = useState({
    title: "",
    description: "",
    amount: "",
    category: "",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setIncomeValue({ ...incomeValue, [name]: value });
  };

  const [error, setError] = useState({
    title: null,
    description: null,
    amount: null,
    category: null,
  });

  const { title, amount, category } = incomeValue;

  const handleAddIncomeEntry = async () => {
    const formattedDate = new Date(incomeValue.date).toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
      }
    );

    if (title.trim() === "") {
      setError({
        ...error,
        title: "Title cannot be empty.",
      });
      return;
    } else {
      setError((prevstate) => ({
        ...prevstate,
        title: null,
      }));
    }

    if (amount.trim() === "") {
      setError({ ...error, amount: "Amount cannot be empty." });
      return;
    }
    // else if (isNaN(amount)) {
    //   setError({
    //     ...error,
    //     amount: "Numbers only allowed in the amount field.",
    //   });
    // } else {
    //   setError({ ...error, amount: null });
    // }

    dispatch(
      income_transaction({
        newCategory: incomeValue.category,
        newTitle: incomeValue.title,
        newAmount: incomeValue.amount,
        newDescription: incomeValue.description,
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
          name="category"
          id="category"
          className="p-3 shadow-md ring-1 ring-slate-200 rounded-lg w-full"
          onChange={handleOnchange}
        >
          {incCategory.map((expenses) => (
            <option key={expenses.id} value={`${expenses.value}`}>
              {expenses.name}
            </option>
          ))}
        </select>
        {error.category && <div>{error.category}</div>}
      </div>
      <div className="space-x-3 flex items-center">
        <label htmlFor="title">Title: </label>
        <input
          value={incomeValue.title}
          className="p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full"
          type="text"
          id="title"
          name="title"
          onChange={handleOnchange}
        />
        {error.title && <div>{error.title}</div>}
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
            value={incomeValue.amount}
            placeholder="$$"
            className="p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full"
            type="text"
            name="amount"
            id="amount"
            onChange={handleOnchange}
          />
          {error.amount && <div>{error.amount}</div>}
        </div>
      </div>

      <div>
        <textarea
          value={incomeValue.description}
          placeholder="Enter description..."
          id="description"
          cols="30"
          rows="3"
          name="description"
          className="rounded-lg ring-1 ring-slate-200 shadow-md p-3 w-full"
          onChange={handleOnchange}
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
