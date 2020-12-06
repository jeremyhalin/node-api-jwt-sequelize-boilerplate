class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  let { statusCode } = err;
  const { message } = err;
  if (!statusCode) {
    statusCode = 500;
  }
  res.status(statusCode).json({
    errors: [
      {
        status: statusCode,
        title: message,
      },
    ],
  });
};

module.exports = {
  ErrorHandler,
  handleError,
};
