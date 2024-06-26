const BaseError = require('./base.error');
const { statusCodes } = require('http-status-codes');

class NotImplemented extends BaseError {
  constructor(methodName) {
    super("NotImplemented", statusCodes.NOT_IMPLEMENTED, `${methodName} NotImplemented`);
  }
}

module.exports = NotImplemented;