import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  noteList: [],
};

export const noteExpensesSlice = createSlice({
  name: "note-expenses",
  initialState: initialValue,
  reducers: {
    add_note: (state, action) => {
      const { noteBodyValue, noteTitleValue } = action.payload;
      const newNote = {
        noteId:
          state.noteList.length === 0
            ? 1
            : state.noteList[state.noteList.length - 1].noteId + 1,
        noteTitle: noteTitleValue,
        noteBody: noteBodyValue,
      };
      return {
        ...state,
        noteList: [...state.noteList, newNote],
      };
    },
  },
});

export const { add_note } = noteExpensesSlice.actions;
export default noteExpensesSlice.reducer;
