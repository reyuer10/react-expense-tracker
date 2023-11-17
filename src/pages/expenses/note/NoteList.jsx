import React from "react";

export default function NoteList({note}) {
  return (
    <>
      <div
        className="border boder-slate-300 shadow-md rounded-2xl p-5 h-[90px]"
        key={note.noteId}
      >
        <p className="font-semibold overflow-x-hidden overflow-y-hidden h-14">
          {note.noteTitle}
        </p>
      </div>
    </>
  );
}
