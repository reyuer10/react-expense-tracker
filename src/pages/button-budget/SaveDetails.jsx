import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function SaveDetails({handleSaveDetails, budget}) {
console.log(budget)
  return (
    <>
      <button
        onClick={() => handleSaveDetails(budget.budgetId)}
        disabled={budget.isbuttonSaveClick}
        className={`${
          !budget.isbuttonSaveClick ? "border border-slate-200 shadow-md" : "text-gray-400"
        } flex space-x-2 px-4 py-2 rounded-lg `}
      >
        {!budget.isbuttonSaveClick ? (
          "Save details"
        ) : (
          <>
            <svg
              className="fill-current text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="m18.214,9.098c.387.394.381,1.027-.014,1.414l-4.426,4.345c-.783.768-1.791,1.151-2.8,1.151-.998,0-1.996-.376-2.776-1.129l-1.899-1.867c-.394-.387-.399-1.02-.012-1.414.386-.395,1.021-.4,1.414-.012l1.893,1.861c.776.75,2.001.746,2.781-.018l4.425-4.344c.393-.388,1.024-.381,1.414.013Zm5.786,2.902c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z" />
            </svg>
            <span>Details Saved!</span>
          </>
        )}
      </button>
    </>
  );
}
