const { Income } = require("../Models");

class IncomeController {
  async index(req, res) {
    try {
      return res.json({ incomes: await Income.find() });
    } catch (err) {
      return new Error(err);
    }
  }

  async store(req, res) {
    try {
      const income = await Income.create(req.body);
      return income
        ? res.json({ success: true, incomes: await Income.find() })
        : res.json({ success: false, msg: null });
    } catch (err) {
      return new Error(err);
    }
  }

  async destroy(req, res) {
    try {
      const income = await Income.findByIdAndRemove(req.params.income);
      return income
        ? res.json({ success: true, message: `deleted successfully` })
        : res.json({ success: false, message: null });
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new IncomeController();
