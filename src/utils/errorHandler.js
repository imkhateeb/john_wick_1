const BaseError = require('../errors/base.error');
const { statusCodes } = require('http-status-codes');

function errorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.details,
      data: {}, // This is to ensure that the response always has a data key but bcz this is an exception, it will be empty
    });
  }


  // This is for unhandled errors
  return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: 'Internal Server Error',
    error: 'Something went wrong',
    data: {}, // This is to ensure that the response always has a data key but bcz this is an exception, it will be empty
  });
}

module.exports = errorHandler;