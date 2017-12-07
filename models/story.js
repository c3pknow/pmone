'use strict';
module.exports = (sequelize, DataTypes) => {
  var Story = sequelize.define('Story', {
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
        
        Story.belongsTo(models.Product, {
          foreignKey: 'productId'
        });

        Story.belongsTo(models.Epic, {
          foreignKey: 'epicId'
        });
        
        Story.belongsTo(models.Feature, {
          foreignKey: 'featureId'
        });

        Story.hasMany(models.Task);
        Story.hasMany(models.Comment);
        Story.hasMany(models.ToDo);
      }
    }
  });
  return Story;
};