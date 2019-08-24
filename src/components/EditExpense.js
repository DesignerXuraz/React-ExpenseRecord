import React, { Fragment } from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpenses, removeExpenses } from "../actions/expensesActions";

const EditExpense = props => {
  console.log("edit", props.expense);
  return (
    <Fragment>
      <ExpenseForm
        expense={props.expense} //match vako expense matra
        handleSubmit={expense => {
          // console.log("edit", expense);
          props.dispatch(editExpenses(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpenses({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        {" "}
        Delete{" "}
      </button>
    </Fragment>
  );
};
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      //expense vaneko hamle pass gareko expense id ra state ma vako id match vako expense matra.
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpense);
