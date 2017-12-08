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
    },
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