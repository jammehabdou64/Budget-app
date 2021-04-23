import React, { createContext, useState, useEffect } from "react";
import Api from "../api/IncomeApi";
export const IncomeContext = createContext();

export const IncomeProvider = ({ children }) => {
  const [incomes, setIncome] = useState([]);
  useEffect(() => {
    getIncomes();
  }, []);
  const getIncomes = async () => {
    const { data } = await Api.allIncome("/incomes");
    return setIncome([...data.incomes]);
  };
  return (
    <IncomeContext.Provider value={[incomes, setIncome]}>
      {children}
    </IncomeContext.Provider>
  );
};
