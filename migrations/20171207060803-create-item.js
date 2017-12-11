'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      estimate: {
        type: Sequelize.INTEGER
      },
      dueDate: {
        type: Sequelize.DATE
      },
      priority: {
        type: Sequelize.INTEGER
      },
      teamId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: 'teams',
          key: 'id'
        }
      },
      parentId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: 'items',
          key: 'id'
        }
      },
      hierarchyLevel: {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.NOW
      }
    })
    .then(() => {
      return queryInterface.sequelize.query("CREATE TYPE \"enum_type\" AS ENUM(\'product\', \'epic\', \'component\', \'feature\', \'story\', \'task\');")
    })
    .then(() => {
      return queryInterface.sequelize.query("ALTER TABLE \"items\" ADD COLUMN \"type\" \"enum_type\";")
    })
    .then(() => {
      return queryInterface.sequelize.query("ALTER TABLE \"items\" ADD COLUMN \"status\" \"enum_status\";")
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('items', {force:true})
    .then(() => {
      return queryInterface.sequelize.query("DROP TYPE \"enum_type\";");
    });
  }
};