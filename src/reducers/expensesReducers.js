/////////////////////////////////////// EXPENSES REDUCER   ///////////////////////////////////////
//Expenses Reducer Default State
const expensesReducerDefaultState = [];

//Pure function  (Second)
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSES":
      return [...state, action.expenses];
    case "REMOVE_EXPENSES":
      return state.filter(expense => {
        return expense.id !== action.id;
      });
    case "EDIT_EXPENSES":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

export default expensesReducer;
