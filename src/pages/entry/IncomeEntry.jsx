import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  close_modal,
  income_transaction,
} from "../../features/transactionSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { incCategory } from "./category-expense/incCategory";
import { useForm } from "react-hook-form";

export default function IncomeEntry({ isClose, closeIncome }) {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());

  const [incomeValue, setIncomeValue] = useState({
    // title: "",
    description: "",
    // amount: "",
    // category: "",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setIncomeValue({ ...incomeValue, [name]: value });
  };

  const { title, amount, category, description } = incomeValue;

  const handleAddIncomeEntry = () => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    const incomeTitle = getValues("incomeTitle");
    const incomeAmount = getValues("incomeAmount");
    const incomeCategory = getValues("incomeCategory");

    dispatch(
      income_transaction({
        newCategory: incomeCategory,
        newTitle: incomeTitle,
        newAmount: incomeAmount,
        newDescription: incomeValue.description,
        newDate: formattedDate,
      })
    );

    dispatch(close_modal());
    isClose();
    closeIncome();
  };

  const isPositive = (value) => {
    return parseFloat(value) >= 0;
  };

  return (
    <form
      onSubmit={handleSubmit(handleAddIncomeEntry)}
      className="py-7 px-8 space-y-5 w-[470px]"
    >
      <div>
        <p className="text-xl text-center">Income</p>
      </div>
      <div className="space-x-3 flex flex-col">
        <div className="flex items-center">
          <label htmlFor="category">Category:</label>
          <select
            // value={category}
            name="category"
            id="category"
            className={`${
              errors.incomeCategory
                ? "border-red-400 border focus-within:outline-red-400"
                : ""
            } p-3 shadow-md ring-1 ring-slate-200 rounded-lg w-full`}
            // onChange={handleOnchange}
            {...register("incomeCategory", {
              required: "Category is required",
            })}
          >
            {incCategory.map((expenses) => (
              <option key={expenses.id} value={`${expenses.value}`}>
                {expenses.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          {errors.incomeCategory && (
            <div className="text-red-400 text-center">
              {errors.incomeCategory.message}
            </div>
          )}
        </div>
      </div>
      <div className="space-x-3 flex flex-col">
        <div className="flex items-center">
          <label htmlFor="title">Title: </label>
          <input
            // value={title}
            className={`${
              errors.incomeTitle
                ? "border-red-400 border focus-within:outline-red-400"
                : ""
            } p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full`}
            type="text"
            id="title"
            name="title"
            // onChange={handleOnchange}
            {...register("incomeTitle", {
              required: "Title is required",
            })}
          />
        </div>
        <div>
          {errors.incomeTitle && (
            <div className="text-red-400 text-center">
              {errors.incomeTitle.message}
            </div>
          )}
        </div>
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
        <div className="space-x-1 flex flex-col">
          <div className="flex items-center">
            <label htmlFor="amount">Amount: </label>
            <input
              // value={amount}
              placeholder="$$"
              className={`${
                errors.incomeAmount
                  ? "border-red-400 border focus-within:outline-red-400"
                  : ""
              } p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full`}
              type="number"
              name="amount"
              id="amount"
              // onChange={handleOnchange}
              {...register("incomeAmount", {
                required: "Amount is required",
                validate: (value) =>
                  isPositive(value) || "Non-negative values required",
              })}
            />
          </div>
          <div>
            {errors.incomeAmount && (
              <div className="text-center text-red-400 w-full">
                {errors.incomeAmount.message}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <textarea
          value={description}
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
          type="submit"
          className="px-4 py-2 rounded-lg bg-[#303030] text-white font-medium w-full shadow-md hover:bg-slate-600 transition-colors"
        >
          Add transaction
        </button>
        <button className="border shadow-md rounded-lg font-medium w-full hover:bg-slate-50">
          Save as Draft
        </button>
      </div>
    </form>
  );
}
