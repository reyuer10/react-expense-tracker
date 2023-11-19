import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sideNav } from "./svg_navbar/navBarSvg";
import { useSelector } from "react-redux";

export default function SideNavBar() {
  const transaction = useSelector((state) => state.transaction.transactionList);
  const budgetDetailList = useSelector(
    (state) => state.transaction.budgetDetailList
  );
  const [isNameHover, SetIsNameHover] = useState(null);
  const [navId, setNavId] = useState("");

  const handleFillButton = (itemId) => {
    setNavId(itemId);
  };

  // Load navId from local storage on component mount
  useEffect(() => {
    const storedNavId = localStorage.getItem("navId");
    if (storedNavId) {
      setNavId(storedNavId);
    }
  }, []);

  // Save navId to local storage when it changes
  useEffect(() => {
    localStorage.setItem("navId", navId);
  }, [navId]);

  // Hover name of an item
  const handleOpenHover = (id) => {
    SetIsNameHover(id);
  };

  const handleClosenHover = () => {
    SetIsNameHover(null);
  };

  // For viewed status when added a transaction
  const viewedStatus = transaction.filter(
    (transac) => transac.viewed_status === false
  );

  const budgetViewedStatus = budgetDetailList.filter(
    (budget) => budget.isUserSeen === false
  );

  return (
    <div className="flex md:flex-col my-7 mx-3  space-y-8 items-center p-3 py-5 rounded-2xl shadow-md border border-slate-200 max-md:fixed max-md:bottom-0 max-md:h-20 max-md:left-0 max-md:right-0 max-md:my-0 max-md:mx-0 max-md:rounded-none max-md:rounded-t-[32px] max-md:justify-center max-md:space-y-0 max-md:bg-white">
      {sideNav.map((nav) => (
        <Link
          to={`${nav.link}`}
          key={nav.id}
          className="relative flex items-center"
        >
          <button
            onMouseEnter={() => handleOpenHover(nav.id)}
            onMouseLeave={() => handleClosenHover(nav.id)}
            className={`${
              navId === nav.link
                ? " bg-gradient-to-r from-slate-100 to-slate-200"
                : "hover:bg-slate-100"
            } ${
              nav.id === 4 || nav.id === 6 ? "max-md:hidden" : ""
            } p-3 shadow-md rounded-xl max-md:mx-3 duration-75 border border-slate-200`}
            onClick={() => handleFillButton(nav.link)}
          >
            {navId === nav.link ? <>{nav.fill_svg}</> : <> {nav.svg}</>}
            {nav.id === 2 && (
              <>
                {viewedStatus.length === 0 ? null : (
                  <>
                    <div>
                      <p className=" absolute text-white rounded-full font-outfit -top-2 -right-1 h-6 w-6 text-center bg-red-400">
                        {viewedStatus.length}
                      </p>
                    </div>
                  </>
                )}
              </>
            )}
            {nav.id === 3 && (
              <>
                {budgetViewedStatus.length === 0 ? null : (
                  <>
                    <div
                     
                    >
                      <p className=" absolute text-white rounded-full font-outfit -top-2 -right-1 h-6 w-6 text-center bg-red-400">
                        {budgetViewedStatus.length}
                      </p>
                    </div>
                  </>
                )}
              </>
            )}
          </button>
          {isNameHover === nav.id && (
            <>
              <div
                className={`${
                  nav.id === 1 || nav.id === 2 || nav.id === 3 || nav.id === 5 ? "max-md:hidden" : ""
                } absolute left-0 top-0 my-1 mx-16 shadow-md bg-white px-4 py-2 rounded-lg text-[#303030] font-medium`}
              >
                <p>{nav.name}</p>
              </div>
            </>
          )}
        </Link>
      ))}
    </div>
  );
}
