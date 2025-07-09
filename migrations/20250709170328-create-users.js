'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
      },
      email: {
        type: Sequelize.STRING(100), allowNull: false, unique: true
      },
      password: {
        type: Sequelize.STRING(255), allowNull: false
      },
      role: {
        type: Sequelize.ENUM('student', 'faculty', 'admin'), allowNull: false
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
    await queryInterface.dropTable('users');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_users_role";');
  }
};
