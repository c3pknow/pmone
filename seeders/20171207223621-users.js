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

    return queryInterface.bulkInsert('users', [{
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo@demo.com',
      password: 'abc123',
      dateRegistered: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      firstName: 'Brian',
      lastName: 'Pino',
      email:'brianpino@gmail.com',
      password: 'abc123',
      dateRegistered: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      firstName: 'Marie',
      lastName: 'Carpenter',
      email:'mc@gmail.com',
      password: 'abc123',
      dateRegistered: new Date(),
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

    return queryInterface.bulkDelete('users', null, {});
  }
};
