'use strict';
module.exports = {
  
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('products', {
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
        // status: {
        //   type: Sequelize.ENUM('under consideration', 'planned', 'started', 'completed')
        // },
        dueDate: {
          type: Sequelize.DATE
        },
        estimate: {
          type: Sequelize.INTEGER
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
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
    })
    .then(() => {
      return queryInterface.sequelize.query("CREATE TYPE \"enum_status\" AS ENUM(\'under consideration\', \'planned\',\'started\', \'completed\');")
    })
    .then(() => {
      return queryInterface.sequelize.query("ALTER TABLE \"products\" ADD COLUMN \"status\" \"enum_status\";")
    })
  
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
    .then(() => {
      return queryInterface.sequelize.query("DROP TYPE \"enum_status\";")
    });
  }
};