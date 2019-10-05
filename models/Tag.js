'use strict';

module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
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
      name: {
        allowNull: false,
        type: DataTypes.STRING(31)
      }
  });
  
  Tag.associate = models => {
    Tag.belongsToMany(models.User, {through: 'TagUsers',as: 'users'});
  };
  
  return Tag;
};