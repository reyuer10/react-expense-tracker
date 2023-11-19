import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";

export default function RootLayout() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-screen flex justify-center items-center">
        <SideNavBar />
      </div>
      <div className="flex-1 mx-3 flex justify-center items-center ">
        <Outlet />
      </div>
    </div>
  );
}
