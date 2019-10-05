'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tags', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(31)
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tags');
  }
};
