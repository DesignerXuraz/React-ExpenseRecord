import React, { Fragment } from "react";
import ExpenseList from "./ExpenseList";
const ExpenseDashboard = () => {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <ExpenseList />
    </Fragment>
  );
};

export default ExpenseDashboard;
