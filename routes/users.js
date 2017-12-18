var express = require('express');
const router = express.Router({
  mergeParams: true
});

var UserController = require('../controllers/users');

router.route('/')
  .get(UserController.list_all_users)
  .post(UserController.create_a_user)

  router.route('/:userId')
  .get(UserController.get_user_by_id)
  .delete(UserController.delete_a_user)
  .patch(UserController.update_a_user);


module.exports = router;



