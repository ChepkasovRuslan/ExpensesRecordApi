const { PORT, DB_CONNECTION } = require('./config');

const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./src/routes/expense.routes');

const app = express();

const loadApp = async () => {
  try {
    mongoose.set('strictQuery', false);

    app.use(express.json());
    app.use('/', apiRoutes);

    await mongoose.connect(DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(PORT);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

loadApp();