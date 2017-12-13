const express = require('express');
var models = require('../models');

/////////////////   LIST ALL PRODUCT     ////////////////////////
exports.list_all_products = function (req, res) {
  console.log(`Finding all PRODUCTS for ${req.params.productId}...`);
  models.item.findAll({
    where: {
      teamId: req.params.teamId,
      parentId: null
      }
  })
    .then(items => {
      console.log('PRODUCTS found...');
      res.json(items);
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};


/////////////////   GET PRODUCT BY ID    ////////////////////////
exports.get_product_by_id = function (req, res) {
  console.log(`Finding ITEM with id: ${req.params.productId}...`);
  models.item.find({
      where: {
        id: req.params.productId,
        teamId: req.params.teamId,
        parentId: null
        }
    })
    .then(product => {
      console.log(`PRODUCT with id: ${req.params.productId} found...`);
      res.json(product);
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};


/////////////////   CREATE A product     ////////////////////////
exports.create_a_product = function (req, res) {

  console.log(`Creating a new product...`);

  var _product = new models.product(req.body);
  _product.save((err, product) => {})
    .then(product => {
      console.log(`product with id: ${product.id} created...`);
      res.json(product);
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};



/////////////////   UPDATE A product     ////////////////////////
exports.update_a_product = function (req, res) {

  console.log(`Updating PRODUCT with id: ${req.params.productId}...`);

  models.item.find({
      where: {
        id: req.params.productId,
        teamId: req.params.teamId
      }
    })
    .then(product => {
      product.update(req.body)
        .then(() => {
          console.log(`PRODUCT with id: ${req.params.productId} UPDATED...`);
          res.json(product);
        })
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};



/////////////////   DELETE A product     ////////////////////////
exports.delete_a_product = function (req, res) {
  console.log(`Finding product with id: ${req.params.productId}...`);
  models.product.find({
      where: {
        id: req.params.productId
      }
    })
    .then(product => {
      console.log(`Deleting product with id: ${req.params.productId}...`);
      product.destroy();
      res.json(`Deleted product with id: ${req.params.productId}...`);
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};