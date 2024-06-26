const BaseError = require('./base.error');
const { statusCodes } = require('http-status-codes');

class InternalServerError extends BaseError {
  constructor(details) {
    super("Internal Server Error", statusCodes.INTERNAL_SERVER_ERROR, `Something went wrong`, details);
  }
}

module.exports = InternalServerError;