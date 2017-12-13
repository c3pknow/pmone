const express = require('express');
var app = express();

var models = require('../models');

exports.list_all_users = function (req, res) {

    models.user.findAll({})
      .then(users => {
        console.log('Users');
        res.json(users);
      })
      .catch(function(e) {
        console.log(e); // "oh, no!"
      });
    };

    exports.list_all_users_by_team = function (req, res) {
      
          models.user.findAll({})
            .then(users => {
              console.log('Users');
              res.json(users);
            })
            .catch(function(e) {
              console.log(e); // "oh, no!"
            });
          };







    exports.create_a_task = function (req, res) {
      var new_task = new Task(req.body);
      new_task.save(function (err, task) {
        if (err)
          res.send(err);
        res.json(task);
      });
    };


    exports.read_a_task = function (req, res) {
      Task.findById(req.params.taskId, function (err, task) {
        if (err)
          res.send(err);
        res.json(task);
      });
    };


    exports.update_a_task = function (req, res) {
      Task.findOneAndUpdate({
        _id: req.params.taskId
      }, req.body, {
        new: true
      }, function (err, task) {
        if (err)
          res.send(err);
        res.json(task);
      });
    };


    exports.delete_a_task = function (req, res) {


      Task.remove({
        _id: req.params.taskId
      }, function (err, task) {
        if (err)
          res.send(err);
        res.json({
          message: 'Task successfully deleted'
        });
      });
    };