import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ExpensesProvider } from "./context/ExpensesContext";
import { IncomeProvider } from "./context/IncomeContex";
ReactDOM.render(
  <React.StrictMode>
    <IncomeProvider>
      <ExpensesProvider>
        <App />
      </ExpensesProvider>
    </IncomeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
