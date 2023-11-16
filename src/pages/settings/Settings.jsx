import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Settings() {
  return (
    //
    <div className="border h-[700px] rounded-[36px] font-outfit text-slate-700 shadow-md">
      <div>
        <p className="p-5 text-4xl font-semibold">Settings</p>
      </div>
      <div className="flex m-10">
        <div className="  p-5 w-[300px] ">
          <Link className="flex space-x-2" to="/settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12,0A11.972,11.972,0,0,0,4,3.073V1A1,1,0,0,0,2,1V4A3,3,0,0,0,5,7H8A1,1,0,0,0,8,5H5a.854.854,0,0,1-.1-.021A9.987,9.987,0,1,1,2,12a1,1,0,0,0-2,0A12,12,0,1,0,12,0Z" />
              <path d="M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414L13,11.586V7A1,1,0,0,0,12,6Z" />
            </svg>
            <span>Recent Activies</span>
          </Link>
        </div>
        <div className="border h-[550px]  overflow-y-auto rounded-3xl p-5 mx-10 shadow-md ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
