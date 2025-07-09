'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(100), allowNull: false
      },
      age: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(100), unique: true
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
    await queryInterface.dropTable('students');
  }
};
