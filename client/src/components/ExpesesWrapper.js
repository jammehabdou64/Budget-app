import React, { useContext } from "react";
import { ExpensesContext } from "../context/ExpensesContext";
import Api from "../api/ExpensesApi";

const ExpensesWrapper = ({ id, description, amount }) => {
  const [expenses, setExpense] = useContext(ExpensesContext);

  const deleteExpense = async (e, id) => {
    e.preventDefault();
    const { data } = await Api.destroyExpenses(`/expenses/${id}`);
    if (data.success) {
      return setExpense([...expenses.filter((expense) => expense._id !== id)]);
    }
    return;
  };
  return (
    <div className="display-expenses">
      <p>{description}</p>{" "}
      <p>
        {amount}
        <span className="delete-content">
          <i
            className="delete-btn fas fa-times"
            onClick={(e) => deleteExpense(e, id)}
          ></i>
        </span>
      </p>
    </div>
  );
};

export default ExpensesWrapper;
