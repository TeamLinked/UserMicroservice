'use strict';

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        //defaultValue: sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        //defaultValue: sequelize.literal('NOW()')
      },
      firstname: {
        allowNull: false,
        type: DataTypes.STRING
      },
      lastname: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
      	allowNull: false,
      	type: DataTypes.STRING,
      	unique: true
      },
      nationality: {
      	allowNull: true,
      	type: DataTypes.STRING
      },
      identification: { // NOTA*: Eso de la identificacion en EE.UU no se maneja tan a la ligera, puede ser prudente eliminar este campo
      	allowNull: true,
      	type: DataTypes.STRING
      },
      birthDate: {
      	allowNull: true,
        type: DataTypes.DATE
      },
      personalProf: {
      	allowNull: true,
        type: DataTypes.TEXT
      },
      professionalProf: {
      	allowNull: true,
        type: DataTypes.TEXT
      }
      
    /*
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    firstname: DataTypes.STRING(31),
    lastname: DataTypes.STRING(31),
    password: DataTypes.STRING(31),
    email: DataTypes.STRING(31),
    nationality: DataTypes.STRING(31),
    identification: DataTypes.STRING(31),
    birthDate: DataTypes.DATE,
    personalProf: DataTypes.TEXT,
    professionalProf: DataTypes.TEXT
    */
  });
  
  User.associate = models => {
    User.belongsToMany(models.Tag, {through: 'TagUsers', as: 'tags'});
  };
  
  return User;
};