var express = require('express');
var router = express.Router();

var UserController = require('../controllers/users');

router.route('/')
  .get(UserController.list_all_users)
  .post(() =>{});

module.exports = router;



