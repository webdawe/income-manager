import { addExpenseAction, setIncomeAction } from "store/expense/expense-slice";

const { createListenerMiddleware, isAnyOf } = require("@reduxjs/toolkit");

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  /*predicate: (action) => {
    return true;
  },*/
  matcher: isAnyOf(setIncomeAction, addExpenseAction),
  effect: async (action, listenerAPI) => {
    console.log("Action: ", action);
    console.log("New Store Value", listenerAPI.getState());
  },
});
