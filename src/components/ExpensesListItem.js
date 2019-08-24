import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import { removeExpenses } from "../actions/expensesActions"; dlt btn thiyo
const ExpensesListItem = ({ id, description, amount, note, createdAt }) => {
  return (
    <Fragment>
      <h1>Expense list item</h1>
      <Link to={`/edit/${id}`}>
        <p>{description}</p>
      </Link>
      <p>{`amount: ${amount}`}</p>
      <p>{`note: ${note}`}</p>
      <p>{`createdAt: ${createdAt}`}</p>
    </Fragment>
  );
};

export default ExpensesListItem;
