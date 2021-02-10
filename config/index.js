const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mongo_connection_string = process.env.MONGO_CONNECTION_STRING,
};