import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Notifcation() {
  const dispatch = useDispatch();
  const budgetList = useSelector((state) => state.transaction.budgetList);
  const [isButtonClick, setIsButtonClick] = useState(false);

  const handleButtonClick = () => setIsButtonClick(!isButtonClick);

  return (
    <div>
      <button onClick={handleButtonClick} className="mx-10">
        <svg
          className="fill-current text-[#303030]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <g id="_01_align_center" data-name="01 align center">
            <path d="M23.259,16.2l-2.6-9.371A9.321,9.321,0,0,0,2.576,7.3L.565,16.35A3,3,0,0,0,3.493,20H7.1a5,5,0,0,0,9.8,0h3.47a3,3,0,0,0,2.89-3.8ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm9.165-4.395a.993.993,0,0,1-.8.395H3.493a1,1,0,0,1-.976-1.217l2.011-9.05a7.321,7.321,0,0,1,14.2-.372l2.6,9.371A.993.993,0,0,1,21.165,17.605Z" />
          </g>
        </svg>
      </button>
      {!isButtonClick && (
        <div>
          {budgetList.map((budget) => (
            <div className="" key={budget.budgetId}>
              <p>{budget.budgetExceedLimitMessage}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
