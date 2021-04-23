const { Expense } = require("../Models");

class ExpensesController {
  async index(req, res) {
    try {
      return res.json({ expenses: await Expense.find() });
    } catch (err) {
      return new Error(err);
    }
  }

  async store(req, res) {
    try {
      //   return res.json({ msg: req.body });
      const expenses = await Expense.create(req.body);
      return expenses
        ? res.json({ success: true, expenses: await Expense.find() })
        : res.json({ success: false, msg: null });
    } catch (err) {
      return new Error(err);
    }
  }

  async destroy(req, res) {
    try {
      const expense = await Expense.findByIdAndRemove(req.params.expense);
      return expense
        ? res.json({ success: true, expense: `deleted successfully` })
        : res.json({ success: false, expense: null });
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new ExpensesController();
