//  EXPRESS
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const logger = require('morgan');
var models = require('./models');


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
  console.log('Start Find...');
 
  //  TODO: TEST DATA REMOVE
  models.team.findAll().then( teams => {
    console.log('TEAMS');
    console.log(JSON.stringify(teams, null, 2));
  });

  models.user.findAll().then( users => {
    console.log('USERS');
    console.log(JSON.stringify(users, null, 2));
  });

  models.member.findAll().then( members => {
    console.log('MEMBERS');
    console.log(JSON.stringify(members, null, 2));
  });
 //  END TODO: TEST DATA REMOVE

  app.listen(3000);
  console.log('Running server on port 3000');
});
  
  
  
  
  
  





