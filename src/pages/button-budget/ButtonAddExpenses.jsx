import React from "react";

export default function ButtonAddExpenses({handleEdit, budget}) {
  return (
    <>
      <button
        onClick={() => handleEdit(budget.budgetId)}
        className="flex items-center my-3  px-4 py-2 rounded-lg ring-1 ring-slate-200 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
        </svg>
        <span>Expenses</span>
      </button>
    </>
  );
}
