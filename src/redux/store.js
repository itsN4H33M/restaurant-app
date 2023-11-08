import { configureStore } from "@reduxjs/toolkit";
import restoSlice from "./restoSlice";

const store = configureStore({
  reducer: {
    restoSlice,
  },
});

export default store;
