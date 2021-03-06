const express = require( "express" );

const router = express.Router( { mergeParams: true } );

// /////////////    ROUTES    ////////////////////////
//
// !!! Routes required to be below Passport Middleware !!!
//
router.use( ( req, res, next ) => {
    // log each request to the console
    console.log( req.method, req.url );

    // continue doing what we were doing and go to the route
    next();
} );

const teams = require( "./teams" );

router.use( "/teams", teams );

module.exports = router;
