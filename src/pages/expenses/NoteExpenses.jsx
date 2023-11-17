import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_note } from "../../features/noteExpenses";
import ButtonAddNote from "./note/ButtonAddNote";
import ButtonAddCancel from "./note/ButtonAddCancel";
import NoteList from "./note/NoteList";

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
                className="w-[429px] border border-slate-200 outline-none shadow-md rounded-2xl p-3"
                name="body"
                id="bodyId"
                cols="30"
                rows="5"
                value={body}
                onChange={handleNoteOnchange}
              ></textarea>
            </div>
            <div className="flex justify-between items-center">
              <ButtonAddCancel
                error={error}
                valueError={valueError}
                handleAddNote={handleAddNote}
                handleCancelAdd={handleCancelAdd}
              />
            </div>
          </>
        ) : (
          <>
            <ButtonAddNote handleOpenAdd={handleOpenAdd} />
          </>
        )}
      </div>
      {isButtonAddClick ? null : (
        <>
          <div className="grid grid-cols-4 gap-3 w-[500px] overflow-y-auto h-[210px] py-2 px-1 ">
            {noteList.map((note) => (
              <NoteList note={note} key={note.noteId} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
