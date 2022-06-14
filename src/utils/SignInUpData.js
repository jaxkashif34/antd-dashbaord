import { Link } from "react-router-dom";
import { Iconify } from "utils/Iconify";
export const footerMenu = [
  { key: "1", label: "Company" },
  { key: "2", label: "About Us" },
  { key: "3", label: "Teams" },
  { key: "4", label: "Products" },
  { key: "5", label: "Blogs" },
  { key: "6", label: "Pricing" },
];
export const socialMenu = [
  {
    key: "1",
    icon: <Iconify icon="eva:globe-fill" width="18px" height="18px" />,
  },
  {
    key: "2",
    icon: <Iconify icon="eva:twitter-fill" width="18px" height="18px" />,
  },
  {
    key: "3",
    icon: (
      <Iconify icon="akar-icons:instagram-fill" width="18px" height="18px" />
    ),
  },
  {
    key: "4",
    icon: (
      <Iconify icon="akar-icons:pinterest-fill" width="18px" height="18px" />
    ),
  },
  {
    key: "5",
    icon: <Iconify icon="akar-icons:github-fill" width="18px" height="18px" />,
  },
];
export const signInSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 14 14"
    key="4"
    className="sign-up-icon"
  >
    <path
      className="fill-muted"
      d="M12.25,14H1.75A1.752,1.752,0,0,1,0,12.25V3.5A1.752,1.752,0,0,1,1.75,1.75h.876V.875a.875.875,0,0,1,1.75,0V1.75h5.25V.875a.875.875,0,0,1,1.75,0V1.75h.875A1.752,1.752,0,0,1,14,3.5v8.75A1.752,1.752,0,0,1,12.25,14ZM3.5,4.375a.875.875,0,0,0,0,1.75h7a.875.875,0,0,0,0-1.75Z"
    />
  </svg>
);
export const signUpSvg = (
  <svg
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key="3"
    className="sign-up-icon"
  >
    <path
      data-v-4ebdc598=""
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>
);
export const profileSVg = (
  <svg
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key="2"
    className="sign-up-icon"
  >
    <path
      data-v-4ebdc598=""
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>
);
const getLabel = (label, path, icon) => {
  return (
    <span style={{ color: "#8c8c8c" }}>
      <span>{icon}</span>
      <Link to={path}>{label}</Link>
    </span>
  );
};
export const items = [
  {
    key: "1",
    label: getLabel(
      "Dashboard",
      "/dashboard",
      <svg
        data-v-4ebdc598=""
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key="1"
        className="sign-up-icon"
      >
        <path
          data-v-4ebdc598=""
          d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
          fill="#111827"
          className="fill-muted"
        ></path>
        <path
          data-v-4ebdc598=""
          d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
          fill="#111827"
          className="fill-muted"
        ></path>
        <path
          data-v-4ebdc598=""
          d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
          fill="#111827"
          className="fill-muted"
        ></path>
      </svg>
    ),
  },
  {
    key: "2",
    label: getLabel("Profile", "/profile", profileSVg),
  },
  {
    key: "3",
    label: getLabel("Sign Up", "/sign-up", signUpSvg),
  },
  {
    key: "4",
    label: getLabel("Sign In", "/sign-in", signInSvg),
    path: "/sign-in",
  },
];
