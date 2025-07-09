'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courses', {
      id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
      },
      title: {
        type: Sequelize.STRING(255), allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      faculty_id: {
        type: Sequelize.INTEGER,
        references: { model: 'faculty', key: 'id' },
        onDelete: 'SET NULL', onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('courses');
  }
};
