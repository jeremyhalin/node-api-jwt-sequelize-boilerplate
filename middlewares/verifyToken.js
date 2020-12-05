const jwt = require("jsonwebtoken");
const HttpStatus = require("http-status-codes");
const { ErrorHandler } = require("../helpers/ErrorHandler");
require("dotenv").config();

async function verifyToken(req, res, next) {
  try {
    const token = req.headers["x-access-token"];

    if (!token) {
      throw new ErrorHandler(HttpStatus.FORBIDDEN, "No token provided");
    }

    await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw new ErrorHandler(HttpStatus.FORBIDDEN, err.message);
      }
      console.log(decoded);
      req.userId = decoded.id;

      // TODO check if user exists
    });

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = verifyToken;
