'use strict';

module.exports = (sequelize, DataTypes) => {
  var TagUsers = sequelize.define('TagUsers', {
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
      TagId: {
        allowNull: false,
        type: DataTypes.BIGINT,
        primaryKey: true
      },
      UserId: {
        allowNull: false,
        type: DataTypes.BIGINT,
        primaryKey: true
      }
  });
  
  return TagUsers;
};