const Expense = require('../models/expense');

const getAllExpenses = async () => {
  const allExpenses = await Expense.find();

  return allExpenses;
}

module.exports = {
  getAllExpenses
};