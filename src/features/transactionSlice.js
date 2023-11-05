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
  bin: [],
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
    add_to_draft_expenses: (state, action) => {
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
        transactionType: "Expenses",
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
    add_to_draft_income: (state, action) => {
      const {
        draftIncomeCategory,
        draftIncomeTitle,
        draftIncomeAmount,
        draftIncomeDate,
        draftIncomeDescription,
      } = action.payload;
      const newIncomeDraftList = {
        toDraftId:
          state.draftList.length === 0
            ? 1
            : state.draftList[state.draftList.length - 1].toDraftId + 1,
        transactionType: "Income",
        toDraftCategory: draftIncomeCategory,
        toDraftTitle: draftIncomeTitle,
        toDraftAmount: parseFloat(draftIncomeAmount),
        toDraftDate: draftIncomeDate,
        toDraftDescription: draftIncomeDescription,
      };
      return {
        ...state,
        draftList: [...state.draftList, newIncomeDraftList],
      };
    },
    edit_draft_income: (state, action) => {
      const {
        updateIncomeCategory,
        updateIncomeTitle,
        updateIncomeAmount,
        updateIncomeDate,
        updateIncomeDescription,
        existingIncomeId,
      } = action.payload;
      return {
        ...state,
        draftList: state.draftList.map((draft) =>
          draft.id === existingIncomeId
            ? {
                ...draft,
                toDraftCategory: updateIncomeCategory,
                toDraftTitle: updateIncomeTitle,
                toDraftAmount: parseFloat(updateIncomeAmount),
                toDraftDate: updateIncomeDate,
                toDraftDescription: updateIncomeDescription,
              }
            : draft
        ),
      };
    },
    move_to_bin: (state, action) => {
      const { detailsExistingId } = action.payload;
      const removeTransaction = state.transactionList.find(
        (transac) => transac.transacId === detailsExistingId
      );

      if (!removeTransaction) {
        return state;
      }
  

      return {
        ...state,
        transactionList: state.transactionList.filter(
          (transac) => transac.transacId !== detailsExistingId
        ),
        bin: [...state.bin, removeTransaction],
      };
    },
    delete_bin: (state, action) => {
      const { existingBinId } = action.payload;
      return {
        ...state,
        bin: state.bin.filter(
          (transac) => transac.transacId !== existingBinId
        ),
      };
    },
  },
});

export const {
  income_transaction,
  open_modal,
  close_modal,
  expense_transaction,
  add_to_draft_expenses,
  add_to_draft_income,
  move_to_bin,
  delete_bin,
} = transactionSlice.actions;
export default transactionSlice.reducer;
