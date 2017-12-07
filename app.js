//  EXPRESS
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const logger = require('morgan');
const models = require('./models');


//  SEQUELIZE
const db = require('./config/dev.js').db;
const Sequelize = require('sequelize');


// // SEQUELIZE SETUP
const sequelize = new Sequelize(db.URI, {
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: db.log_to_console,
});


//  SEQUELIZE Test Connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });



app.get('/', (req, res) => {
  res.send('Hello World');
});



models.sequelize.sync().then(() => {

  models.Team.create({
        name:'Brian Pino Inc'
  });   
  console.log(models.User);
  console.log(models.Team);
  app.listen(3000);
  console.log('Running server on port 3000');
});
  
  
  





