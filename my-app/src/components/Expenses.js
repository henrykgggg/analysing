import React, { useState } from "react";
import ExpenseItem from "./ExpensItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "./Card";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
        key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

    </Card>
  );
};
export default Expenses;
