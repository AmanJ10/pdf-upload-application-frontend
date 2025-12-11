import { configureStore } from "@reduxjs/toolkit";
import documentReducer from "../redux/documents/documentSlice";

export const store = configureStore({
  reducer: {
    documents: documentReducer,
  },
});
