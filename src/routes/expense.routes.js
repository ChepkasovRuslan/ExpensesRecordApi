const express = require("express");
const { expenseValidation } = require('../middlewares/expense.validation');

const router = express.Router();

const {
  getExpenses,
  postExpense
} = require('../controllers/expense.controller');

router.get('/expenses', getExpenses);
router.post('/expenses', expenseValidation, postExpense);

module.exports = router;