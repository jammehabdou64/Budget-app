const mongoose = require("mongoose");

const ExpensesSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    defalult: Date.now,
  },
});

module.exports = mongoose.model("Expense", ExpensesSchema);
