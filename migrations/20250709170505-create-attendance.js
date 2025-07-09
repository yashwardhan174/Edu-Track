'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('attendance', {
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
      timestamp: {
        type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW')
      },
      status: {
        type: Sequelize.ENUM('present', 'absent')
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
    await queryInterface.dropTable('attendance');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_attendance_status";');
  }
};
