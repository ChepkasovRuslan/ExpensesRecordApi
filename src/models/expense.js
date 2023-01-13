const mongoose = require('mongoose');
const { Schema } = mongoose;

const expenseSchema = new Schema({
  description: {
    type: String,
    require: true
  },
  sum: {
    type: Number,
    default: 0
  }
});

module.exports = Expense = mongoose.model('expenses', expenseSchema);