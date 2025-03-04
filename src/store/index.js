import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { persistStore, persistReducer, FLUSH, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleware } from "./middleware/logger-middleware";

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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      ignoredActions: [FLUSH, REGISTER],
      serializableCheck: false,
    }).prepend(loggerMiddleware.middleware),
});

const persistor = persistStore(store);
export { store, persistor };
