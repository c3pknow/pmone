'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('task', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM('under consideration', 'planned', 'started', 'completed')
    },
    dueDate: DataTypes.DATE,
    estimate: DataTypes.INTEGER,
    priority: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        Task.belongsTo(models.Product, {
          foreignKey: 'productId'
        });

        Task.belongsTo(models.Epic, {
          foreignKey: 'epicId'
        });
        
        Task.belongsTo(models.Feature, {
          foreignKey: 'featureId'
        });

        Task.belongsTo(models.Story, {
          foreignKey: 'storyId'
        });

        Task.hasMany(models.Comment);
        Task.hasMany(models.ToDo);
      }
    }
  });
  return Task;
};