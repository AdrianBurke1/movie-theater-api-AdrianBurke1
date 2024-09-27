// import our db, Model, DataTypes
const { db, DataTypes } = require('../db/connection')

// Creating a User child class from the Model parent class
const User = db.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

// exports
module.exports = User
