import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  add_to_draft,
  close_modal,
  expense_transaction,
} from "../../features/transactionSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { expCategory } from "./category-expense/expCategory";

import { useForm } from "react-hook-form";

export default function ExpensesEntry({ isClose, closeExpense }) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  // const [expenseAmount, setExpenseAmount] = useState(0);
  // const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseDate, setExpenseDate] = useState(new Date());

  const expensesCategory = getValues("expensesCategory");
  const expensesTitle = getValues("expensesTitle");
  const expensesAmount = getValues("expensesAmount");

  const handleAddExpenseEntry = () => {
    const formattedDate = new Date(expenseDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    dispatch(
      expense_transaction({
        eCategory: expensesCategory,
        eTitle: expensesTitle,
        eAmount: expensesAmount,
        eDescription: expenseDescription,
        eDate: formattedDate,
      })
    );

    dispatch(close_modal());
    isClose();
    closeExpense();
  };

  const isPositive = (value) => {
    return parseFloat(value) >= 0;
  };

  const handleAddtoDraft = () => {
    console.log("Hi");

    const formattedDate = new Date(expenseDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    dispatch(
      add_to_draft({
        draftCategory: expensesCategory,
        draftTitle: expensesTitle,
        draftAmount: expensesAmount,
        draftDate: expenseDescription,
        draftDescription: formattedDate,
      })
    );
    dispatch(close_modal());
    isClose();
    closeExpense();
  };

  return (
    <form
      onSubmit={handleSubmit(handleAddExpenseEntry)}
      className="py-7 px-8 space-y-5 w-[470px]"
    >
      <div>
        <p className="text-xl text-center">Expenses</p>
      </div>
      <div className="space-x-3 flex flex-col">
        <div className="flex items-center">
          <label htmlFor="category">Category:</label>
          <select
            // value={expenseCategory}
            id="category"
            className={`${
              errors.expensesCategory
                ? "border-red-400 border focus-within:outline-red-400"
                : ""
            } p-3 shadow-md ring-1 ring-slate-200 rounded-lg w-full`}
            // onChange={(e) => setExpenseCategory(e.target.value)}
            {...register("expensesCategory", {
              required: "Category is required.",
            })}
          >
            {expCategory.map((expenses) => (
              <option key={expenses.id} value={`${expenses.value}`}>
                {expenses.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          {errors.expensesCategory && (
            <div className="text-center text-red-400">
              {errors.expensesCategory.message}
            </div>
          )}
        </div>
      </div>
      <div className="space-x-3 flex flex-col">
        <div className="flex items-center">
          <label htmlFor="title">Title: </label>
          <input
            // value={expenseTitle}
            className={`${
              errors.expensesTitle
                ? "border-red-400 border focus-within:outline-red-400"
                : ""
            } p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full`}
            type="text"
            id="title"
            // onChange={(e) => setExpenseTitle(e.target.value)}
            {...register("expensesTitle", {
              required: "Title is required.",
            })}
          />
        </div>
        <div>
          {errors.expensesTitle && (
            <div className="text-center text-red-400">
              {errors.expensesTitle.message}
            </div>
          )}
        </div>
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
        <div className="space-x-1 flex flex-col">
          <div className="flex items-center">
            <label htmlFor="amount">Amount: </label>
            <input
              // value={expenseAmount}
              placeholder="$$"
              className={`${
                errors.expensesTitle
                  ? "border-red-400 border focus-within:outline-red-400"
                  : ""
              } p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full`}
              type="number"
              id="amount"
              // onChange={(e) => setExpenseAmount(e.target.value)}
              {...register("expensesAmount", {
                required: "Amount is required.",
                validate: (value) =>
                  isPositive(value) || "Non-negative values required",
              })}
            />
          </div>
          <div>
            {errors.expensesAmount && (
              <div className="text-center text-red-400">
                {errors.expensesAmount.message}
              </div>
            )}
          </div>
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
          type="submit"
          className="px-4 py-2 rounded-lg bg-[#303030] text-white font-medium w-full shadow-md hover:bg-slate-600 transition-colors"
        >
          Add transaction
        </button>
        <button
          type="button"
          onClick={handleAddtoDraft}
          className="border shadow-md rounded-lg font-medium w-full hover:bg-slate-50"
        >
          Save as Draft
        </button>
      </div>
    </form>
  );
}
