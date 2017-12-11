'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.TEXT
      },
      createdBy: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      teamtId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: 'teams',
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: 'products',
          key: 'id'
        }
      },
       itemId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: 'items',
          key: 'id'
        }
      },
      // epicId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: "CASCADE",
      //   allowNull: true,
      //   references: {
      //     model: 'epics',
      //     key: 'id'
      //   }
      // },
      // featureId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: "CASCADE",
      //   allowNull: true,
      //   references: {
      //     model: 'features',
      //     key: 'id'
      //   }
      // },
      // storyId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: "CASCADE",
      //   allowNull: true,
      //   references: {
      //     model: 'stories',
      //     key: 'id'
      //   }
      // },
      // taskId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: "CASCADE",
      //   allowNull: true,
      //   references: {
      //     model: 'tasks',
      //     key: 'id'
      //   }
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments');
  }
};