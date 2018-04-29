'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    author: DataTypes.STRING,
    rating: DataTypes.INTEGER,
  },{
    //options can be defined here
  });
  Review.associate = function(models) {
    Review.belongsTo(models.Course, {
      foreignKey: 'courseId',
      onDelete: 'CASCADE'
    })
  };
  return Review;
};