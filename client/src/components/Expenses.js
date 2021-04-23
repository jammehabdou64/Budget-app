import React, { useContext } from "react";
import { ExpensesContext } from "../context/ExpensesContext";
import ExpensesWrapper from "./ExpesesWrapper";
const Expenses = () => {
  const [expenses] = useContext(ExpensesContext);

  return (
    <div className="expenses-content">
      <h3>Expenses</h3>
      <div className="expenses-wrapper">
        {expenses.map((expense, index) => (
          <ExpensesWrapper
            description={expense.description}
            amount={expense.amount}
            id={expense._id}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Expenses;
