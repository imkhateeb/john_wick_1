const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_CONNECTION_STRING,
  NODE_ENV: process.env.NODE_ENV,
  LOG_DB_URI: process.env.MONGO_LOG_URI,
}