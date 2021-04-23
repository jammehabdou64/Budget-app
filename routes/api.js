const IncomeController = require("../app/controller/IncomeController");
const ExpensesController = require("../app/controller/ExpensesController");
const { Routes } = require("../vendor/framework");

Routes.get("/api/incomes", IncomeController.index);
Routes.post("/api/incomes", IncomeController.store);
Routes.delete("/api/incomes/:income", IncomeController.destroy);

Routes.get("/api/expenses", ExpensesController.index);
Routes.post("/api/expenses", ExpensesController.store);
Routes.delete("/api/expenses/:expense", ExpensesController.destroy);
