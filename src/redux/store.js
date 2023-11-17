import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/transactionSlice";
import noteExpensesReducer from '../features/noteExpenses';

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    note: noteExpensesReducer,
  },
});
