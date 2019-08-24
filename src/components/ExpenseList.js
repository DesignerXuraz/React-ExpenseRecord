import React, { Fragment } from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";
import getCombine from "../selectors/getCombine";
import ExpenseListFilter from "./ExpenseListFilter"; //FORM
const ExpenseList = props => {
  //Form & Expense list item chaiyo
  //Tala ko props vayer aunxa
  return (
    <Fragment>
      <h1>ExpenseList</h1>
      <ExpenseListFilter />
      {props.expenses.map(expense => {
        return <ExpensesListItem key={expense.id} {...expense} />;
      })}
    </Fragment>
  );
};

const mapStateToProps = state => {
  //this func let us determine what info from store we want our component to access
  return {
    expenses: getCombine(state.expenses, state.filters) //expenses = props that we pass up...
  };
};
export default connect(mapStateToProps)(ExpenseList);
