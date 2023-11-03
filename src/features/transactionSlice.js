import { createSlice } from "@reduxjs/toolkit";
const initalValue = {
  transactionList: [
    {
      transacId: 1,
      transactionType: "Expenses",
      transacCategory: "Grocery Shopping",
      transacTitle: "Purchased groceries for the month",
      transacAmount: 150,
      transacDate: "October 24",
      transacDescription: "This is a sample description",
    },
    {
      transacId: 2,
      transactionType: "Income",
      transacCategory: "Monthly Salary",
      transacTitle: "Received monthly salary from XYZ Company",
      transacAmount: 3000,
      transacDate: "October 26",
      transacDescription: "This is a sample description",
    },
    {
      transacId: 3,
      transactionType: "Expenses",
      transacCategory: "Bills & Utilities",
      transacTitle: "Paid electricity and water bills",
      transacAmount: 80,
      transacDate: "October 27",
      transacDescription: "This is a sample description",
    },
  ],
  modalTransactions: false,
  balance: 1000,
  totalIncome: 0,
  totalExpenses: 0,
  draftList: [],
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState: initalValue,
  reducers: {
    income_transaction: (state, action) => {
      const { newCategory, newTitle, newAmount, newDate, newDescription } =
        action.payload;
      const transactionItem = {
        transacId:
          state.transactionList.length === 0
            ? 1
            : state.transactionList[state.transactionList.length - 1]
                .transacId + 1,
        transactionType: "Income",
        transacCategory: newCategory,
        transacTitle: newTitle,
        transacAmount: parseInt(newAmount),
        transacDate: newDate,
        transacDescription: newDescription,
      };
      return {
        ...state,
        transactionList: [...state.transactionList, transactionItem],
        balance: transactionItem.transacAmount + state.balance,
        totalIncome: transactionItem.transacAmount + state.totalIncome,
      };
    },
    expense_transaction: (state, action) => {
      const { eCategory, eTitle, eAmount, eDescription, eDate } =
        action.payload;
      const newExpense = {
        transacId:
          state.transactionList.length === 0
            ? 1
            : state.transactionList[state.transactionList.length - 1]
                .transacId + 1,
        transactionType: "Expenses",
        transacCategory: eCategory,
        transacTitle: eTitle,
        transacAmount: parseInt(eAmount),
        transacDate: eDate,
        transacDescription: eDescription,
      };
      return {
        ...state,
        transactionList: [...state.transactionList, newExpense],
        balance: state.balance - newExpense.transacAmount,
        totalExpenses: newExpense.transacAmount + state.totalExpenses,
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
    add_to_draft: (state, action) => {
      const {
        draftCategory,
        draftTitle,
        draftAmount,
        draftDate,
        draftDescription,
      } = action.payload;
      const newDraftList = {
        toDraftId:
          state.draftList.length === 0
            ? 1
            : state.draftList[state.draftList.length - 1].toDraftId + 1,
        transactionType: "Draft",
        toDraftCategory: draftCategory,
        toDraftTitle: draftTitle,
        toDraftAmount: parseFloat(draftAmount),
        toDraftDate: draftDate,
        toDraftDescription: draftDescription,
      };

      return {
        ...state,
        draftList: [...state.draftList, newDraftList],
      };
    },
  },
});

export const {
  income_transaction,
  open_modal,
  close_modal,
  expense_transaction,
  add_to_draft,
} = transactionSlice.actions;
export default transactionSlice.reducer;
