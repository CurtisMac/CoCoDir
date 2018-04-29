'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructor: DataTypes.STRING,
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    avgRating: DataTypes.INTEGER,
    cost: DataTypes.FLOAT,
    paymentModel: DataTypes.STRING,
    pubDate: DataTypes.DATE,
    courseUpdate: DataTypes.DATE,
  },{
    //options can be defined here
  });
  Course.associate = (models) => {
    Course.hasMany(models.Review, {
      foreignKey: 'reviewId',
      as: 'reviews'
    })
  };
  return Course;
};