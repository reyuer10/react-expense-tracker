import React from "react";

export default function ButtonAddCancel({valueError, handleAddNote, handleCancelAdd, error}) {
  return (
    <>
      <div>
        {valueError ? (
          <>
            <p className="text-red-400">{error}</p>
          </>
        ) : null}
      </div>
      <div className="space-x-2">
        <button
          className="px-4 py-2 rounded-full bg-slate-700 text-white shadow-md"
          onClick={handleAddNote}
        >
          Add
        </button>
        <button
          className="px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 shadow-md border border-slate-200"
          onClick={handleCancelAdd}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
