'use strict';
module.exports = (sequelize, DataTypes) => {
  var Feature = sequelize.define('Feature', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM('planned', 'started', 'completed')
    },
    dueDate: DataTypes.DATE,
    estimate: DataTypes.INTEGER,
    priority: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
        Feature.belongsTo(models.Product, {
          foreignKey: 'productId'
        });

        Feature.belongsTo(models.Epic, {
          foreignKey: 'epicId'
        });
        
        Feature.hasMany(models.Story);
        Feature.hasMany(models.Task);
        Feature.hasMany(models.Comment);
        Feature.hasMany(models.ToDo);
        
      }
    }
  });
  return Feature;
};