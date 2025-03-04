const { createListenerMiddleware } = require("@reduxjs/toolkit");

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  predicate: (action) => {
    return true;
  },
  effect: async (action, listenerAPI) => {
    console.log("Action: ", action);
    console.log("New Store Value", listenerAPI.getState());
  },
});
