module.exports = {
    up: ( queryInterface, Sequelize ) => queryInterface.createTable( "teams", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        createdBy: {
            type: Sequelize.INTEGER,
            onDelete: "CASCADE",
            allowNull: false,
            references: {
                model: "users",
                key: "id",
            },
        },
    } ),
    down: ( queryInterface, Sequelize ) => queryInterface.dropTable( "teams" ),
};
