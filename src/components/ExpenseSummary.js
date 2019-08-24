import React, { Fragment } from "react";
import { connect } from "react-redux";
import getCombine from "../selectors/getCombine";
import expensesTotal from "../selectors/expenses-total";
const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === "1" ? "expense" : "expenses";
  return (
    <Fragment>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {expenseTotal}{" "}
      </h1>
    </Fragment>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = getCombine(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: expensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
