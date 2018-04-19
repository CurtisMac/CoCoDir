'use strict';
module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define('Courses', {
    title: DataTypes.STRING
  }, {});
  Courses.associate = (models) => {
    // associations can be defined here
  };
  return Courses;
};