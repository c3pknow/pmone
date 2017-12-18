module.exports = ( sequelize, DataTypes ) => {
    const Team = sequelize.define( "team", {
        name: DataTypes.STRING,
        createdBy: DataTypes.INTEGER,
    } );

    Team.associate = function ( models ) {
        models.team.belongsToMany( models.user, {
            through: "member",
            foreignKey: "teamId",
        } );
        models.team.belongsTo( models.user, {
            foreignKey: "createdBy",
        } );

        models.team.hasMany( models.product, {
            foreignKey: "teamId",
        } );

        models.team.hasMany( models.item, {
            foreignKey: "teamId",
        } );
    };
    return Team;
};
