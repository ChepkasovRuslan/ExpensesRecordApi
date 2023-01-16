const express = require("express");
const { expenseValidation } = require('../middlewares/expense.validation');

const router = express.Router();

const {
  getExpenses,
  postExpense,
  deleteExpense,
  deleteExpenses,
  patchExpense,
  getSum
} = require('../controllers/expense.controller');

router.get('/expenses', getExpenses);
router.post('/expenses', expenseValidation, postExpense);
router.delete('/expenses/:id', deleteExpense);
router.delete('/expenses', deleteExpenses);
router.patch('/expenses/:id', patchExpense);
router.get('/expenses/sum', getSum)

module.exports = router;