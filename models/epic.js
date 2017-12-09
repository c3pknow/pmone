'use strict';
module.exports = (sequelize, DataTypes) => {
  var Epic = sequelize.define('epic', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM('under consideration', 'planned', 'started', 'completed')
    },
    dueDate: DataTypes.DATE,
    estimate: DataTypes.INTEGER,
    priority: DataTypes.INTEGER
  });
  
  Epic.associate = function (models) {
 
        models.epic.belongsTo(models.product, {
          foreignKey: 'productId'
        })

        models.epic.hasMany(models.feature);
        models.epic.hasMany(models.story);
        models.epic.hasMany(models.task);
        models.epic.hasMany(models.comment);
        models.epic.hasMany(models.todo);
  
    };
  return Epic;
};