var express = require("express");
var router = express.Router();
const { StatusCodes } = require("http-status-codes");
const models = require("../models");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const users = await models.User.findAll();

    res.status(StatusCodes.OK).json({
      data: users,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
