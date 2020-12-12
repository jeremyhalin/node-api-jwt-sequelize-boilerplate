"use strict";
const { Model } = require("sequelize");
const { generateSalt, generateSecuredHash } = require("../helpers/security");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("Admin", "Guest"),
        allowNull: true,
        defaultValue: "Guest",
      },
    },
    {
      sequelize,
      modelName: "User",
      underscored: true,
      tableName: "users",

      hooks: {
        beforeValidate: (user, options) => {
          if (user.changed("password")) {
            user.salt = generateSalt();
            user.password = generateSecuredHash(user.password, user.salt);
          }
        },
      },
    }
  );

  return User;
};
