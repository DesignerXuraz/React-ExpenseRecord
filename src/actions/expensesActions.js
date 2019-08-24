import uuid from "uuid";

////////////////////////////////  EXPENSES ACTION GENERATOR      /////////////////////////////////////

//ADD_EXPENSES action generator that return type & action.sth
export const addExpenses = ({
  description = "", //default value
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => {
  //{}={} destructing empty objects
  //impliclitly return
  return {
    type: "ADD_EXPENSES", //bcz of this we can use action.type & action.sth
    expenses: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
};

//REMOVE_EXPENSES action generator
export const removeExpenses = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSES",
    id
  };
};

//EDIT_EXPENSES action generator
export const editExpenses = (id, update) => ({
  type: "EDIT_EXPENSES",
  id,
  update
});
