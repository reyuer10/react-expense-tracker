import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";

// root
import RootLayout from "./root/RootLayout";

// pages
import DashBoard from "./pages/dashboard/DashBoard";
import Transactions from "./pages/Transactions";
import Expenses from "./pages/Expenses";
import Income from "./pages/Income";
import ExpensesEntry from "./pages/entry/ExpensesEntry";
import ViewDetails from "./pages/view-details/ViewDetails";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses-entry" element={<ExpensesEntry />} />
          <Route path="/transaction-details/:id" element={<ViewDetails />} />
        </Route>
      </Routes>
    </>
  );
}
