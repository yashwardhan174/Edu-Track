'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('faculty', {
      id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(100), allowNull: false
      },
      department: {
        type: Sequelize.STRING(100)
      },
      user_id: {
        type: Sequelize.INTEGER, unique: true,
        references: { model: 'users', key: 'id' },
        onDelete: 'CASCADE', onUpdate: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('faculty');
  }
};
