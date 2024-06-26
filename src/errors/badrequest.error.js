const BaseError = require('./base.error');
const { statusCodes } = require('http-status-codes');

class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super("Bad Request Error", statusCodes.BAD_REQUEST, `Invalid structure for ${propertyName}`, details);
  }
}

module.exports = BadRequest;