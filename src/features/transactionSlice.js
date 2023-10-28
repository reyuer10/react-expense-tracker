import { createSlice } from "@reduxjs/toolkit";

const initalValue = {
  transactionList: [
    {
      incomeId: 1,
      incomeCategory: "Grocery Shopping",
      incomeTitle: "Purchased groceries for the month",
      incomeAmount: 150,
      incomeDate: "2023-10-15",
      incomeDescription: "This is a sample description",
    },
    {
      incomeId: 2,
      incomeCategory: "Monthly Salary",
      incomeTitle: "Received monthly salary from XYZ Company",
      incomeAmount: 3000,
      incomeDate: "2023-10-01",
      incomeDescription: "This is a sample description",
    },
    {
      incomeId: 3,
      incomeCategory: "Bills & Utilities",
      incomeTitle: "Paid electricity and water bills",
      incomeAmount: 80,
      incomeDate: "2023-10-10",
      incomeDescription: "This is a sample description",
    },
  ],
  modalTransactions: false,
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState: initalValue,
  reducers: {
    new_transaction: (state, action) => {
      const {
        newCategory,
        newTitle,
        newAmount,
        newDate,
        newDescription,
      } = action.payload;
      const transactionItem = {
        incomeId:
          state.transactionList.length === 0
            ? 1
            : state.transactionList[state.transactionList.length - 1].incomeId +
              1,
        incomeCategory: newCategory,
        incometitle: newTitle,
        incomeAmount: newAmount,
        incomeDate: newDate,
        incomeDescription: newDescription,
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
