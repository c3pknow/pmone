// var models = require('../models');

module.exports = ( sequelize, DataTypes ) => {
    const Product = sequelize.define( "product", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        status: {
            type: DataTypes.ENUM( "under consideration", "planned", "started", "completed" ),
        },
        dueDate: DataTypes.DATE,
        estimate: DataTypes.INTEGER,
        priority: DataTypes.INTEGER,
        teamId: {
            type: DataTypes.INTEGER,
        },
        createdBy: DataTypes.INTEGER,
    } );

    Product.associate = function ( models ) {
        models.product.belongsTo( models.team, {
            foreignKey: "teamId",
        } );
        // models.product.hasMany(models.epic);
        // models.product.hasMany(models.feature);
        // models.product.hasMany(models.story);
        // models.product.hasMany(models.task);
        models.product.hasMany( models.comment );
        models.product.hasMany( models.todo );
    };
    return Product;
};
