var express = require("express");
var logger = require("morgan");
require("dotenv").config();

const { handleError } = require("./helpers/errorHandler");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use("/", indexRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);

app.use((err, req, res, next) => handleError(err, res));

module.exports = app;
