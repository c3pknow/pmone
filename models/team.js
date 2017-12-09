'use strict';
module.exports = (sequelize, DataTypes) => {
  var Team = sequelize.define('team', {
    name: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
   });
   
   Team.associate = function (models) {
    
    models.team.belongsToMany(models.user, {
              through:'member',
              foreignKey: 'teamId'
            });
    models.team.belongsTo(models.user, {
          foreignKey: 'createdBy'
        });

    models.team.hasMany(models.product, {
          foreignKey: 'teamId'
        });

    };
  return Team;
};

