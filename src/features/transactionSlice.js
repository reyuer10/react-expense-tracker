import { createSlice } from "@reduxjs/toolkit";

const initalValue = {
  transactionList: [
    {
      id: 1,
      category: "Grocery Shopping",
      title: "Purchased groceries for the month",
      amount: 150,
      date: "2023-10-15",
    },
    {
      id: 2,
      category: "Monthly Salary",
      title: "Received monthly salary from XYZ Company",
      amount: 3000,
      date: "2023-10-01",
    },
    {
      id: 3,
      category: "Bills & Utilities",
      title: "Paid electricity and water bills",
      amount: 80,
      date: "2023-10-10",
    },
  ],
  modalTransactions: false,
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState: initalValue,
  reducers: {
    new_transaction: (state, action) => {
      const { newCategory, newTitle, newAmount, newDate } = action.payload;
      const transactionItem = {
        id:
          state.transactionList.length === 0
            ? 1
            : state.transactionList[state.transactionList.length - 1].id + 1,
        category: newCategory,
        title: newTitle,
        amount: newAmount,
        date: newDate,
      };
      return {
        ...state,
        transactions: [...state.transactionList, transactionItem],
      };
    },
    open_modal: (state) => {
      return {
        ...state,
        modalTransactions: true,
      };
    },
    close_modal: (state) => {
      return {
        ...state,
        modalTransactions: false,
      };
    },
  },
});

export const { new_transaction, open_modal, close_modal } =
  transactionSlice.actions;
export default transactionSlice.reducer;
