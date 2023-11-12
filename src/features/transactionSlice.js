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
      viewed_status: true,
    },
    {
      transacId: 2,
      transactionType: "Income",
      transacCategory: "Monthly Salary",
      transacTitle: "Received monthly salary from XYZ Company",
      transacAmount: 3000,
      transacDate: "October 26",
      transacDescription: "This is a sample description",
      viewed_status: true,
    },
    {
      transacId: 3,
      transactionType: "Expenses",
      transacCategory: "Bills & Utilities",
      transacTitle: "Paid electricity and water bills",
      transacAmount: 80,
      transacDate: "October 27",
      transacDescription: "This is a sample description",
      viewed_status: true,
    },
  ],
  modalTransactions: false,
  balance: 1000,
  totalIncome: 0,
  totalExpenses: 0,
  draftList: [],
  bin: [],
  budgetList: [
    {
      budgetId: 4,
      budgetAmount: 2000,
      budgetCategory: "Grocery Shopping",
      budgetExpenses: 0,
      budgetPercentage: 100,
      isbuttonSaveClick: false,
      budetLimitExceed: false,
    },
  ],
  budgetDetailList: [
    {
      budetLimitExceed: false,
      budgetAmount: 1300,
      budgetCategory: "Bills & Utilities",
      budgetExpenses: 400,
      budgetId: 1,
      budgetPercentage: 100,
      isbuttonSaveClick: true,
    },
    {
      budetLimitExceed: false,
      budgetAmount: 800,
      budgetCategory: "Food",
      budgetExpenses: 300,
      budgetId: 2,
      budgetPercentage: 100,
      isbuttonSaveClick: true,
    },
    {
      budetLimitExceed: false,
      budgetAmount: 1500,
      budgetCategory: "Groceries",
      budgetExpenses: 1300,
      budgetId: 3,
      budgetPercentage: 100,
      isbuttonSaveClick: true,
    },
  ],
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
        viewed_status: false,
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
        viewed_status: false,
      };
      return {
        ...state,
        transactionList: [...state.transactionList, newExpense],
        balance: state.balance - newExpense.transacAmount,
        totalExpenses: newExpense.transacAmount + state.totalExpenses,
      };
    },
    viewed_transaction: (state, action) => {
      const { vId } = action.payload;
      return {
        ...state,
        transactionList: state.transactionList.map((transac) =>
          transac.transacId === vId
            ? {
                ...transac,
                viewed_status: true,
              }
            : transac
        ),
      };
    },
    edit_transaction: (state, action) => {
      const { tId, nCategory, nDate, nAmount, nTitle, nDescription, nType } =
        action.payload;
      return {
        ...state,
        transactionList: state.transactionList.map((transac) =>
          transac.transacId === tId
            ? {
                ...transac,
                transactionType: nType,
                transacCategory: nCategory,
                transacTitle: nTitle,
                transacAmount: parseInt(nAmount),
                transacDate: nDate,
                transacDescription: nDescription,
              }
            : transac
        ),
      };
    },
    draft_transaction: (state, action) => {
      const {
        addDraftCategory,
        addDraftTitle,
        addDraftAmount,
        addDraftDate,
        addDraftDescription,
        addTransactionType,
        draftExistingId,
      } = action.payload;

      const draftValue = {
        transacId:
          state.transactionList.length === 0
            ? 1
            : state.transactionList[state.transactionList.length - 1]
                .transacId + 1,
        transactionType: addTransactionType,
        transacCategory: addDraftCategory,
        transacTitle: addDraftTitle,
        transacAmount: parseInt(addDraftAmount),
        transacDate: addDraftDate,
        transacDescription: addDraftDescription,
      };

      return {
        ...state,
        transactionList: [...state.transactionList, draftValue],
        draftList: state.draftList.filter(
          (draft) => draft.toDraftId !== draftExistingId
        ),
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
    edit_draft: (state, action) => {
      const {
        updateDraftCategory,
        updateDraftTitle,
        updateDraftAmount,
        updateDraftDate,
        updateDraftDescription,
        existingDraftId,
      } = action.payload;

      return {
        ...state,
        draftList: state.draftList.map((draft) =>
          draft.toDraftId === existingDraftId
            ? {
                ...draft,
                toDraftCategory: updateDraftCategory,
                toDraftTitle: updateDraftTitle,
                toDraftAmount: parseFloat(updateDraftAmount),
                toDraftDate: updateDraftDate,
                toDraftDescription: updateDraftDescription,
              }
            : draft
        ),
      };
    },
    delete_draft: (state, action) => {
      const { dId } = action.payload;
      return {
        ...state,
        draftList: state.draftList.filter((draft) => draft.toDraftId !== dId),
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

      const binId =
        state.bin.length === 0
          ? 1
          : state.bin[state.bin.length - 1].transacId + 1;

      return {
        ...state,
        transactionList: state.transactionList.filter(
          (transac) => transac.transacId !== detailsExistingId
        ),
        bin: [...state.bin, { ...removeTransaction, transacId: binId }],
      };
    },
    delete_bin: (state, action) => {
      const { existingBinId } = action.payload;
      return {
        ...state,
        bin: state.bin.filter((transac) => transac.transacId !== existingBinId),
      };
    },
    restore_bin: (state, action) => {
      const { restoreBinId } = action.payload;
      const binExistingId = state.bin.find((b) => b.transacId === restoreBinId);
      return {
        ...state,
        bin: state.bin.filter((transac) => transac.transacId !== restoreBinId),
        transactionList: [...state.transactionList, binExistingId],
      };
    },
    add_budget_item: (state, action) => {
      const { GetAmount, GetCategory } = action.payload;
      const budget = {
        budgetId:
          state.budgetDetailList.length === 0
            ? 1
            : state.budgetDetailList[state.budgetDetailList.length - 1].budgetId + 1,
        budgetAmount: parseInt(GetAmount),
        budgetCategory: GetCategory,
        budgetExpenses: 0,
        budgetPercentage: 100,
        budetLimitExceed: false,
        isbuttonSaveClick: false,
        budgetExceedLimitMessage: "",
      };

      return {
        ...state,
        budgetList: [...state.budgetList, budget],
      };
    },

    add_expenses_budgetM: (state, action) => {
      const { bId, newEOneVal } = action.payload;

      const updateInfoFromBudgetDetailList = state.budgetDetailList.map(
        (detail) =>
          detail.budgetId === bId
            ? {
                ...detail,
                budgetExpenses: detail.budgetExpenses + parseInt(newEOneVal),
              }
            : detail
      );
      return {
        ...state,
        budgetList: state.budgetList.map((budget) =>
          budget.budgetId === bId
            ? {
                ...budget,
                budgetExpenses:
                  parseInt(budget.budgetExpenses) + parseInt(newEOneVal),
              }
            : budget
        ),
        budgetDetailList: updateInfoFromBudgetDetailList,
      };
    },
    remove_expenses_budget: (state, action) => {
      const { bMId } = action.payload;
      return {
        ...state,
        budgetList: state.budgetList.filter(
          (budget) => budget.budgetId !== bMId
        ),
      };
    },
    save_details_budget: (state, action) => {
      const { cMId } = action.payload;
      const dExistingId = state.budgetList.find(
        (budget) => budget.budgetId === cMId
      );
      const DetailId =
        state.budgetDetailList.length === 0
          ? 1
          : state.budgetDetailList[state.budgetDetailList.length - 1].budgetId +
            1;


        // For update save click
      const updateBudgetDetalList = [
        ...state.budgetDetailList,
        { ...dExistingId, budgetId: DetailId, isbuttonSaveClick: true },
      ];

      const updateSaveButtonFromBudgetList = state.budgetList.map((budget) =>
        budget.budgetId === cMId
          ? {
              ...budget,
              isbuttonSaveClick: true,
            }
          : budget
      );
      return {
        ...state,
        budgetDetailList: updateBudgetDetalList,
        budgetList: updateSaveButtonFromBudgetList,
      };
    },
    notification_budget: (state, action) => {
      const { nId, notificationValue } = action.payload;
      return {
        ...state,
        budgetList: state.budgetList.map((budget) =>
          budget.budgetId === nId
            ? {
                ...budget,
                budetLimitExceed: true,
                budgetExceedLimitMessage: notificationValue,
              }
            : budget
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
  viewed_transaction,
  add_to_draft_expenses,
  add_to_draft_income,
  move_to_bin,
  delete_bin,
  restore_bin,
  edit_draft,
  delete_draft,
  draft_transaction,
  add_budget_item,
  add_expenses_budgetM,
  remove_expenses_budget,
  exit_budget_management,
  notification_budget,
  edit_transaction,
  save_details_budget,
} = transactionSlice.actions;
export default transactionSlice.reducer;
