module.exports = ( sequelize, DataTypes ) => {
    var Comment = sequelize.define( "comment", {
        comment: DataTypes.TEXT,
    }, {
        classMethods: {
            associate( models ) {
                // associations can be defined here

                // Comment.belongsTo(models.Task, {
                //   foreignKey: 'taskId'
                // })

                // Comment.belongsTo(models.Story, {
                //   foreignKey: 'storyId'
                // })

                // Comment.belongsTo(models.Feature, {
                //   foreignKey: 'featureId'
                // })

                // Comment.belongsTo(models.Epic, {
                //   foreignKey: 'epicId'
                // })

                Comment.belongsTo( models.item, {
                    foreignKey: "itemId",
                } );

                Comment.belongsTo( models.product, {
                    foreignKey: "productId",
                } );
            },
        },
    } );
    return Comment;
};
