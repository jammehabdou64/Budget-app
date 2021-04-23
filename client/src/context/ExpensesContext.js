import React, { createContext, useState, useEffect } from "react";
import Api from "../api/ExpensesApi";
export const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  useEffect(() => {
    getAllExpenses();
  }, []);
  const [expenses, setExpenses] = useState([]);
  const getAllExpenses = async () => {
    const { data } = await Api.allExpenses("/expenses");
    return setExpenses([...data.expenses]);
  };
  return (
    <ExpensesContext.Provider value={[expenses, setExpenses]}>
      {children}
    </ExpensesContext.Provider>
  );
};
