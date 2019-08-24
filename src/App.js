import React, { Fragment } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/ExpenseDashboard";
import AddExpenses from "./components/AddExpense";
import EditExpense from "./components/EditExpense";
import ExpenseList from "./components/ExpenseList";
import HelpPage from "./components/HelpPage";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

//Redux
import { store } from "./index";
import { connect } from "react-redux";
import getVisibleExpenses from "./selectors/getCombine";
//import configureStore from "./store/configureStore";
import { addExpenses } from "./actions/expensesActions";
import { setTextFilter } from "./actions/filtersActions";

const App = () => {
  store.dispatch(
    addExpenses({
      description: "Water bill",
      amount: 5000
    })
  );

  store.dispatch(
    addExpenses({
      description: "Electricity bill",
      amount: 1000,
      note: "very expensive",
      createdAt: 1000
    })
  );

  const state = store.getState();
  const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(VisibleExpenses);
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/add" component={AddExpenses} />
        <Route exact path="/edit/:id" component={EditExpense} />
        <Route exact path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default connect()(App);
