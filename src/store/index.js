import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { persistStore, persistReducer } from "redux-persist";
import { storage } from "redux-persist/lib/storage";
const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice.reducer,
  },
});

export { store };
