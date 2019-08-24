import React, { Fragment } from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpenses } from "../actions/expensesActions";
const AddExpense = props => {
  return (
    <Fragment>
      <h1>AddExpense</h1>
      <ExpenseForm //handleSubmit vaneko props ho that contain desc,amnt,not
        handleSubmit={expenses => {
          //empty hunxa hamle add garko kura...
          console.log("adding", expenses);
          props.dispatch(addExpenses(expenses));
          props.history.push("/");
        }}
      />
    </Fragment>
  );
};

export default connect()(AddExpense);
