import { createStore, combineReducers } from "redux";
import expensesReducers from "../reducers/expensesReducers";
import filtersReducers from "../reducers/filtersReducers";

//////////////////////////////    STORE      //////////////////////////////////////
export default () => {
  //Store (First)
  const store = createStore(
    combineReducers({
      expenses: expensesReducers, //key:value
      filters: filtersReducers
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
