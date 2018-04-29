'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
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