module.exports = ( sequelize, DataTypes ) => {
    const ToDo = sequelize.define( "todo", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        dueDate: DataTypes.DATE,
        status: {
            type: DataTypes.ENUM( "under consideration", "planned", "started", "completed" ),
        },
        createdBy: DataTypes.INTEGER,
    } );

    ToDo.associate = function ( models ) {
        // models.todo.belongsTo(models.task, {
        //   foreignKey: 'taskId'
        // })

        // models.todo.belongsTo(models.story, {
        //   foreignKey: 'storyId'
        // })

        // models.todo.belongsTo(models.feature, {
        //   foreignKey: 'featureId'
        // })

        // models.todo.belongsTo(models.epic, {
        //   foreignKey: 'epicId'
        // })

        models.todo.belongsTo( models.item, {
            foreignKey: "itemId",
        } );

        models.todo.belongsTo( models.product, {
            foreignKey: "productId",
        } );
    };
    return ToDo;
};
