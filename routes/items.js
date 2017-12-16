const express = require('express');
const router = express.Router({
  mergeParams: true
});

var ItemController = require('../controllers/items');

router.route('/')
  .get(ItemController.list_all_items)
  .post(ItemController.create_a_item);

router.route('/:itemId')
  .get(ItemController.get_item_by_id)
  .patch(ItemController.update_a_item)
  .delete(ItemController.delete_a_item);


module.exports = router;