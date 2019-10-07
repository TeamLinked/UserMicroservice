'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Tags', [{
			name: 'Software Development',
			createdAt : new Date(),
      updatedAt : new Date()
		}], {
			returning: true
		}).then(function (tags) {
			return queryInterface.bulkInsert('Tags', [{
				name: 'Administration',
			createdAt : new Date(),
      updatedAt : new Date(),
			}], {
			  returning: true
			});
		}).then(function (tags) {
			return queryInterface.bulkInsert('Tags', [{
				name: 'Merketing',
			createdAt : new Date(),
      updatedAt : new Date(),
			}], {
			  returning: true
			});
		}).then(function (tags) {
			return queryInterface.bulkInsert('Tags', [{
				name: 'Human Resouces',
			createdAt : new Date(),
      updatedAt : new Date(),
			}], {
			  returning: true
			});
		}).then(function (tags) {
			return queryInterface.bulkInsert('Tags', [{
				name: 'Executive Assistant',
			createdAt : new Date(),
      updatedAt : new Date(),
			}], {
			  returning: true
			});
		}).then(function (tags) {
			return queryInterface.bulkInsert('Tags', [{
				name: 'Customer Support',
			createdAt : new Date(),
      updatedAt : new Date(),
			}], {
			  returning: true
			});
		}).then(function (tags) {
			return queryInterface.bulkInsert('Tags', [{
				name: 'Engineering',
			createdAt : new Date(),
      updatedAt : new Date(),
			}], {
			  returning: true
			});
		}).then(function (tags) {
			return queryInterface.bulkInsert('Tags', [{
				name: 'Telecomunications',
			createdAt : new Date(),
      updatedAt : new Date(),
			}], {
			  returning: true
			});
		}).then(function (tags) {
			return queryInterface.bulkInsert('Tags', [{
				name: 'Project management',
			createdAt : new Date(),
      updatedAt : new Date(),
			}], {
			  returning: true
			});
		}).then(function (tags) {
			return queryInterface.bulkInsert('Tags', [{
				name: 'Finance',
			createdAt : new Date(),
      updatedAt : new Date(),
			}], {
			  returning: true
			});
		}).then(function (tags) {
			return queryInterface.bulkInsert('Tags', [{
				name: 'Graphic Design',
			createdAt : new Date(),
      updatedAt : new Date(),
			}], {
			  returning: true
			});
		}).then(function (tags) {
			return queryInterface.bulkInsert('Tags', [{
				name: 'Health',
			createdAt : new Date(),
      updatedAt : new Date(),
			}], {});
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', [{
      name :'Software Development'
    }], {
      returning: true
    }).then(function (tags){
      return queryInterface.bulkDelete('Users', [{
        name :'Administration'
      }],{
        returning: true
      });
    }).then(function (tags){
      return queryInterface.bulkDelete('Users', [{
        name :'Marketing'
      }],{
        returning: true
      });
    }).then(function (tags){
      return queryInterface.bulkDelete('Users', [{
        name :'Human Resouces'
      }],{
        returning: true
      });
    }).then(function (tags){
      return queryInterface.bulkDelete('Users', [{
        name :'Executive Assistant'
      }],{
        returning: true
      });
    }).then(function (tags){
      return queryInterface.bulkDelete('Users', [{
        name :'Customer Support'
      }],{
        returning: true
      });
    }).then(function (tags){
      return queryInterface.bulkDelete('Users', [{
        name :'Engineering'
      }],{
        returning: true
      });
    }).then(function (tags){
      return queryInterface.bulkDelete('Users', [{
        name :'Telecomunications'
      }],{
        returning: true
      });
    }).then(function (tags){
      return queryInterface.bulkDelete('Users', [{
        name :'Project management'
      }],{
        returning: true
      });
    }).then(function (tags){
      return queryInterface.bulkDelete('Users', [{
        name :'Finance'
      }],{
        returning: true
      });
    }).then(function (tags){
      return queryInterface.bulkDelete('Users', [{
        name :'Graphic Design'
      }],{
        returning: true
      });
    }).then(function (tags){
      return queryInterface.bulkDelete('Users', [{
        name :'Health'
      }],{});
    });
	}
};