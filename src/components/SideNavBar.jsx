import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SideNavBar() {
  const [isDashBoardHover, setIsDashBoardHover] = useState(false);
  const [isTransactionsHover, setIsTransactionsHover] = useState(false);
  const [isExpensesHover, setIsExpensesHover] = useState(false);
  const [isIncomeHover, setIsIncomeHover] = useState(false);

  return (
    <div className="flex flex-col m-7 space-y-8 items-center0 h-[80vh] p-3 py-5 rounded-2xl border-none  shadow-md ring-2 ring-slate-200">
      <Link to="/" className="relative flex items-center">
        <div
          onMouseEnter={() => setIsDashBoardHover(true)}
          onMouseLeave={() => setIsDashBoardHover(false)}
          className="p-3 shadow-md rounded-xl hover:bg-slate-100 duration-75"
        >
          <svg
            className="fill-current text-[#303030]"
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
            <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
            <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
            <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
          </svg>
        </div>
        {isDashBoardHover && (
          <>
            <div className="absolute left-0 top-0 my-1 mx-16 shadow-md bg-white px-4 py-2 rounded-lg text-[#303030] font-medium">
              <p>Dashboard</p>
            </div>
          </>
        )}
      </Link>

      <Link to="/transactions" className="relative flex items-center">
        <div
          onMouseEnter={() => setIsTransactionsHover(true)}
          onMouseLeave={() => setIsTransactionsHover(false)}
          className="p-3 shadow-md rounded-xl hover:bg-slate-100"
        >
          <svg
            className="fill-current text-[#303030]"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-circle-down"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M0,7A1,1,0,0,1,1,6H18V2.639a.792.792,0,0,1,1.35-.552l4.418,4.361a.773.773,0,0,1,0,1.1L19.35,11.913A.792.792,0,0,1,18,11.361V8H1A1,1,0,0,1,0,7Zm23,9H6V12.639a.792.792,0,0,0-1.35-.552L.232,16.448a.773.773,0,0,0,0,1.1L4.65,21.913A.792.792,0,0,0,6,21.361V18H23a1,1,0,0,0,0-2Z" />
          </svg>
        </div>
        {isTransactionsHover && (
          <>
            <div className="absolute left-0 top-0 my-1 mx-16 shadow-md bg-white px-4 py-2 rounded-lg text-[#303030] font-medium">
              <p>Transactions</p>
            </div>
          </>
        )}
      </Link>
      <Link to="/expenses" className="relative flex items-center">
        <div
          onMouseEnter={() => setIsExpensesHover(true)}
          onMouseLeave={() => setIsExpensesHover(false)}
          className="p-3 shadow-md rounded-xl hover:bg-slate-100"
        >
          <svg
            className="fill-current text-[#303030]"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M21,6H5c-.859,0-1.672-.372-2.235-.999,.55-.614,1.349-1.001,2.235-1.001H23c.553,0,1-.448,1-1s-.447-1-1-1H5C2.239,2,0,4.239,0,7v10c0,2.761,2.239,5,5,5H21c1.657,0,3-1.343,3-3V9c0-1.657-1.343-3-3-3Zm1,13c0,.551-.448,1-1,1H5c-1.654,0-3-1.346-3-3V6.998c.854,.639,1.904,1.002,3,1.002H21c.552,0,1,.449,1,1v10Zm-2-5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z" />
          </svg>
        </div>
        {isExpensesHover && (
          <>
            <div className="absolute left-0 top-0 my-1 mx-16 shadow-md bg-white px-4 py-2 rounded-lg text-[#303030] font-medium">
              <p>Expenses</p>
            </div>
          </>
        )}
      </Link>
      <Link to="/income" className="relative flex items-center">
        <div
          onMouseEnter={() => setIsIncomeHover(true)}
          onMouseLeave={() => setIsIncomeHover(false)}
          className="p-3 shadow-md rounded-xl hover:bg-slate-100"
        >
          <svg
            className="fill-current text-[#303030]"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M23.02,8.79c-.59-.54-1.36-.81-2.17-.78-.8,.04-1.54,.39-2.09,.98l-3.22,3.53c-.55-.91-1.55-1.52-2.69-1.52H4c-2.21,0-4,1.79-4,4v5c0,2.21,1.79,4,4,4h4.96c2.85,0,5.57-1.22,7.47-3.35l6.81-7.64c1.09-1.23,.99-3.12-.22-4.23Zm-1.27,2.9l-6.81,7.64c-1.52,1.7-3.69,2.68-5.97,2.68H4c-1.1,0-2-.9-2-2v-5c0-1.1,.9-2,2-2H12.86c.63,0,1.14,.51,1.14,1.14,0,.56-.42,1.05-.98,1.13l-5.16,.74c-.55,.08-.93,.58-.85,1.13,.08,.55,.59,.93,1.13,.85l5.16-.74c1.18-.17,2.13-.99,2.51-2.06l4.43-4.86c.18-.2,.43-.32,.7-.33,.27,0,.53,.08,.73,.26,.41,.37,.44,1.01,.07,1.42Z" />
            <path d="M9,10h.38c1.45,0,2.62-1.18,2.62-2.62,0-1.29-.92-2.38-2.19-2.59l-3.28-.55c-.3-.05-.52-.31-.52-.62,0-.34,.28-.62,.62-.62h2.64c.36,0,.69,.19,.87,.5,.27,.48,.88,.64,1.37,.36,.48-.28,.64-.89,.36-1.37-.53-.92-1.53-1.5-2.6-1.5h-.27c0-.55-.45-1-1-1s-1,.45-1,1h-.38c-1.45,0-2.62,1.18-2.62,2.62,0,1.29,.92,2.38,2.19,2.59l3.28,.55c.3,.05,.52,.31,.52,.62,0,.34-.28,.62-.62,.62h-2.64c-.36,0-.69-.19-.87-.5-.28-.48-.89-.64-1.37-.36-.48,.28-.64,.89-.36,1.37,.53,.92,1.53,1.5,2.6,1.5h.27c0,.55,.45,1,1,1s1-.45,1-1Z" />
          </svg>
        </div>
        {isIncomeHover && (
          <>
            <div className="absolute left-0 top-0 my-1 mx-16 shadow-md bg-white px-4 py-2 rounded-lg text-[#303030] font-medium">
              <p>Income</p>
            </div>
          </>
        )}
      </Link>
    </div>
  );
}
