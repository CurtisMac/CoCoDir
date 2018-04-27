'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
  }, {});
  Reviews.associate = function(models) {
    // associations can be defined here
  };
  return Reviews;
};