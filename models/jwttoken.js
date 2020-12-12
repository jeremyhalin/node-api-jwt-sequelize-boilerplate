"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JwtToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JwtToken.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "JwtToken",
      underscored: true,
      tableName: "jwt_tokens",
    }
  );
  return JwtToken;
};
