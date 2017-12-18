module.exports = ( sequelize, DataTypes ) => {
    const Member = sequelize.define( "member", {
        teamId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        role: {
            type: DataTypes.ENUM( "read", "edit", "admin", "owner", "disabled" ),
        },
    } );
    return Member;
};
