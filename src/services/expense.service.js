const Expense = require('../models/expense');

const getAllExpenses = async () => {
  const allExpenses = await Expense.find();

  return allExpenses;
}

const createOneExpense = async body => {
  const expense = new Expense(body);
  const savedExpense = await expense.save();

  return savedExpense;
}

module.exports = {
  getAllExpenses,
  createOneExpense
};