'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Tag belongsToMany User
    return queryInterface.createTable(
      'TagUsers',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        TagId: {
          type: Sequelize.BIGINT,
          primaryKey: true,
        },
        UserId: {
          type: Sequelize.BIGINT,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('TagUsers');
  },
};