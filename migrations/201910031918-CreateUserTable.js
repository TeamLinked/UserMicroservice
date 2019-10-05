'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
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
      firstname: {
        allowNull: false,
        type: Sequelize.STRING(31)
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING(31)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(31)
      },
      email: {
      	allowNull: false,
      	type: Sequelize.STRING(31)
      },
      nationality: {
      	allowNull: true,
      	type: Sequelize.STRING(31)
      },
      identification: { // NOTA*: Eso de la identificacion en EE.UU no se maneja tan a la ligera, puede ser prudente eliminar este campo
      	allowNull: true,
      	type: Sequelize.STRING(31)
      },
      birthDate: {
      	allowNull: true,
        type: Sequelize.DATE,
      },
      personalProf: {
      	allowNull: true,
        type: Sequelize.TEXT,
      },
      professionalProf: {
      	allowNull: true,
        type: Sequelize.TEXT,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};