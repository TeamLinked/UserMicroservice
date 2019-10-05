const uuid = require('uuid/v4');

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstname : 'John',
      lastname : 'Doe',
      password : '123456',
      createdAt : new Date(),
      updatedAt : new Date(),
      email : 'johnDoe@test.com',
      nationality: null,
      identification: null,
      birthDate: null,
      personalProf: null,
      professionalProf: null
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [{
      first_name :'John'
    }]);
  }
};
