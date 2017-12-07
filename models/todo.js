'use strict';
module.exports = (sequelize, DataTypes) => {
  var ToDo = sequelize.define('ToDo', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    dueDate: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM('planned', 'started', 'completed')
    },
    createdBy: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        ToDo.belongsTo(models.Task, {
          foreignKey: 'taskId'
        })

        ToDo.belongsTo(models.Story, {
          foreignKey: 'storyId'
        })

        ToDo.belongsTo(models.Feature, {
          foreignKey: 'featureId'
        })
        
        ToDo.belongsTo(models.Epic, {
          foreignKey: 'epicId'
        })
        
        ToDo.belongsTo(models.Product, {
          foreignKey: 'productId'
        })

        
      }
    }
  });
  return ToDo;
};