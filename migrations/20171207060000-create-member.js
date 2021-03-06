module.exports = {
    up: ( queryInterface, Sequelize ) => queryInterface.createTable( "members", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        teamId: {
            type: Sequelize.INTEGER,
        },
        userId: {
            type: Sequelize.INTEGER,
        },
        role: {
            type: Sequelize.ENUM( "read", "edit", "admin", "owner", "disabled" ),
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    } ),
    down: ( queryInterface, Sequelize ) => queryInterface.dropTable( "members" ),
};
