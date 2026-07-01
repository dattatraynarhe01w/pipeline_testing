const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = sequelize.define("User", {
  email: { type: DataTypes.STRING, unique: true },
  passwordHash: { type: DataTypes.STRING },
});

// Parametrized lookup via Sequelize ORM — no raw query concatenation.
async function findUserByEmail(email) {
  return User.findOne({ where: { email } });
}

module.exports = { User, findUserByEmail };
