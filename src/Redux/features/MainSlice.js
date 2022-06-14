import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  placement: "right",
  sideNavColor: "#1890ff",
  sideNavType: "transparent",
  navFixed: false,
  openSidebar: false,
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    openDrawer: (state, { payload }) => {
      state.visible = payload != null ? payload : !state.visible;
    },
    handleSidebar: (state, { payload }) => {
      state.openSidebar = payload != null ? payload : !state.openSidebar;
    },
    handleSidenavType: (state, { payload }) => {
      state.sideNavType = payload;
    },
    handleSideNavColor: (state, { payload }) => {
      state.sideNavColor = payload;
    },
    handleFixedNavbar: (state, { payload }) => {
      state.navFixed = payload;
    },
    setPlaceMent: (state, { payload }) => {
      state.placement = payload;
    },
  },
});

export const {
  openDrawer,
  handleFixedNavbar,
  handleSideNavColor,
  handleSidenavType,
  setPlaceMent,
  handleSidebar,
} = mainSlice.actions;
export default mainSlice.reducer;
