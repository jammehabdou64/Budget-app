import React, { useContext } from "react";
import { IncomeContext } from "../context/IncomeContex";
import { ExpensesContext } from "../context/ExpensesContext";

const Header = () => {
  const [incomes] = useContext(IncomeContext);
  const [expenses] = useContext(ExpensesContext);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let totalIncomes = () => {
    let sum = 0;
    incomes
      .map((income) => Number(income.amount))
      .forEach((income) => (sum += income));
    return sum;
  };

  let totalExpenses = () => {
    let sum = 0;
    expenses
      .map((income) => Number(income.amount))
      .forEach((income) => (sum += income));
    return sum;
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="date">
          <p>
            Available Budget in {months[new Date().getMonth()]}{" "}
            {new Date().getFullYear()}
          </p>
        </div>
        <div className="total-amount">
          <h4>
            {totalIncomes() - totalExpenses() !== 0
              ? totalIncomes() - totalExpenses()
              : "No Budget"}
          </h4>
        </div>
        <div className="income">
          <div className="income-text">Income</div>
          <div className="income-amount">+ {totalIncomes()} </div>
        </div>
        <div className="expenses">
          <div className="expenses-text"> Expenses</div>
          <div className="expenses-amount">- {totalExpenses()} </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
