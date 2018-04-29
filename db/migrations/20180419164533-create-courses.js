'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Courses', {
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      instructor: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT
      },
      avgRating: Sequelize.INTEGER,
      cost: {
        type: Sequelize.FLOAT
      },
      paymentModel: {
        type: Sequelize.STRING
      },
      pubDate: {
        type: Sequelize.DATE
      },
      courseUpdate: {
        type: Sequelize.DATE
      },

      //Default columns, not on model
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Courses');
  }
};