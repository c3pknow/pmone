const express = require('express');
var models = require('../models');
var url = require('url');


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

/////////////////   GET PRODUCT BY ID WITH HIERARCHY   ////////////////////////
function get_product_by_id_with_hierarchy(req, res) {
  console.log(`Finding PRODUCT HIERARCHY with id: ${req.params.productId}...`);

  models.item.findAll({
    where: {
      id: req.params.productId,
      teamId: req.params.teamId,
      parentId: null
    },
    hierarchy: true,
    include:
      [{
        model: models.item,
        as: 'descendents',
        hierarchy: true
      },
      {
        model: models.comment
      },
      {
        model: models.todo
      }],

    //order: [ [ { model: models.item, as: 'ancestors' }, 'hierarchyLevel' ] ]
  })
    .then(product => {
      console.log(`PRODUCT with id: ${req.params.productId} found...`);
      res.json(product);
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};


/////////////////   GET PRODUCT BY ID    ////////////////////////
exports.get_product_by_id = function (req, res) {

  if (req.query.hierarchy) {
    get_product_by_id_with_hierarchy(req, res);
  }
  else{
    get_product_by_id_without_hierarchy(req, res);
  }


  /////////////////   GET PRODUCT BY ID    ////////////////////////
   function get_product_by_id_without_hierarchy(req, res) {
  console.log(`Finding PRODUCT with id: ${req.params.productId}...`);

  models.item.findAll({
    include: [{
      model: models.comment
    },
    {
      model: models.todo
    }
    ],
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
};



/////////////////   CREATE A PRODUCT     ////////////////////////
exports.create_a_product = function (req, res) {

  console.log(`Creating a new PRODUCT...`);

  var _product = new models.product(req.body);
  _product.save((err, product) => { })
    .then(product => {
      console.log(`PRODUCT with id: ${product.id} created...`);
      res.json(product);
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};



/////////////////   UPDATE A PRODUCT     ////////////////////////
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



/////////////////   DELETE A PRODUCT     ////////////////////////
exports.delete_a_product = function (req, res) {
  console.log(`Finding PRODUCT with id: ${req.params.productId}...`);
  models.product.find({
    where: {
      id: req.params.productId
    }
  })
    .then(product => {
      console.log(`Deleting PRODUCT with id: ${req.params.productId}...`);
      product.destroy();
      res.json(`Deleted PRODUCT with id: ${req.params.productId}...`);
    })
    .catch(function (e) {
      console.log(e); // "oh, no!"
    });
};