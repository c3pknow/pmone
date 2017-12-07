'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    comment: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        Comment.belongsTo(models.Task, {
          foreignKey: 'taskId'
        })

        Comment.belongsTo(models.Story, {
          foreignKey: 'storyId'
        })

        Comment.belongsTo(models.Feature, {
          foreignKey: 'featureId'
        })
        
        Comment.belongsTo(models.Epic, {
          foreignKey: 'epicId'
        })
        
        Comment.belongsTo(models.Product, {
          foreignKey: 'productId'
        })
      }
    }
  });
  return Comment;
};