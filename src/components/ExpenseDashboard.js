import React, { Fragment } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
const ExpenseDashboard = () => {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <ExpenseSummary />
      <ExpenseList />
    </Fragment>
  );
};

export default ExpenseDashboard;
