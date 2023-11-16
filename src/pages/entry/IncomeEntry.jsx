import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  add_to_draft_income,
  close_modal,
  income_transaction,
} from "../../features/transactionSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { incCategory } from "./category-expense/incCategory";
import { useForm } from "react-hook-form";

export default function IncomeEntry({ isClose, closeIncome, closeExpense }) {
  const {
    getValues,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [incomeValue, setIncomeValue] = useState({
    description: "",
  });


  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setIncomeValue({ ...incomeValue, [name]: value });
  };

  const [draftHover, setDraftHover] = useState(false);
  const [isdraftDisable, setIsDraftDisable] = useState(false);

  const { title, amount, category, description } = incomeValue;

  const incomeTitle = getValues("incomeTitle");
  const incomeAmount = getValues("incomeAmount");
  const incomeCategory = getValues("incomeCategory");

  // const inputIncomeTitle = watch("incomeTitle");
  const inputIncomeAmount = watch("incomeAmount");
  const inputIncomeCategory = watch("incomeCategory");

  useEffect(() => {
    console.log("Input field amount:", inputIncomeAmount);

    if (inputIncomeAmount === "" && inputIncomeCategory === "") {
      setIsDraftDisable(true);
    } else {
      setIsDraftDisable(false);
    }

    console.log("draft disabled: ", isdraftDisable);
  }, [inputIncomeAmount, isdraftDisable]);

  const handleAddIncomeEntry = () => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

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

  const handleIncomeSaveAsDraft = () => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    dispatch(
      add_to_draft_income({
        draftIncomeCategory: incomeCategory,
        draftIncomeTitle: incomeTitle,
        draftIncomeAmount: incomeAmount,
        draftIncomeDate: formattedDate,
        draftIncomeDescription: incomeValue.description,
      })
    );

    dispatch(close_modal());
    isClose();
    closeExpense();


  };

  const isPositive = (value) => {
    return parseFloat(value) >= 0;
  };

  const handleDraftHover = (isHover) => {
    setDraftHover(isHover);
    console.log(draftHover);
  };

  const handleCloseModal = () => {
    isClose();
    closeExpense();
    closeIncome();
    closeExpense();
  };

  return (
    <form
      onSubmit={handleSubmit(handleAddIncomeEntry)}
      className="py-7 px-8 space-y-5 w-[470px]"
    >
      <div className="flex items-center float-right space-x-3">
        <div>
          <button
            type="button"
            onClick={handleIncomeSaveAsDraft}
            disabled={isdraftDisable}
            onMouseEnter={() => handleDraftHover(true)}
            onMouseLeave={() => handleDraftHover(false)}
            className={`${isdraftDisable ? "text-slate-500" : ""}`}
          >
            <svg
              className="fill-current"
              id="Layer_1"
              height="20"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
            >
              <path d="m17 14a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-4 3h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm9-6.515v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486a6.951 6.951 0 0 1 2.051 4.949zm-6.949-7.021a5.01 5.01 0 0 0 -1.051-.78v4.316a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0 -.781-1.05zm4.949 7.021c0-.165-.032-.323-.047-.485h-4.953a3 3 0 0 1 -3-3v-4.953c-.162-.015-.321-.047-.485-.047h-4.515a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z" />
            </svg>
          </button>
          <div>
            {draftHover && (
              <p className="fixed w-[140px] rounded-lg top-0 ml-5 border border-slate-300 flex items-start bg-white px-4 py-2">
                Save as draft
              </p>
            )}
          </div>
        </div>
        <div>
          <button type="button" onClick={handleCloseModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <p className="text-xl grid place-items-center w-full">Income</p>
      </div>
      <div className="space-x-3 flex flex-col">
        <div className="flex items-center space-x-2">
          <label htmlFor="category">Category:</label>
          <select
            // value={category}
            name="category"
            id="category"
            className={`${
              errors.incomeCategory
                ? "border-red-400 border focus-within:outline-red-400"
                : ""
            } p-3 shadow-md ring-1 ring-slate-200 rounded-2xl w-full`}
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
        <div className="flex items-center space-x-2">
          <label htmlFor="title">Title: </label>
          <input
            // value={title}
            className={`${
              errors.incomeTitle
                ? "border-red-400 border focus-within:outline-red-400"
                : ""
            } p-2 shadow-md border border-slate-200 rounded-2xl w-full`}
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
        <div className="flex items-center space-x-2">
          <label htmlFor="date">Date:</label>
          <DatePicker
            id="date"
            selected={date}
            onChange={(date) => setDate(date)}
            className="p-2 shadow-md border border-slate-200 rounded-2xl w-full text-center"
          />
        </div>
        <div className="space-x-1 flex flex-col">
          <div className="flex items-center space-x-2">
            <label htmlFor="amount">Amount: </label>
            <input
              // value={amount}
              placeholder="$$"
              className={`${
                errors.incomeAmount
                  ? "border-red-400 border focus-within:outline-red-400"
                  : ""
              } p-2 shadow-md ring-1 ring-slate-200 rounded-2xl w-full text-center`}
              type="number"
              name="amount"
              id="amount"
              onChange={handleOnchange}
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
          className="rounded-2xl ring-1 ring-slate-200 shadow-md p-3 w-full"
          onChange={handleOnchange}
        ></textarea>
      </div>
      <div className="flex space-x-3">
        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-[#303030] text-white font-medium w-full shadow-md hover:bg-slate-600 transition-colors"
        >
          Add transaction
        </button>
      </div>
    </form>
  );
}
