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
  const bATwo = getValues("budgetTwoAmount");
  const bAThree = getValues("budgetThreeAmount");
  const bCOne = getValues("budgetOneCategory");
  const bCtwo = getValues("budgetTwoCategory");
  const bCThree = getValues("budgetThreeCategory");

    const formValues = getValues();
    dispatch(
      add_budget_item({
        bOneGetAmount: bAOne,
        bTwoGetAmount: bATwo,
        bThreeGetAmount: bAThree,
        bOneGetCategory: bCOne,
        bTwoGetCategory: bCtwo,
        bThreeGetCategory: bCThree,
      })
    );
    setIsButtonBudgetClick(false);
    setIsBudgetComplete(true);
    console.log(formValues);

  };


  return (
    <form
      onSubmit={handleSubmit(handleBudgetComplete)}
      className="py-7 text-center space-y-8"
    >
      <div className="flex space-x-3">
        <button
          type="submit"
          className="flex shadow-sm rounded-lg px-4 py-2 ring-1 ring-slate-400 bg-[#303030] text-white font-semibold hover:bg-slate-700"
        >
          Set budget
        </button>
        <button
          type="button"
          onClick={handleBudgetCancel}
          className="flex shadow-sm rounded-lg px-4 py-2 ring-1 ring-slate-400 font-semibold transition-all hover:bg-slate-100"
        >
          Cancel
        </button>
      </div>
      <div className="flex space-x-10 items-center justify-center">
        <div>
          <label htmlFor="AmountOne">Amount: </label>
          <input
            id="AmountOne"
            className="ring-1 ring-slate-200 rounded-lg p-1 w-[120px]"
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
        <div>
          <label htmlFor="categoryOne">Category: </label>
          <select
            id="categoryOne"
            className="px-4 py-2 rounded-lg ring-1 ring-slate-200"
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
      <div className="flex space-x-10 items-center justify-center">
        <div className="">
          <label htmlFor="amountTwo">Amount: </label>
          <input
            id="amountTwo"
            className="ring-1 ring-slate-200 rounded-lg p-1 w-[120px]"
            type="number"
            {...register("budgetTwoAmount", {
              required: "Amount is required.",
            })}
          />
          {errors.budgetTwoAmount && (
            <p className="text-center text-red-400">
              {errors.budgetTwoAmount.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="categoryTwo">Category: </label>
          <select
            id="categoryTwo"
            className="px-4 py-2 rounded-lg ring-1 ring-slate-200"
            {...register("budgetTwoCategory", {
              required: "Category is required.",
            })}
          >
            {expCategory.map((expenses) => (
              <option key={expenses.id} value={`${expenses.value}`}>
                {expenses.name}
              </option>
            ))}
          </select>
          {errors.budgetTwoCategory && (
            <p className="text-center text-red-400">
              {errors.budgetTwoCategory.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex space-x-10 items-center justify-center">
        <div className="">
          <label htmlFor="amountThree">Amount: </label>
          <input
            id="amountThree"
            className="ring-1 ring-slate-200 rounded-lg p-1 w-[120px]"
            type="number"
            {...register("budgetThreeAmount", {
              required: "Amount is required.",
            })}
          />
          {errors.budgetThreeAmount && (
            <p className="text-center text-red-400">
              {errors.budgetThreeAmount.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="categoryThree">Category: </label>
          <select
            id="categoryThree"
            className="px-4 py-2 rounded-lg ring-1 ring-slate-200"
            {...register("budgetThreeCategory", {
              required: "Category is required.",
            })}
          >
            {expCategory.map((expenses) => (
              <option key={expenses.id} value={`${expenses.value}`}>
                {expenses.name}
              </option>
            ))}
          </select>
          {errors.budgetThreeCategory && (
            <p className="text-center text-red-400">
              {errors.budgetThreeCategory.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}