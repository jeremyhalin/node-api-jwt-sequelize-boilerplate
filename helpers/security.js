const crypto = require("crypto");

const generateSalt = () => {
  return crypto.randomBytes(64).toString("hex");
};

const generateSecuredHash = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
};

const checkHash = (password, salt, hash) => {
  const newHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return newHash === hash;
};

module.exports = { generateSalt, generateSecuredHash, checkHash };
