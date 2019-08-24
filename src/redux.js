import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//import configureStore from "./store/configureStore";

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
        return expense.id !== action.id; //true = out; false = in;
      });
    case "EDIT_EXPENSES":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            update: action.update
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

///////////////////////////////////      FILTER REDUCER       ////////////////////////////////////

//Filters Reducer Default State
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endData: undefined
};

//Pure function
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text //user le j type garxa tyo i.e e.target.value
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.date
      };
    default:
      return state;
  }
};

//////////////////////////////    STORE      //////////////////////////////////////
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof StareDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1; // -1 i.e a comes first 1 i.e b comes first
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//Store (First)
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

//Subscribe
store.subscribe(() => {
  const state = store.getState();
  const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(VisibleExpenses);
});

////////////////////////////////  EXPENSES ACTION GENERATOR      /////////////////////////////////////

//ADD_EXPENSES action generator
const addExpenses = ({
  description = "", //default value
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => {
  //{}={} destructing empty objects
  //impliclitly return
  return {
    type: "ADD_EXPENSES", //bcz of this we can use action.type & action.sth
    expenses: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
};

//REMOVE_EXPENSES action generator
const removeExpenses = id => {
  return {
    type: "REMOVE_EXPENSES",
    id
  };
};

//EDIT_EXPENSES action generator
const editExpenses = (id, update) => ({
  type: "EDIT_EXPENSES",
  id,
  update
});

////////////////////////////////  FILTER ACTION GENERATOR      /////////////////////////////////////

//TEXT FILTER
const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text
  };
};

//SORT BY AMOUNT
const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT"
  };
};

//SORT BY DATE
const sortByDate = () => {
  return {
    type: "SORT_BY_DATE"
  };
};

const setStartDate = date => {
  return {
    type: "SET_START_DATE",
    date
  };
};

const setEndDate = date => {
  return {
    type: "SET_END_DATE",
    date
  };
};

//////////////////////     SUBSCRIBE        ////////////////////////////////////

//////////////////////////    ACTION DISPATCH EXPENSE    ////////////////////////////////

//ADD EXPENSES
const expenseOne = store.dispatch(
  addExpenses({ description: "Coffee", amount: 50 })
);

const expenseTwo = store.dispatch(
  addExpenses({ description: "Expenses", amount: 5000 })
);

const expenseThree = store.dispatch(
  addExpenses({
    description: "Fixed Deposit",
    amount: 350000,
    note: "On my birthdate"
  })
);

//REMOVE EXPENSES
store.dispatch(removeExpenses({ id: expenseTwo.expenses.id }));

//EDIT EXPENSES
store.dispatch(editExpenses({ id: expenseOne.expenses.id, amount: 30000 }));

//////////////////////////    ACTION DISPATCH FILTER    ////////////////////////////////

//TEXT FILTER
//store.dispatch(setTextFilter("fixed"));

//SORT BY DATE
//store.dispatch(sortByDate());

//SORT BY AMOUNT
//store.dispatch(sortByAmount());

//store.dispatch(setStartDate(123));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1234));

const demoState = {
  expenses: [
    {
      id: 1,
      description: "august deposit", //for search text we are looking @ desc...
      note: "Final saving for this month",
      amount: 15000,
      createdAt: "date" //stareDate,endDate
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //amount or date
    startDate: undefined,
    endData: undefined
  }
};
