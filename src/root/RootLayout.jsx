import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";

export default function RootLayout() {
  return (
    <div className="flex">
      <div>
        <SideNavBar />
      </div>
      <div className="m-10">
        <Outlet />
      </div>
    </div>
  );
}
