import { Iconify } from "utils/Iconify";
const data = [
  {
    title: "March, 01, 2021",
    description: "#MS-415646",
    amount: "$180",
  },
  {
    title: "February, 12, 2021",
    description: "#RV-126749",
    amount: "$250",
  },
  {
    title: "April, 05, 2020",
    description: "#FB-212562",
    amount: "$550",
  },
  {
    title: "June, 25, 2019",
    description: "#QW-103578",
    amount: "$400",
  },
  {
    title: "March, 03, 2019",
    description: "#AR-803481",
    amount: "$700",
  },
];
const information = [
  {
    title: "Oliver Liam",
    description: "Viking Burrito",
    address: "oliver@burrito.com",
    vat: "FRB1235476",
  },
  {
    title: "Lucas Harper",
    description: "Stone Tech Zone",
    address: "lucas@syone-tech.com",
    vat: "FRB1235476",
  },
  {
    title: "Oliver Liam",
    description: "ethan@fiber.com",
    vat: "NumberFRB1235476",
  },
];
const mins = [
  <svg
    width="10"
    height="10"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 10C5 9.44772 5.44772 9 6 9L14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11L6 11C5.44772 11 5 10.5523 5 10Z"
      className="fill-danger"
    ></path>
  </svg>,
];
const newest = [
  {
    avatar: mins,
    title: "Netflix",
    description: "27 March 2021, at 12:30 PM",
    amount: "- $2,500",
    textclass: "text-light-danger",
    amountcolor: "text-danger",
  },
  {
    avatar: <Iconify icon="akar-icons:plus" style={{ fontSize: 10 }} />,
    title: "Apple",
    description: "27 March 2021, at 04:30 AM",
    amount: "+ $2,000",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
];
const yesterday = [
  {
    avatar: <Iconify icon="akar-icons:plus" style={{ fontSize: 10 }} />,
    title: "Stripe",
    description: "26 March 2021, at 12:30 AM",
    amount: "+ $750",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    avatar: <Iconify icon="akar-icons:plus" style={{ fontSize: 10 }} />,
    title: "HubSpot",
    description: "26 March 2021, at 11:30 AM",
    amount: "+ $1,050",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    avatar: <Iconify icon="akar-icons:plus" style={{ fontSize: 10 }} />,
    title: "Creative Tim",
    description: "26 March 2021, at 07:30 AM",
    amount: "+ $2,400",
    textclass: "text-fill",
    amountcolor: "text-success",
  },
  {
    avatar: <Iconify icon="bi:exclamation-lg" style={{ fontSize: 10 }} />,
    title: "Webflow",
    description: "26 March 2021, at 04:00 AM",
    amount: "Pending",
    textclass: "text-warning",
    amountcolor: "text-warning-b",
  },
];
const calender = [
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];

const wifi = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 22.5 20.625"
    key={0}
  >
    <g id="wifi" transform="translate(0.75 0.75)">
      <circle
        id="Oval"
        cx="1.5"
        cy="1.5"
        r="1.5"
        transform="translate(9 16.875)"
        fill="#fff"
      ></circle>
      <path
        id="Path"
        d="M0,1.36a6.377,6.377,0,0,1,7.5,0"
        transform="translate(6.75 11.86)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      ></path>
      <path
        id="Path-2"
        data-name="Path"
        d="M14.138,2.216A12.381,12.381,0,0,0,0,2.216"
        transform="translate(3.431 6)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      ></path>
      <path
        id="Path-3"
        data-name="Path"
        d="M0,3.294a18.384,18.384,0,0,1,21,0"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      ></path>
    </g>
  </svg>,
];

const angle = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    key={0}
  >
    <g id="bank" transform="translate(0.75 0.75)">
      <path
        id="Shape"
        transform="translate(0.707 9.543)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      ></path>
      <path
        id="Path"
        d="M10.25,0,20.5,9.19H0Z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      ></path>
      <path
        id="Path-2"
        data-name="Path"
        d="M0,.707H20.5"
        transform="translate(0 19.793)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      ></path>
    </g>
  </svg>,
];
const download = [
  <svg
    width="15"
    height="15"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key="0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
      fill="#111827"
    ></path>
  </svg>,
];
const deletebtn = [
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
      fill="#111827"
      className="fill-danger"
    ></path>
  </svg>,
];
export {
  data,
  information,
  newest,
  yesterday,
  calender,
  wifi,
  angle,
  download,
  deletebtn,
};
