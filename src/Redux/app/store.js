import { configureStore } from "@reduxjs/toolkit";
import  mainSlice  from "Redux/features/MainSlice";
export const store = configureStore({
  reducer: {
    mainSlice,
  },
});
