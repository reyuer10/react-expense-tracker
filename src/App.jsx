import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";

// root
import RootLayout from "./root/RootLayout";

// pages
import DashBoard from "./pages/dashboard/DashBoard";
import Transactions from "./pages/Transactions";
import ExpensesEntry from "./pages/entry/ExpensesEntry";
// import ViewDetails from "./pages/view-details/ViewDetails";
import Bin from "./pages/Bin";
// import Income from "./pages/income/Income";
import Expenses from "./pages/expenses/Expenses";
import Draft from "./pages/dashboard/Draft";
import Settings from "./pages/settings/Settings";
import RecentActivities from "./pages/settings/RecentActivities";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="*" element={<DashBoard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/expenses" element={<Expenses />} />
          {/* <Route path="/income" element={<Income />} /> */}
          <Route path="/expenses-entry" element={<ExpensesEntry />} />
          <Route path="/settings" element={<Settings />} >
            <Route index  element={<RecentActivities />} />
          </Route>
          <Route path="/bin" element={<Bin />} />
          <Route path="/draft" element={<Draft />} />
          {/* <Route path="/transaction-details/:id" element={<ViewDetails />} /> */}
        </Route>
      </Routes>
    </>
  );
}
