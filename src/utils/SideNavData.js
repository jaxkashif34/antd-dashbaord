import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { profileSVg, signInSvg, signUpSvg } from "./SignInUpData";
export const dashboard = (color) => [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
      fill={color}
    ></path>
    <path
      d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
      fill={color}
    ></path>
    <path
      d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
      fill={color}
    ></path>
  </svg>,
];

const getItem = (label, path, icon, pathName, color) => {
  return (
    <NavLink to={path}>
      <span
        className="icon"
        style={{
          background: pathName === path.replace("/", "") ? color : "",
        }}
      >
        {icon}
      </span>
      <span className="label">{label}</span>
    </NavLink>
  );
};
export const items = (pathname, color) => [
  {
    key: "1",
    label: getItem(
      "Dashboard",
      "/dashboard",
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        key={0}
      >
        <path
          d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
          fill={color}
        ></path>
        <path
          d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
          fill={color}
        ></path>
        <path
          d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
          fill={color}
        ></path>
      </svg>,
      pathname,
      color
    ),
  },
  {
    key: "2",
    label: getItem(
      "Tabels",
      "/tables",
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={0}
      >
        <path
          d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z"
          fill={color}
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z"
          fill={color}
        ></path>
      </svg>,
      pathname,
      color
    ),
  },
  {
    key: "3",
    label: getItem(
      "Billing",
      "/billing",
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={0}
      >
        <path
          d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z"
          fill={color}
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z"
          fill={color}
        ></path>
      </svg>,
      pathname,
      color
    ),
  },
  {
    key: "4",
    label: getItem(
      "RTL",
      "/rtl",
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={0}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 6C3 4.34315 4.34315 3 6 3H16C16.3788 3 16.725 3.214 16.8944 3.55279C17.0638 3.89157 17.0273 4.29698 16.8 4.6L14.25 8L16.8 11.4C17.0273 11.703 17.0638 12.1084 16.8944 12.4472C16.725 12.786 16.3788 13 16 13H6C5.44772 13 5 13.4477 5 14V17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17V6Z"
          fill={color}
        ></path>
      </svg>,
      pathname,
      color
    ),
  },

  {
    key: "5",
    label: getItem("Profile", "/profile", profileSVg, pathname, color),
  },
  {
    key: "6",
    label: getItem("Sign In", "/sign-in", signInSvg),
  },
  {
    key: "7",
    label: getItem("Sign Up", "/sign-up", signUpSvg),
  },
];

const MenuItem = ({ pathname, color }) => {
  return <Menu mode="inline" theme="light" items={items(pathname, color)} />;
};
export default MenuItem;
