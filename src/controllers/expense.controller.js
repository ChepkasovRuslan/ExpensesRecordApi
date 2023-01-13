const {
  getAllExpenses
} = require('../services/expense.service');

const getExpenses = async (req, res) => {
  try {
    const expenses = await getAllExpenses();

    res.status(201).send(expenses);
  } catch (error) {
    res.status(404).send('Failed to find tasks');
  }
}

module.exports = {
  getExpenses
};