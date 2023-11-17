import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_note } from "../../features/noteExpenses";

export default function NoteExpenses() {
  const noteList = useSelector((state) => state.note.noteList);
  const dispatch = useDispatch();
  const [noteValue, setNoteValue] = useState({
    title: "",
    body: "",
  });
  const [isButtonAddClick, setIsButtonAddClick] = useState(false);
  const [error, setError] = useState(null);
  const [valueError, setValueError] = useState(false);
  const handleOpenAdd = () => setIsButtonAddClick(true);
  const handleCancelAdd = () => setIsButtonAddClick(false);

  const handleNoteOnchange = (e) => {
    const { name, value } = e.target;

    setNoteValue({ ...noteValue, [name]: value });
  };

  const { title, body } = noteValue;

  const handleAddNote = () => {
    if (title.trim() === "") {
      setValueError(true);
      setError("Title is required.");
      return;
    }
    dispatch(
      add_note({
        noteTitleValue: title,
        noteBodyValue: body,
      })
    );

    setNoteValue({ ...noteValue, title: "", body: "" });
    handleCancelAdd();
    setValueError(false);
  };

  return (
    <div className="border border-slate-300 shadow-md rounded-[36px] h-[300px] p-5">
      <div className="px-3">
        {isButtonAddClick ? (
          <>
            <div className="flex py-2 space-x-2">
              <label htmlFor="titleId">Title: </label>
              <input
                className="w-full border border-slate-200 outline-none shadow-md rounded-full p-1 px-3"
                id="titleId"
                type="text"
                name="title"
                value={title}
                onChange={handleNoteOnchange}
              />
            </div>
            <div className="flex py-2 space-x-2">
              <label htmlFor="bodyId">Note: </label>
              <textarea
                className="w-full border border-slate-200 outline-none shadow-md rounded-2xl p-3"
                name="body"
                id="bodyId"
                cols="30"
                rows="5"
                value={body}
                onChange={handleNoteOnchange}
              ></textarea>
            </div>
            <div className="flex justify-between items-center">
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
            </div>
          </>
        ) : (
          <>
            <button
              className="flex items-center px-4 py-2 rounded-full bg-slate-700 text-white"
              onClick={handleOpenAdd}
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
              <span>Note</span>
            </button>
          </>
        )}
      </div>
      {isButtonAddClick ? null : (
        <>
          <div className="grid grid-cols-4 gap-3  w-[500px] overflow-y-auto h-[210px] py-2 px-1 ">
            {noteList.map((note) => (
              <div
                className="border boder-slate-300 shadow-md rounded-2xl p-5 h-[90px]"
                key={note.noteId}
              >
                <p className="font-semibold">{note.noteTitle}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
