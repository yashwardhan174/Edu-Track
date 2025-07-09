'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enrollments', {
      id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: { model: 'students', key: 'id' },
        onDelete: 'CASCADE', onUpdate: 'CASCADE'
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: { model: 'courses', key: 'id' },
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
    await queryInterface.dropTable('enrollments');
  }
};
