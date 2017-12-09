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
  });

  Task.associate = function (models) {      

        models.task.belongsTo(models.product, {
          foreignKey: 'productId'
        });

        models.task.belongsTo(models.epic, {
          foreignKey: 'epicId'
        });
        
        models.task.belongsTo(models.feature, {
          foreignKey: 'featureId'
        });

        models.task.belongsTo(models.story, {
          foreignKey: 'storyId'
        });

        models.task.hasMany(models.comment);
        models.task.hasMany(models.todo);
  };
  return Task;
};