import dashboard from "../../assets/fill-svg/apps.png";
import walletPNG from "../../assets/fill-svg/walletPNG.png";
import trashBin from "../../assets/fill-svg/trash.png";
import handDollar from "../../assets/fill-svg/hand-holding-usd.png";
import document_fill from "../../assets/fill-svg/document.png";

export const sideNav = [
  {
    id: 1,
    svg: (
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
    ),
    fill_svg: <img src={dashboard} style={{ height: "24px" }} alt="apps" />,
    link: "/",
    name: "Dashboard",
  },

  {
    id: 2,
    svg: (
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
    ),
    fill_svg: (
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
    ),
    link: "/transactions",
    name: "Transactions",
  },
  {
    id: 3,
    svg: (
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
    ),
    fill_svg: <img src={walletPNG} style={{ height: "24px" }} alt="wallet" />,
    link: "/expenses",
    name: "Expenses",
  },
  {
    id: 4,
    svg: (
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
    ),
    fill_svg: (
      <img src={handDollar} style={{ height: "24px" }} alt="hand-dollar" />
    ),
    link: "/income",
    name: "Income",
  },
  {
    id: 5,
    svg: (
      <svg
        id="Layer_1"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
      >
        <path d="m17 14a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-4 3h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm9-6.515v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486a6.951 6.951 0 0 1 2.051 4.949zm-6.949-7.021a5.01 5.01 0 0 0 -1.051-.78v4.316a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0 -.781-1.05zm4.949 7.021c0-.165-.032-.323-.047-.485h-4.953a3 3 0 0 1 -3-3v-4.953c-.162-.015-.321-.047-.485-.047h-4.515a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z" />
      </svg>
    ),
    fill_svg: <img src={document_fill} style={{ height: "24px" }} alt="document" />,
    link: "/draft",
    name: "Draft",
  },
  {
    id: 6,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <g id="_01_align_center" data-name="01 align center">
          <path d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z" />
          <rect x="9" y="10" width="2" height="8" />
          <rect x="13" y="10" width="2" height="8" />
        </g>
      </svg>
    ),
    fill_svg: <img src={trashBin} style={{ height: "24px" }} alt="trash" />,
    link: "/bin",
    name: "Bin",
  },
];
