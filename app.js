//  EXPRESS
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const logger = require('morgan');
var models = require('./models');
app.set('models', require('./models'));
var dbs = require('./models/index');

//  SEQUELIZE
const db = require('./config/dev.js').db;
var Sequelize = require('sequelize-hierarchy')();

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
 

  //models.item.rebuildHierarchy();

  //  TODO: TEST DATA REMOVE
  // models.team.findAll({
  //   include: //[{ all: true, nested: false }],
  //   {
  //     model: models.item,
  //     hierarchy: true,
  //     attributes: ['id', 'name', 'teamId', 'parentId', 'hierarchyLevel']
  //   },
  //   where: {
  //     id: 2
  //   },
  //   attributes: ['id']
  // }).then( teams => {
  //   console.log('TEAMS');
  //   console.log(JSON.stringify(teams, null, 4));
  // });


  models.item.findAll({
        hierarchy: true,
        attributes: ['id', 'name', 'teamId', 'parentId', 'hierarchyLevel'],
        include: [{
          model: models.comment
      },{
        model: models.todo
    }]
      })
      .then( items => {
        console.log('ITEMS');
        console.log(JSON.stringify(items, null, 4));
      })
        .then(() => {
          app.listen(3000);
          console.log('Running server on port 3000');
  });




  
  
    // models.member.findAll().then( members => {
    //   console.log('MEMBERS');
    //   console.log(JSON.stringify(members, null, 2));
    // });


    // models.user.findAll({
    //   where: {
    //     id: 2
    //   }
    // }).then( users => {
    //   console.log('USERS');
    //   console.log(JSON.stringify(users, null, 2));
    // });
 //  END TODO: TEST DATA REMOVE

 
});
  