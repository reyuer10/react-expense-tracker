import { createSlice } from "@reduxjs/toolkit";
const initalValue = {
  transactionList: [
    {
      transacId: 1,
      transacCategory: "Grocery Shopping",
      transacTitle: "Purchased groceries for the month",
      transacAmount: 150,
      transacDate: "2023-10-15",
      transacDescription: "This is a sample description",
    },
    {
      transacId: 2,
      transacCategory: "Monthly Salary",
      transacTitle: "Received monthly salary from XYZ Company",
      transacAmount: 3000,
      transacDate: "2023-10-01",
      transacDescription: "This is a sample description",
    },
    {
      transacId: 3,
      transacCategory: "Bills & Utilities",
      transacTitle: "Paid electricity and water bills",
      transacAmount: 80,
      transacDate: "2023-10-10",
      transacDescription: "This is a sample description",
    },
  ],
  modalTransactions: false,
  balance: 1000,

};

export const transactionSlice = createSlice({
  
  name: "transactions",
  initialState: initalValue,
  reducers: {
    income_transaction: (state, action) => {
      const {
        newCategory,
        newTitle,
        newAmount,
        newDate,
        newDescription,
      } = action.payload;
      const transactionItem = {

        transacId:
          state.transactionList.length === 0
            ? 1
            : state.transactionList[state.transactionList.length - 1].transacId +
              1,
        transacCategory: newCategory,
        transacTitle: newTitle,
        transacAmount: parseInt(newAmount),
        transacDate: newDate,
        transacDescription: newDescription,
        
      };
      return {
        ...state,
        transactionList: [...state.transactionList, transactionItem],
        balance: (transactionItem.transacAmount + state.balance)
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

export const { income_transaction, open_modal, close_modal } =
  transactionSlice.actions;
export default transactionSlice.reducer;
