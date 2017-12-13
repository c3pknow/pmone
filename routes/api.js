const express = require('express');
const router = express.Router({mergeParams: true});


///////////////    ROUTES    ////////////////////////
//
// !!! Routes required to be below Passport Middleware !!!
//
////  SETUP API ROUTE
const users = require('./users');
router.use('/users', users);

const teams = require('./teams');
router.use('/teams', teams);


module.exports = router;