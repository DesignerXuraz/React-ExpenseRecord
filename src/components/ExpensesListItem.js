import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
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
      {moment(createdAt).format("MMMM Do, YYYY")}
    </Fragment>
  );
};

export default ExpensesListItem;
