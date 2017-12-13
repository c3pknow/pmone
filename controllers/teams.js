const express = require('express');
var models = require('../models');



/////////////////   LIST ALL TEAMS     ////////////////////////
exports.list_all_teams = function (req, res) {
  console.log('Finding all teams...');
  models.team.findAll({})
    .then(teams => {
      console.log('Teams found...');
      res.json(teams);
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};


/////////////////   GET TEAM BY ID    ////////////////////////
exports.get_team_by_id = function (req, res) {
  console.log(`Finding team with id: ${req.params.teamId}...`);
  models.team.find({
      where: {
        id: req.params.teamId
      }
    })
    .then(team => {
      console.log(`Team with id: ${req.params.teamId} found...`);
      res.json(team);
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};


/////////////////   CREATE A TEAM     ////////////////////////
exports.create_a_team = function (req, res) {

  console.log(`Creating a new Team...`);

  var _team = new models.team(req.body);
  _team.save((err, team) => {})
    .then(team => {
      console.log(`Team with id: ${team.id} created...`);
      res.json(team);
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};



/////////////////   UPDATE A TEAM     ////////////////////////
exports.update_a_team = function (req, res) {

  console.log(`Updating Team with id: ${req.params.teamId}...`);

  models.team.find({
      where: {
        id: req.params.teamId
      }
    })
    .then(team => {
      team.update(req.body)
        .then(() => {
          console.log(`Team with id: ${req.params.teamId} UPDATED...`);
          res.json(team);
        })
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};



/////////////////   DELETE A TEAM     ////////////////////////
exports.delete_a_team = function (req, res) {
  console.log(`Finding Team with id: ${req.params.teamId}...`);
  models.team.find({
      where: {
        id: req.params.teamId
      }
    })
    .then(team => {
      console.log(`Deleting Team with id: ${req.params.teamId}...`);
      team.destroy();
      res.json(`Deleted Team with id: ${req.params.teamId}...`);
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};