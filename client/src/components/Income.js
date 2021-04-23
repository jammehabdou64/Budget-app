import React, { useContext } from "react";
import { IncomeContext } from "../context/IncomeContex";
import IncomeWrapper from "./IncomeWrapper";

const Income = () => {
  const [incomes] = useContext(IncomeContext);

  return (
    <div className="income-content">
      <h3>Income</h3>
      <div className="income-wrapper">
        {incomes.map((income, index) => (
          <IncomeWrapper
            description={income.description}
            amount={income.amount}
            id={income._id}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Income;
