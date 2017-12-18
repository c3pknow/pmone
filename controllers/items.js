const express = require( "express" );
const models = require( "../models" );
const url = require( "url" );

// ///////////////   LIST ALL ITEMS     ////////////////////////
exports.list_all_items = function ( req, res ) {
    if ( req.query.hierarchy ) {
        list_all_items_with_hierarchy( req, res );
    } else {
        list_all_items_without_hierarchy( req, res );
    }
};

// ///////////////   LIST ALL ITEMS WITHOUT HIERARCHY    ////////////////////////
exports.list_all_items_without_hierarchy = function ( req, res ) {
    console.log( `Finding all ITEMS WITHOUT HIERARCHY for ${ req.params.itemId }...` );
    models.item.findAll( {
        where: {
            teamId: req.params.teamId,
        },
    } )
        .then( ( items ) => {
            console.log( "ITEMS found..." );
            res.json( items );
        } )
        .catch( ( e ) => {
            console.log( e ); // "oh, no!"
        } );
};

// ///////////////   LIST ALL ITEMS WITH HIERARCHY    //////////////////
function list_all_items_with_hierarchy( req, res ) {
    console.log( `Finding all ITEMS for ${ req.params.itemId }...` );
    models.item.findAll( {
        hierarchy: true,
        where: {
            teamId: req.params.teamId,
            parentId: req.pararms.productId,
        },
    } )
        .then( ( items ) => {
            console.log( "ITEMS found..." );
            res.json( items );
        } )
        .catch( ( e ) => {
            console.log( e ); // "oh, no!"
        } );
}

// ///////////////   GET ITEM BY ID WITH HIERARCHY   ////////////////////////
function get_item_by_id_with_hierarchy( req, res ) {
    console.log( `Finding ITEM HIERARCHY with id: ${ req.params.itemId }...` );

    models.item.findAll( {
        where: {
            id: req.params.itemId,
        },
        include: [ {
            model: models.item,
            as: "descendents",
            hierarchy: true,
        },
        {
            model: models.comment,
        },
        {
            model: models.todo,
        },
        ],
        order: [
            [ {
                model: models.item,
                as: "descendents",
            }, "hierarchyLevel" ],
        ],
    } )
        .then( ( item ) => {
            console.log( `ITEM with id: ${ req.params.itemId } found...` );
            res.json( item );
        } )
        .catch( ( e ) => {
            console.log( e ); // "oh, no!"
        } );
}

// ///////////////   GET ITEM BY ID    ////////////////////////
function get_item_by_id_without_hierarchy( req, res ) {
    console.log( `Finding ITEM with id: ${ req.params.itemId }...` );

    models.item.findAll( {
        include: [ {
            model: models.comment,
        },
        {
            model: models.todo,
        },
        ],
        where: {
            id: req.params.itemId,
            teamId: req.params.teamId,
        },
    } )
        .then( ( item ) => {
            console.log( `ITEM with id: ${ req.params.itemId } found...` );
            res.json( item );
        } )
        .catch( ( e ) => {
            console.log( e ); // "oh, no!"
        } );
}

// ///////////////   GET ITEM BY ID    ////////////////////////
exports.get_item_by_id = function ( req, res ) {
    if ( req.query.hierarchy ) {
        get_item_by_id_with_hierarchy( req, res );
    } else {
        get_item_by_id_without_hierarchy( req, res );
    }
};

// ///////////////   CREATE AN ITEM     ////////////////////////
exports.create_a_item = function ( req, res ) {
    console.log( "Creating a new ITEM..." );

    const _item = new models.item( req.body );
    _item.save( ( err, item ) => {} )
        .then( ( item ) => {
            console.log( `ITEM with id: ${ item.id } created...` );
            res.json( item );
        } )
        .catch( ( e ) => {
            console.log( e ); // "oh, no!"
        } );
};

// ///////////////   UPDATE AN ITEM     ////////////////////////
exports.update_a_item = function ( req, res ) {
    console.log( `Updating ITEM with id: ${ req.params.itemId }...` );

    models.item.find( {
        where: {
            id: req.params.itemId,
            teamId: req.params.teamId,
        },
    } )
        .then( ( item ) => {
            item.update( req.body )
                .then( () => {
                    console.log( `ITEM with id: ${ req.params.itemId } UPDATED...` );
                    res.json( item );
                } );
        } )
        .catch( ( e ) => {
            console.log( e ); // "oh, no!"
        } );
};

// ///////////////   DELETE AN ITEM     ////////////////////////
exports.delete_a_item = function ( req, res ) {
    console.log( `Finding ITEM with id: ${ req.params.itemId }...` );
    models.item.find( {
        where: {
            id: req.params.itemId,
        },
    } )
        .then( ( item ) => {
            console.log( `Deleting ITEM with id: ${ req.params.itemId }...` );
            item.destroy();
            res.json( `Deleted ITEM with id: ${ req.params.itemId }...` );
        } )
        .catch( ( e ) => {
            console.log( e ); // "oh, no!"
        } );
};
