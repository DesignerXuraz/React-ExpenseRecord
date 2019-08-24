import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filtersActions";

test("text filter", () => {
  const actions = setTextFilter("text");
  expect(actions).toBe({
    type: "SET_TEXT_FILTER",
    text: text
  });
});
