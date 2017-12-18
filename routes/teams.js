const express = require( "express" );

const router = express.Router( { mergeParams: true } );

const TeamController = require( "../controllers/teams" );

// //  SETUP PRODUCT ROUTES
const products = require( "./products" );

router.use( "/:teamId/products", products );

// //  SETUP PRODUCT ROUTES
const users = require( "./users" );

router.use( "/:teamId/users", users );

// /////////////   TEAM ROUTES    ////////////////////////
//
router.route( "/" )
    .get( TeamController.list_all_teams )
    .post( TeamController.create_a_team );

router.route( "/:teamId" )
    .get( TeamController.get_team_by_id )
    .patch( TeamController.update_a_team )
    .delete( TeamController.delete_a_team );

// ////  SETUP USER ROUTES
// const users = require('./users');
// router.use('/users', users);

module.exports = router;
