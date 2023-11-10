import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sideNav } from "./svg_navbar/navBarSvg";
import { useSelector } from "react-redux";

export default function SideNavBar() {
  const transaction = useSelector((state) => state.transaction.transactionList);
  const [isNameHover, SetIsNameHover] = useState(null);

  const handleOpenHover = (id) => {
    SetIsNameHover(id);
  };

  const handleClosenHover = () => {
    SetIsNameHover(null);
  };

  const viewedStatus = transaction.filter(
    (transac) => transac.viewed_status === false
  );

  return (
    <div className="flex flex-col my-7 mx-3 h-[calc(100vh-190px)] space-y-8 items-center p-3 py-5 rounded-2xl border-none shadow-md ring-2 ring-slate-200">
      {sideNav.map((nav) => (
        <Link
          to={`${nav.link}`}
          key={nav.id}
          className="relative flex items-center"
        >
          <div
            onMouseEnter={() => handleOpenHover(nav.id)}
            onMouseLeave={() => handleClosenHover(nav.id)}
            className="p-3 shadow-md rounded-xl hover:bg-slate-100 duration-75"
          >
            {nav.svg}
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
          </div>
          {isNameHover === nav.id && (
            <>
              <div className="absolute left-0 top-0 my-1 mx-16 shadow-md bg-white px-4 py-2 rounded-lg text-[#303030] font-medium">
                <p>{nav.name}</p>
              </div>
            </>
          )}
        </Link>
      ))}
    </div>
  );
}
