module.exports = {
    up: ( queryInterface, Sequelize ) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
        queryInterface.bulkInsert( "comments", [
            {
                id: 1,
                comment: "I have a comment for you so you better listen up!",
                itemId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 2,
            },
            {
                id: 2,
                comment: "I have a pile of shit for you so you better listen up!",
                itemId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 2,
            },
            {
                id: 3,
                comment: "I have a task for you so you better listen up!",
                itemId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 2,
            },
            {
                id: 4,
                comment: "I have a riddle for you so you better listen up!",
                itemId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 2,
            },
            {
                id: 5,
                comment: "I comment  you up!",
                itemId: 18,
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 2,
            },
            {
                id: 6,
                comment: " a comment for you so listen up!",
                itemId: 38,
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 2,
            },
            {
                id: 7,
                comment: "I listen up!",
                itemId: 45,
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 2,
            },
            {
                id: 8,
                comment: "listen up!",
                itemId: 25,
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 2,
            },

        ], {} ),

    down: ( queryInterface, Sequelize ) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    },
};
