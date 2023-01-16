const { check } = require('express-validator');

const expenseValidation = [
  check('description')
    .exists()
    .withMessage(`Object must contain "description" field`)
    .isString()
    .withMessage('Text must be a string')
    .trim()
    .notEmpty()
    .withMessage('Text must be not empty'),

  check('sum')
    .isFloat({ min: 0 })
    .withMessage('Sum must be a positive number')
];

module.exports = {
  expenseValidation
};
