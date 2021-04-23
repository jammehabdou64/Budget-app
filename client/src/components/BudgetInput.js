import React, { useState, useContext } from "react";
import ExpensesApi from "../api/ExpensesApi";
import IncomeApi from "../api/IncomeApi";
import { ExpensesContext } from "../context/ExpensesContext";
import { IncomeContext } from "../context/IncomeContex";
const BudgetInput = () => {
  const [expenses, setExpenses] = useContext(ExpensesContext);
  const [income, setIncomes] = useContext(IncomeContext);
  const [formData, setFormData] = useState({
    type: "income",
    description: "",
    amount: "",
  });

  const { type } = formData;

  const inputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (type === "income") {
      const { data } = await IncomeApi.storeIncome("/incomes", {
        description: formData.description,
        amount: formData.amount,
      });
      setFormData({ type: "income", description: "", amount: "" });
      return setIncomes([...data.incomes]);
    }
    const { data } = await ExpensesApi.storeExpenses("/expenses", {
      description: formData.description,
      amount: formData.amount,
    });
    setFormData({ type: "income", description: "", amount: "" });
    return setExpenses([...data.expenses]);
  };
  return (
    <div>
      <div className="input-wrapper">
        <form action="" onSubmit={(e) => submit(e)}>
          <select
            name="type"
            className="select"
            value={type}
            onChange={(e) => inputChange(e)}
          >
            <option value="income">+</option>
            <option value="expenses">-</option>
          </select>
          <input
            type="text"
            name="description"
            className="description"
            placeholder="description"
            onChange={(e) => inputChange(e)}
            value={formData.description}
          />
          <input
            type="number"
            name="amount"
            className="amount"
            placeholder="value"
            value={formData.amount}
            onChange={(e) => inputChange(e)}
          />
          <button>
            <i className="fas fa-check"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BudgetInput;
