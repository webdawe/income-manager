import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  EXPENSE: expenseSlice.reducer,
});
const persistConfig = {
  key: "expensemanagerRoot",
  storage: storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducers,
});

const persistor = persistStore(store);
export { store, persistor };
