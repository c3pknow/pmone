'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
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

        Product.belongTo(models.Team, {
          foreignKey: 'teamId'
        });

        Product.hasMany(models.Epic);
        Product.hasMany(models.Feature);
        Product.hasMany(models.Story);
        Product.hasMany(models.Task);
        Product.hasMany(models.Comment);
        Product.hasMany(models.ToDo);
      }
    }
  });
  return Product;
};