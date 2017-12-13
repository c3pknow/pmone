'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    
    dateRegistered: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
   createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }});
    
    User.associate = function (models) {
        models.user.belongsToMany(models.team, {
          through: 'member',
          foreignKey: 'userId',
        });

        models.user.hasMany(models.item, {
          foreignKey: 'userId',
        })

  };
  return User;
};