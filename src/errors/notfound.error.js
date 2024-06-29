const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');


class NotFoundError extends BaseError {
  constructor(details) {
    super("Not Found Error", StatusCodes.NOT_FOUND, "Resource not found", details);
  }
}

module.exports = NotFoundError;