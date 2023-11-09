import React, { useState } from "react";
import { expCategory } from "../entry/category-expense/expCategory";
import { incCategory } from "../entry/category-expense/incCategory";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { edit_transaction } from "../../features/transactionSlice";

export default function EditTransaction({
  selectedItem,
  isTransacEdit,
  onCancel,
}) {
  const dispatch = useDispatch();
  const [newTransacValue, setNewTransacValue] = useState({
    eCategory: selectedItem.transacCategory,
    eAmount: selectedItem.transacAmount,
    eTitle: selectedItem.transacTitle,
    eDescription: selectedItem.transacDescription,
    eType: selectedItem.transactionType,
  });
  const fDate = selectedItem.transacDate;
  const parseDate = Date.parse(fDate + " 2023");
  const [eDate, setEdate] = useState(parseDate);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setNewTransacValue({ ...newTransacValue, [name]: value });
  };
  console.log(selectedItem.transacCategory);
  const { eCategory, eAmount, eTitle, eDescription, eType } = newTransacValue;

  const handleSave = (selectedId) => {
    const formattedDate = new Date(eDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    dispatch(
      edit_transaction({
        tId: selectedId,
        nCategory: eCategory,
        nDate: formattedDate,
        nAmount: eAmount,
        nTitle: eTitle,
        nDescription: eDescription,
        nType: eType,
      })
    );

    onCancel();
  };

  return (
    <>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="font-medium">Transaction type:</span>
          <select
            className="ring-2 ring-green-400 rounded-lg px-4 bg-slate-50"
            name="eType"
            id="transactionType"
            value={eType}
            onChange={handleOnchange}
          >
            <option value="Expenses">Expenses</option>
            <option value="Income">Income</option>
          </select>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Category: </span>
          <div className="flex space-x-2 ">
            <select
              name="eCategory"
              id="transacCategory"
              value={eCategory}
              onChange={handleOnchange}
              className="ring-2 ring-green-400 rounded-lg px-4 bg-slate-50"
            >
              {eType === "Expenses" ? (
                <>
                  {expCategory.map((expenses) => (
                    <option key={expenses.id} value={`${expenses.value}`}>
                      {expenses.name}
                    </option>
                  ))}
                </>
              ) : (
                <>
                  {incCategory.map((income) => (
                    <option key={income.id} value={`${income.value}`}>
                      {income.name}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Date: </span>
          <div>
            <DatePicker
              id="date"
              selected={eDate}
              onChange={(eDate) => setEdate(eDate)}
              className="ring-2 ring-green-400 rounded-lg px-4 bg-slate-50"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Amount: </span>
          <input
            className="rounded-lg py-1 px-4 w-36 text-slate-500 bg-slate-50 ring-green-300 ring-2 text-center"
            name="eAmount"
            value={eAmount}
            onChange={handleOnchange}
            type="text"
          />
        </div>
        <div className="py-10 space-y-7">
          <div className="flex flex-col">
            <span className="font-medium">Title:</span>
            <input
              className="ring-2 ring-green-300 rounded-lg py-2 px-4 text-slate-500 bg-slate-50"
              name="eTitle"
              value={eTitle}
              onChange={handleOnchange}
              type="text"
            />
          </div>
          <div>
            <span className="font-medium">Description:</span>
            <div className=" rounded-xl p-5 shadow-md">
              <input
                type="text"
                className="w-full rounded-lg py-2 px-4 text-slate-500 bg-slate-50 ring-green-300 ring-2 "
                name="eDescription"
                value={eDescription}
                onChange={handleOnchange}
              />
            </div>
          </div>
        </div>
        {isTransacEdit && (
          <>
            <div className="flex items-end justify-end space-x-3">
              <button
                onClick={() => handleSave(selectedItem.transacId)}
                className="px-4 py-2 rounded-lg bg-[#303030] text-white hover:bg-slate-600 transition-colors duration-100 shadow-md"
              >
                Save
              </button>
              <button
                onClick={onCancel}
                className="px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors duration-100 ring-1 shadow-md ring-slate-400"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
