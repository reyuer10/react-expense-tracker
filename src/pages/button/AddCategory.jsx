import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_budget_item } from "../../features/transactionSlice";
import { expCategory } from "../entry/category-expense/expCategory";
import { useForm } from "react-hook-form";

export default function AddCategory({
  handleBudgetCancel,
  setIsButtonBudgetClick,
  setIsBudgetComplete,
}) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleBudgetComplete = () => {
    const bAOne = getValues("budgetOneAmount");
    const bCOne = getValues("budgetOneCategory");

    const formValues = getValues();
    dispatch(
      add_budget_item({
        GetAmount: bAOne,
        GetCategory: bCOne,
      })
    );
    setIsButtonBudgetClick(false);
    setIsBudgetComplete(true);
    console.log(formValues);
  };

  return (
    <form
      onSubmit={handleSubmit(handleBudgetComplete)}
      className="text-center space-y-8"
    >
      <div className="flex space-x-3 mx-5">
        <button
          type="submit"
          className="flex shadow-sm rounded-full px-4 py-2 ring-1 ring-slate-400  bg-slate-700 text-white font-semibold hover:bg-slate-700"
        >
          Add budget
        </button>
        <button
          type="button"
          onClick={handleBudgetCancel}
          className="flex shadow-sm rounded-full px-4 py-2 ring-1 ring-slate-400 font-semibold transition-all hover:bg-slate-100"
        >
          Cancel
        </button>
      </div>
      <div className="flex space-x-10 items-center justify-center bg-slate-400 border border-slate-700 rounded-3xl mx-3 py-10 shadow-md">
        <div className="flex flex-col text-left space-y-2 bg-gray-700 text-white p-5 rounded-2xl shadow-md">
          <label htmlFor="AmountOne">Amount: </label>
          <input
            id="AmountOne"
            className="bg-slate-600 outline-none rounded-lg p-1 w-[120px] text-center"
            type="number"
            {...register("budgetOneAmount", {
              required: "Amount is required.",
            })}
          />
          {errors.budgetOneAmount && (
            <p className="text-center text-red-400">
              {errors.budgetOneAmount.message}
            </p>
          )}
        </div>
        <div className="flex flex-col text-left space-y-2 bg-gray-700 text-white p-4 rounded-2xl shadow-md">
          <label htmlFor="categoryOne">Category: </label>
          <select
            id="categoryOne"
            className="px-4 py-2 rounded-lg bg-slate-600 "
            {...register("budgetOneCategory", {
              required: "Amount is required.",
            })}
          >
            {expCategory.map((expenses) => (
              <option key={expenses.id} value={`${expenses.value}`}>
                {expenses.name}
              </option>
            ))}
          </select>
          {errors.budgetOneCategory && (
            <p className="text-center text-red-400">
              {errors.budgetOneCategory.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
