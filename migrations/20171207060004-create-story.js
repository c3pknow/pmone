'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      dueDate: {
        type: Sequelize.DATE
      },
      estimate: {
        type: Sequelize.INTEGER
      },
      priority: {
        type: Sequelize.INTEGER
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
      productId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      epicId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: 'epics',
          key: 'id'
        }
      },
      featureId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: 'features',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => {
      return queryInterface.sequelize.query("ALTER TABLE \"stories\" ADD COLUMN \"status\" \"enum_status\";")
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('stories');
  }
};