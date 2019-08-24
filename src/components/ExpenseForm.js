import React, { Component, Fragment } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
const now = moment();
class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //local state for keeping change track
      //props.expense vaneko hamle pass gareko expense id ra state ma vako id match vako expense.
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? props.expense.amount.toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }
  handleDescription = e => {
    const description = e.target.value;
    this.setState({ description: description });
  };
  handleNote = e => {
    const note = e.target.value;
    this.setState({ note: note });
  };

  handleAmount = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount: amount });
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState({ createdAt: createdAt });
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      const errorMsg = "Please provide description & amount";
      this.setState({ error: errorMsg });
    } else {
      this.setState({ error: "" });
      this.props.handleSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount), //parseFloat helps to include decimal values
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.description}
            name="description"
            placeholder="Description"
            autoFocus
            onChange={this.handleDescription}
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleAmount}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            name="note"
            placeholder="Make a note..."
            value={this.state.note}
            onChange={this.handleNote}
          />
          <button>Add</button>
        </form>
      </Fragment>
    );
  }
}

export default ExpenseForm;
