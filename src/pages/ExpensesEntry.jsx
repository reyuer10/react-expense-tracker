import React, { useState } from "react";

export default function ExpensesEntry({ handleOpenModalTransaction }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="p-10 shadow-md rounded-xl">
      <div className="text-right">
        <button  onClick={handleOpenModalTransaction}>
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
      <div>
        <p className="text-md font-medium">Choose transactions</p>
      </div>
    </div>
  );
}
