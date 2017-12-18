module.exports = {
    up: ( queryInterface, Sequelize ) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

        queryInterface.addColumn( "items", "assignedTo", { type: Sequelize.INTEGER } )
            .then( () => {
                queryInterface.addConstraint( "items", [ "assignedTo" ], {
                    type: "FOREIGN KEY",
                    name: "items_fkey_assignedTo_to_User",
                    references: {
                        table: "users",
                        field: "id",
                    },
                    onDelete: "cascade",
                    onUpdate: "cascade",
                } );
            } ),

    down: ( queryInterface, Sequelize ) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    },
};
