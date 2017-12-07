'use strict';
module.exports = (sequelize, DataTypes) => {
  var Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Team.belongsToMany(models.User, {
          through:'member',
          foreignKey: 'teamId'
        });

        Team.belongsTo(models.User, {
          foreignKey: 'owner'
        });

        Team.hasMany(model.Products);
      }
    }
  });
  return Team;
};
