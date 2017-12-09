'use strict';
module.exports = (sequelize, DataTypes) => {
  var Feature = sequelize.define('feature', {
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
  
  Feature.associate = function (models) {
        
        models.feature.belongsTo(models.product, {
          foreignKey: 'productId'
        });

        models.feature.belongsTo(models.epic, {
          foreignKey: 'epicId'
        });
        
        models.feature.hasMany(models.story);
        models.feature.hasMany(models.task);
        models.feature.hasMany(models.comment);
        models.feature.hasMany(models.todo);
  };
  return Feature;
};