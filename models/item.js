'use strict';
//var Sequelize = require('sequelize-hierarchy')();

module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('item', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM('under consideration', 'planned', 'started', 'completed')
    },
    type: {
      type: DataTypes.ENUM('product', 'epic', 'component', 'feature', 'story', 'task')
    },
    dueDate: DataTypes.DATE,
    estimate: DataTypes.INTEGER,
    priority: DataTypes.INTEGER,
    teamId: {
      type: DataTypes.INTEGER,
    },
    parentId: {
      type:DataTypes.INTEGER,
      //hierarchy: true
    },
    hierarchyLevel: {
      type: DataTypes.INTEGER,
    },
    createdBy: DataTypes.INTEGER
  });

  Item.isHierarchy();

  Item.associate = function (models) {
    models.item.belongsTo(models.team, {
      foreignKey: 'teamId'
    });

  };
 


  Item.associate = function (models) {
    // models.item.belongsTo(models.item, {
    //   foreignKey: 'id'
    // });

    // NOT NECESSARY, TAKEN CARE OF MY SEQUELIZE-HIERARCHY
    // models.item.belongsTo(models.item, {as: 'parent', foreignKey: 'parentId'});
    // models.item.hasMany(models.item, {as: 'children', foreignKey: 'parentId'});
    // models.item.belongsToMany(models.item, {as: 'descendents', foreignKey: 'ancestorId', through: models.itemancestor});
    // models.item.belongsToMany(models.item, {as: 'ancestors', foreignKey: 'itemId', through: models.itemancestor});
   
    models.item.hasMany(models.comment);
    models.item.hasMany(models.todo);
  };

  // Item.associate = function (models) {
  //   models.item.hasMany(models.item,
  //     {
  //       foreignKey: 'id'
  //     });
  // };







  
  return Item;
};