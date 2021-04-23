const mongoose = require("mongoose");

const incomeMongoose = new mongoose.Schema({
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
    defalut: Date.now,
  },
});

module.exports = mongoose.model("Income", incomeMongoose);
