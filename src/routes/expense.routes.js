const express = require("express");

const router = express.Router();

const {
  getExpenses
} = require('../controllers/expense.controller');

router.get('/expenses', getExpenses);

module.exports = router;