const express = require("express");
const { expenseValidation } = require('../middlewares/expense.validation');

const router = express.Router();

const {
  getExpenses,
  getExpense,
  postExpense,
  deleteExpense,
  deleteExpenses,
  patchExpense,
  getSum
} = require('../controllers/expense.controller');

router.get('/expenses', getExpenses);
router.get('/expenses/:id', getExpense);
router.post('/expenses', expenseValidation, postExpense);
router.delete('/expenses/:id', deleteExpense);
router.delete('/expenses', deleteExpenses);
router.patch('/expenses/:id', patchExpense);
router.get('/expenses/sum', getSum)

module.exports = router;