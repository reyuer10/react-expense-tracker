import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  close_modal,
  income_transaction,
  edit_draft,
  draft_transaction,
} from "../features/transactionSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { incCategory } from "../pages/entry/category-expense/incCategory";
import { expCategory } from "../pages/entry/category-expense/expCategory";

export default function DraftUpdate({ isClose, draft }) {
  const fDate = draft.toDraftDate;
  const parseDate = Date.parse(fDate + " 2023");
  const dispatch = useDispatch();
  const [date, setDate] = useState(parseDate);

  const [draftValue, setDraftValue] = useState({
    draftCategory: draft.toDraftCategory,
    draftDescription: draft.toDraftDescription,
    draftTitle: draft.toDraftTitle,
    draftDate: draft.toDraftDate,
    draftAmount: draft.toDraftAmount,
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setDraftValue({ ...draftValue, [name]: value });
  };

  const [draftHover, setDraftHover] = useState(false);

  const { draftCategory, draftDescription, draftTitle, draftAmount } =
    draftValue;

  const handleAddToTransaction = () => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    dispatch(
      draft_transaction({
        addDraftCategory: draftCategory,
        addDraftTitle: draftTitle,
        addDraftAmount: draftAmount,
        addDraftDescription: draftDescription,
        addDraftDate: formattedDate,
        addTransactionType: draft.transactionType,
        draftExistingId: draft.toDraftId,
      })
    );

    dispatch(close_modal());
    isClose();
  };

  const handleUpdateDraft = () => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    dispatch(
      edit_draft({
        updateDraftCategory: draftCategory,
        updateDraftTitle: draftTitle,
        updateDraftAmount: draftAmount,
        updateDraftDate: formattedDate,
        updateDraftDescription: draftDescription,
        existingDraftId: draft.toDraftId,
      })
    );

    dispatch(close_modal());
    isClose();
  };

  const handleDraftHover = (isHover) => {
    setDraftHover(isHover);
  };

  return (
    <div className="py-7 px-8 space-y-5 w-[470px]">
      <div className="flex items-center float-right space-x-3">
        <div>
          <button type="button" onClick={handleUpdateDraft}>
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
          <button
            type="button"
            onClick={() => {
              isClose();
            }}
          >
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
        <p className="text-xl grid place-items-center w-full">
          {draft.transactionType === "Expenses" ? <>Expenses</> : <>Income</>}
        </p>
      </div>
      <div className="space-x-3 flex flex-col">
        <div className="flex items-center">
          <label htmlFor="category">Category:</label>
          {console.log()}
          <select
            value={draftCategory}
            name="draftCategory"
            id="category"
            className={` p-3 shadow-md ring-1 ring-slate-200 rounded-lg w-full`}
            onChange={handleOnchange}
          >
            {draft.transactionType === "Expenses" ? (
              <>
                {expCategory.map((expenses) => (
                  <option key={expenses.id} value={`${expenses.value}`}>
                    {expenses.name}
                  </option>
                ))}
              </>
            ) : (
              <>
                {incCategory.map((expenses) => (
                  <option key={expenses.id} value={`${expenses.value}`}>
                    {expenses.name}
                  </option>
                ))}
              </>
            )}
          </select>
        </div>
      </div>
      <div className="space-x-3 flex flex-col">
        <div className="flex items-center">
          <label htmlFor="title">Title: </label>
          <input
            value={draftTitle}
            className={`p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full`}
            type="text"
            id="title"
            name="draftTitle"
            onChange={handleOnchange}
          />
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
              value={draftAmount}
              placeholder="$$"
              className={`p-2 shadow-md ring-1 ring-slate-200 rounded-lg w-full`}
              type="number"
              name="draftAmount"
              id="amount"
              onChange={handleOnchange}
            />
          </div>
        </div>
      </div>

      <div>
        <textarea
          value={draftDescription}
          placeholder="Enter description..."
          id="description"
          cols="30"
          rows="3"
          name="draftDescription"
          className="rounded-lg ring-1 ring-slate-200 shadow-md p-3 w-full"
          onChange={handleOnchange}
        ></textarea>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={handleAddToTransaction}
          type="button"
          className="px-4 py-2 rounded-lg bg-[#303030] text-white font-medium w-full shadow-md hover:bg-slate-600 transition-colors"
        >
          Add transaction
        </button>
      </div>
    </div>
  );
}
