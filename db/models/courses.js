'use strict';
module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define('Courses', {
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    pubDate: DataTypes.DATE,
    pubUpdate: DataTypes.DATE,

  }, {});
  Courses.associate = (models) => {
    // associations can be defined here
  };
  return Courses;
};