'use strict';
module.exports = (sequelize, DataTypes) => {
  var Courses = sequelize.define('Courses', {
    title: DataTypes.STRING
  }, {});
  Courses.associate = function(models) {
    // associations can be defined here
  };
  return Courses;
};