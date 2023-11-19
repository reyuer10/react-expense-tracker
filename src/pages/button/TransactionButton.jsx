import React from "react";

export default function TransactionButton({ handleOpenModal }) {
  return (
    <>
      <button
        onClick={handleOpenModal}
        className="flex items-center px-4 py-2 max-md:text-sm rounded-full shadow-md bg-slate-700 hover:bg-slate-600 transition-colors duration-150 text-white"
      >
        <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
        </svg>
        <div className="space-x-1">
          <span className="max-md:hidden">New</span>
          <span className="">transactions</span>
        </div>
      </button>
    </>
  );
}
