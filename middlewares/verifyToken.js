const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { ErrorHandler } = require("../helpers/errorHandler");
require("dotenv").config();

async function verifyToken(req, res, next) {
  try {
    const token = req.headers["x-access-token"];

    if (!token) {
      throw new ErrorHandler(StatusCodes.FORBIDDEN, "No token provided");
    }

    await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw new ErrorHandler(StatusCodes.FORBIDDEN, err.message);
      }
      req.userId = decoded.id;

      // ? check if user exists
    });

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = verifyToken;
