'use strict';
module.exports = (sequelize, DataTypes) => {
  var Member = sequelize.define('member', {
    teamId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    role: {
      type: DataTypes.ENUM('read', 'edit', 'admin', 'owner', 'disabled')
    },
  });
  return Member;
};