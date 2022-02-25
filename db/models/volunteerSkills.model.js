const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize, DataTypes) => {
	const VolunteerSkills = sequelize.define('VolunteerSkill', {}, {});
  return VolunteerSkills;
};