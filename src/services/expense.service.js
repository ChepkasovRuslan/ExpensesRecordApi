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

const deleteOneExpenseById = async (id) => {
  const deletedExpense = await Expense.findByIdAndDelete(id);

  return deletedExpense;
}

const deleteAllExpenses = async () => {
  const deletedExpenses = await Expense.deleteMany({});

  return deletedExpenses;
}

const updateExpenseById = async (id, body) => {
  const updatedExpense = await Expense.findByIdAndUpdate(id, body);

  return updatedExpense;
}

const getTotalSum = async () => {
  const expenses = await getAllExpenses();
  const totalSum = expenses.reduce((prev, curr) => prev + curr.sum, 0)

  const result = Expense.aggregate([
    {
      $project:
      {
        totalSum: totalSum
      }
    }
  ]);

  return result._pipeline[0].$project;
}

module.exports = {
  getAllExpenses,
  createOneExpense,
  deleteOneExpenseById,
  deleteAllExpenses,
  updateExpenseById,
  getTotalSum
};