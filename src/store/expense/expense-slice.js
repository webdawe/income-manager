const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    expenseList: [],
    countActionPerformed: 0,
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload);
    },
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    incrementAction: (currentSlice, action) => {
      currentSlice.countActionPerformed += action.payload;
    },
  },
});

export const { addExpenseAction, setIncomeAction, incrementAction } =
  expenseSlice.actions;
