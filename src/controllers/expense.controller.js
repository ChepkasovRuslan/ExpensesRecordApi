const { validationResult } = require('express-validator');
const {
  getAllExpenses,
  getOneExpense,
  createOneExpense,
  deleteAllExpenses,
  deleteOneExpenseById,
  updateExpenseById,
  getTotalSum
} = require('../services/expense.service');

const getExpenses = async (req, res) => {
  try {
    const expenses = await getAllExpenses();

    res.status(200).send(expenses);
  } catch (error) {
    res.status(404).send('Failed to find expenses');
  }
}

const getExpense = async (req, res) => {
  try {
    const expense = await getOneExpense(req.params.id);

    res.status(200).send(expense);
  } catch (error) {
    res.status(404).send('Failed to find expense');
  }
}

const postExpense = async (req, res) => {
  try {
    const errors = validationResult(req, res);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const expense = await createOneExpense(req.body);

    res.status(201).send(expense);
  } catch (error) {
    res.status(500).send(error);
  }
}

const deleteExpense = async (req, res) => {
  try {
    const result = await deleteOneExpenseById(req.params.id);

    res.status(202).send(result);
  } catch (error) {
    res.status(500).send('Failed to delete expenses');
  }
}

const deleteExpenses = async (req, res) => {
  try {
    const result = await deleteAllExpenses();

    res.status(202).send(result);
  } catch (error) {
    res.status(404).send('Expense to delete not found');
  }
}

const patchExpense = async (req, res) => {
  try {
    const result = await updateExpenseById(req.params.id, req.body);

    res.status(202).send(result);
  } catch (error) {
    res.status(500).send('Failed to patch expense');
  }
}

const getSum = async (req, res) => {
  try {
    const totalSum = await getTotalSum();

    res.status(200).send(totalSum);
  } catch (error) {
    res.status(500).send('Failed to calculate sum');
  }
}

module.exports = {
  getExpenses,
  getExpense,
  postExpense,
  deleteExpense,
  deleteExpenses,
  patchExpense,
  getSum
};