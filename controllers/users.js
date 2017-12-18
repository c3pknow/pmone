const express = require( "express" );

const app = express();

const models = require( "../models" );

// ///////////////   LIST ALL USERS    ////////////////////////
exports.list_all_users = function ( req, res ) {
    models.user.findAll( {
        include: {
            model: models.team,
            where: {
                id: req.params.teamId,
            },
        },
    } )
        .then( ( users ) => {
            console.log( "Users" );
            res.json( users );
        } )
        .catch( ( e ) => {
            console.log( e ); // "oh, no!"
        } );
};

// ///////////////   GET USER BY ID    ////////////////////////
exports.get_user_by_id = function ( req, res ) {
    console.log( `Finding USER with id: ${ req.params.userId }...` );

    models.user.findAll( {
        where: {
            id: req.params.userId,
        },
    } )
        .then( ( user ) => {
            console.log( `USER with id: ${ req.params.userId } found...` );
            res.json( user );
        } )
        .catch( ( e ) => {
            console.log( e ); // "oh, no!"
        } );
};

// ///////////////   CREATE A PRODUCT     ////////////////////////
exports.create_a_user = function ( req, res ) {
    console.log( "Creating a new USER..." );

    const _user = new models.user( req.body );
    _user.save( ( err, user ) => { } )
        .then( ( user ) => {
            console.log( `USER with id: ${ user.id } created...` );
            res.json( user );
        } )
        .catch( ( e ) => {
            console.log( e ); // "oh, no!"
        } );
};

// ///////////////   UPDATE A PRODUCT     ////////////////////////
exports.update_a_user = function ( req, res ) {
    console.log( `Updating USER with id: ${ req.params.userId }...` );

    models.user.find( {
        where: {
            id: req.params.userId,
        },
    } )
        .then( ( user ) => {
            user.update( req.body )
                .then( () => {
                    console.log( `USER with id: ${ req.params.userId } UPDATED...` );
                    res.json( user );
                } );
        } )
        .catch( ( e ) => {
            console.log( e ); // "oh, no!"
        } );
};

// ///////////////   DELETE A PRODUCT     ////////////////////////
exports.delete_a_user = function ( req, res ) {
    console.log( `Finding USER with id: ${ req.params.userId }...` );
    models.user.find( {
        where: {
            id: req.params.userId,
        },
    } )
        .then( ( user ) => {
            console.log( `Deleting USER with id: ${ req.params.userId }...` );
            user.destroy();
            res.json( `Deleted USER with id: ${ req.params.userId }...` );
        } )
        .catch( ( e ) => {
            console.log( e ); // "oh, no!"
        } );
};
