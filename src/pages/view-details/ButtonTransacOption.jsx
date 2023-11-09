import React from "react";

export default function ButtonTransacOption({ button, handleButtonClick }) {
  return (
    <>
      <div className="hover:bg-slate-100 w-full rounded-lg p-1 px-4">
        <button
          onClick={() => handleButtonClick(button.id)}
          className="flex items-center space-x-2"
        >
          {button.svg}
          <p>{button.name}</p>
        </button>
      </div>
    </>
  );
}
