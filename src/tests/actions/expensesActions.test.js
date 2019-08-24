import {
  removeExpenses,
  editExpenses,
  addExpenses
} from "../../actions/expensesActions";

test("delete expense", () => {
  const actions = removeExpenses({ id: "123abc" });
  expect(actions).toEqual({
    type: "REMOVE_EXPENSES",
    id: "123abc"
  });
});

test("edit expense", () => {
  const actions = editExpenses("123abc", { note: "New note value" });
  expect(actions).toEqual({
    type: "EDIT_EXPENSES",
    id: "123abc",
    update: {
      note: "New note value"
    }
  });
});

test("add expenses", () => {
  const expenseData = {
    description: "salary",
    amount: 15000,
    createdAt: 1000,
    note: "This month deposit"
  };
  const actions = addExpenses(expenseData);
  expect(actions).toEqual({
    type: "ADD_EXPENSES",
    expenses: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("add expenses default value", () => {
  const actions = addExpenses();
  expect(actions).toEqual({
    type: "ADD_EXPENSES",
    expenses: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
