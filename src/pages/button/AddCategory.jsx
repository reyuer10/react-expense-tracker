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
    watch,
  } = useForm();

  const budgetList = useSelector((state) => state.transaction.budgetList);
  const dispatch = useDispatch();

  const budgetOneAmount = getValues("budgetOneAmount");
  const budgetTwoAmount = getValues("budgetTwoAmount");
  const budgetThreeAmount = getValues("budgetThreeAmount");
  const budgetOneCategory = getValues("budgetOneCategory");
  const budgetTwoCategory = getValues("budgetTwoCategory");
  const budgetThreeCategory = getValues("budgetThreeCategory");

  // const [budgetValue, setBudgetValue] = useState({
  //   budgetOneAmount: 0,
  //   budgetTwoAmount: 0,
  //   budgetThreeAmount: 0,
  //   budgetFourAmount: 0,
  //   budgetOneCategory: "",
  //   budgetTwoCategory: "",
  //   budgetThreeCategory: "",
  //   budgetFourCategory: "",
  // });

  // const handleOnchange = (e) => {
  //   const { name, value } = e.target;
  //   setBudgetValue({ ...budgetValue, [name]: value });
  // };

  // const {
  //   budgetOneAmount,
  //   budgetTwoAmount,
  //   budgetThreeAmount,
  //   budgetFourAmount,
  //   budgetOneCategory,
  //   budgetTwoCategory,
  //   budgetThreeCategory,
  //   budgetFourCategory,
  // } = budgetValue;

  const handleBudgetComplete = () => {
    dispatch(
      add_budget_item({
        bOneGetAmount: budgetOneAmount,
        bTwoGetAmount: budgetTwoAmount,
        bThreeGetAmount: budgetThreeAmount,
        bOneGetCategory: budgetOneCategory,
        bTwoGetCategory: budgetTwoCategory,
        bThreeGetCategory: budgetThreeCategory,
      })
    );
    setIsButtonBudgetClick(false);
    setIsBudgetComplete(true);
  };

  useEffect(() => {
    console.log(budgetList);
  }, [budgetList]);

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
          Set budgetF
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
        <div className="">
          <label htmlFor="AmountOne">Amount: </label>
          <input
            className="ring-1 ring-slate-200 rounded-lg p-1 w-[120px]"
            type="number"
            id="AmountOne"
            name="budgetOneAmount"
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
            name="budgetOneCategory"
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
            name="budgetTwoAmount"
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
            name="budgetTwoCategory"
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
            name="budgetThreeAmount"
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
            name="budgetThreeCategory"
            className="px-4 py-2 rounded-lg ring-1 ring-slate-200"
            {...register("budgetThreeCategory", {
              required: "Amount is required.",
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
