import React, { useContext } from "react";
import { IncomeContext } from "../context/IncomeContex";
import Api from "../api/IncomeApi";

const IncomeWrapper = ({ id, description, amount }) => {
  const [incomes, setIncome] = useContext(IncomeContext);
  const deleteIncome = async (e, id) => {
    const { data } = await Api.destroyIncome(`/incomes/${id}`);
    if (data.success) {
      return setIncome([...incomes.filter((income) => income._id !== id)]);
    }
    return;
  };
  return (
    <div className="display-income">
      <p>{description}</p>{" "}
      <p>
        {amount}{" "}
        <span className="delete-content">
          <i
            className="delete-btn fas fa-times"
            onClick={(e) => deleteIncome(e, id)}
          ></i>
        </span>
      </p>{" "}
    </div>
  );
};

export default IncomeWrapper;
