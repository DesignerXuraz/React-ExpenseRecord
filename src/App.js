import React, { Fragment } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/ExpenseDashboard";
import AddExpenses from "./components/AddExpense";
import EditExpense from "./components/EditExpense";

import HelpPage from "./components/HelpPage";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

//Redux
import { connect } from "react-redux";

const App = () => {
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
