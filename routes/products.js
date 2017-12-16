const express = require('express');
const router = express.Router({
  mergeParams: true
});

var ProductController = require('../controllers/products');


////  SETUP ITEM ROUTES
const items = require('./items');
router.use('/:productId/items', items);


router.route('/')
  .get(ProductController.list_all_products)
  .post(ProductController.create_a_product);


router.route('/:productId')
  .get(ProductController.get_product_by_id)
  .patch(ProductController.update_a_product)
  .delete(ProductController.delete_a_product);


module.exports = router;