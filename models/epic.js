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
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        Epic.belongsTo(models.Product, {
          foreignKey: 'productId'
        })

        Epic.hasMany(models.Feature);
        Epic.hasMany(models.Story);
        Epic.hasMany(models.Task);
        Epic.hasMany(models.Comment);
        Epic.hasMany(models.ToDo);
      }
    }
  });
  return Epic;
};