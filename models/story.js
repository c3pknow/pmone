'use strict';
module.exports = (sequelize, DataTypes) => {
  var Story = sequelize.define('story', {
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

  Story.associate = function (models) {      
        models.story.belongsTo(models.product, {
          foreignKey: 'productId'
        });

        models.story.belongsTo(models.epic, {
          foreignKey: 'epicId'
        });
        
        Story.belongsTo(models.feature, {
          foreignKey: 'featureId'
        });

        models.story.hasMany(models.task);
        models.story.hasMany(models.comment);
        models.story.hasMany(models.todo);
  };
  return Story;
};