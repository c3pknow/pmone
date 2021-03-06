module.exports = {
    up: ( queryInterface, Sequelize ) => queryInterface.bulkInsert( "todos", [
        {
            id: 1,
            name: "To Do 1",
            description: "I have a comment for you so you better listen up!",
            dueDate: new Date(),
            status: "under consideration",
            itemId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 2,
        },
        {
            id: 2,
            name: "To Do 2",
            description: "I have a comment for you so you better listen up!",
            dueDate: new Date(),
            status: "started",
            itemId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 2,
        },
        {
            id: 3,
            name: "To Do 3",
            description: "I have a comment for you so you better listen up!",
            dueDate: new Date(),
            status: "completed",
            itemId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 2,
        },
        {
            id: 4,
            name: "To Do 4",
            description: "I have a comment for you so you better listen up!",
            dueDate: new Date(),
            status: "under consideration",
            itemId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 2,
        },
        {
            id: 5,
            name: "To Do 5",
            description: "I have a comment for you so you better listen up!",
            dueDate: new Date(),
            status: "under consideration",
            itemId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 2,
        },
        {
            id: 6,
            name: "To Do 6",
            description: "I have a comment for you so you better listen up!",
            dueDate: new Date(),
            status: "under consideration",
            itemId: 27,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 2,
        },
        {
            id: 7,
            name: "To Do 7",
            description: "I have a comment for you so you better listen up!",
            dueDate: new Date(),
            status: "under consideration",
            itemId: 33,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 2,
        },
        {
            id: 8,
            name: "To Do 8",
            description: "I have a comment for you so you better listen up!",
            status: "under consideration",
            itemId: 41,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 2,
        },
        {
            id: 9,
            name: "To Do 9",
            description: "I have a comment for you so you better listen up!",
            dueDate: new Date(),
            status: "under consideration",
            itemId: 44,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 2,
        },
        {
            id: 10,
            name: "To Do 10",
            description: "I have a comment for you so you better listen up!",
            dueDate: new Date(),
            status: "under consideration",
            itemId: 16,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: 2,
        },
        {
            id: 11,
            name: "To Do 11",
            description: "I have a comment for you so you better listen up!",
            dueDate: new Date(),
            status: "planned",
            itemId: 10,
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
