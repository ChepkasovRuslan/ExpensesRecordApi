const { validationResult } = require('express-validator');
const {
  getAllExpenses,
  createOneExpense
} = require('../services/expense.service');

const getExpenses = async (req, res) => {
  try {
    const expenses = await getAllExpenses();

    res.status(200).send(expenses);
  } catch (error) {
    res.status(404).send('Failed to find tasks');
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

module.exports = {
  getExpenses,
  postExpense
};