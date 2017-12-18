// var Sequelize = require('sequelize-hierarchy')();

module.exports = ( sequelize, DataTypes ) => {
    const Item = sequelize.define( "item", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        status: {
            type: DataTypes.ENUM( "under consideration", "planned", "started", "completed" ),
        },
        type: {
            type: DataTypes.ENUM( "product", "epic", "component", "feature", "story", "task" ),
        },
        dueDate: DataTypes.DATE,
        estimate: DataTypes.INTEGER,
        priority: DataTypes.INTEGER,
        teamId: {
            type: DataTypes.INTEGER,
        },
        parentId: {
            type: DataTypes.INTEGER,
        },
        hierarchyLevel: {
            type: DataTypes.INTEGER,
        },
        createdBy: DataTypes.INTEGER,
        assignedTo: DataTypes.INTEGER,
    } );

    Item.isHierarchy();

    Item.associate = function ( models ) {
    // models.item.belongsTo(models.item, {as: 'parent', foreignKey: 'parentId'})
    // models.item.hasMany(models.item, {as: 'children', foreignKey: 'parentId'})
    // models.item.belongsToMany(models.item, {as: 'descendents', foreignKey: 'ancestorId', through: itemAncestor})
    // models.item.belongsToMany(models.item, {as: 'ancestors', foreignKey: 'folderId', through: itemAncestor})

        models.item.belongsTo( models.team, {
            foreignKey: "teamId",
        } );

        models.item.belongsTo( models.user, {
            foreignKey: "assignedTo",
        } );

        models.item.hasMany( models.comment );
        models.item.hasMany( models.todo );
    };

    return Item;
};
