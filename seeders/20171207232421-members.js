'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('members', [{
      teamId: 2,
      userId: 2,
      role: 'owner',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamId: 4,
      userId: 2,
      role: 'owner',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamId: 1,
      userId: 1,
      role: 'edit',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamId: 3,
      userId: 3,
      role: 'read',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
