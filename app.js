//  EXPRESS
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');

// SET 
var models = require('./models');
app.set('models', require('./models'));
var db = require('./models/index');

//  SEQUELIZE
const db_config = require('./config/dev.js').db;
var Sequelize = require('sequelize-hierarchy')();

// // SEQUELIZE SETUP
const sequelize = new Sequelize(db_config.URI, {
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
  logging: db_config.log_to_console,
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


/////////////////   MIDDLEWARE     ////////////////////////
//
// Body Parser Middleware  -->  Allow parsing of form elements on POST using req.body.form_element_name
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// Method Override Middleware --> Allows additonal request/form methods including PUT& DELETE requests
app.use(methodOverride('_method'));

// Use Express Session
app.use(session({
  secret:'mysecret',
  resave:false,
  saveUninitialized:false
}));


///////////////    ROUTES    ////////////////////////
//
// !!! Routes required to be below Passport Middleware !!!
//
////  SETUP API ROUTE
const api = require('./routes/api');
app.use('/api', api);

////  The snippet above helps to redirect and respond whenever a wrong route is entered on the site.
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

////  MODEL SYNC 
models.sequelize.sync().then(() => {
  console.log('Models synchronized...');
})
.then(() => {
  app.listen(3000);
  console.log('Running server on port 3000');
     });;







  // models.item.findAll({
  //     hierarchy: true,
  //     attributes: ['id', 'name', 'teamId', 'parentId', 'hierarchyLevel'],
  //     include: [{
  //         model: models.comment
  //       },
  //       {
  //         model: models.todo
  //       }
  //     ]
  //   })
  //   .then(items => {
  //     console.log('ITEMS');
  //     console.log(JSON.stringify(items, null, 4));
  //   })
  //   
// });



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