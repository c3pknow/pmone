'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
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
    },
    isLocked: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
        User.belongsToMany(models.Team, {
          through: 'member',
          foreignKey: 'userId',
        })
        

      }
    }
  });
  return User;
};