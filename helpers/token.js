require("dotenv").config();
const jwt = require("jsonwebtoken");

const createToken = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

const createRefreshToken = () => {
  const token = jwt.sign({}, process.env.JWT_SECRET, {
    expiresIn: "365d",
  });
  return token;
};

module.exports = {
  createRefreshToken,
  createToken,
};
