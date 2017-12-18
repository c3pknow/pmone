const express = require( "express" );

const router = express.Router();

router.use( ( req, res, next ) => {
    // log each request to the console
    console.log( req.method, req.url );

    // continue doing what we were doing and go to the route
    next();
} );

/* GET home page. */
router.get( "/", ( req, res, next ) => {
    res.render( "index", { title: "Express" } );
} );

module.exports = router;
