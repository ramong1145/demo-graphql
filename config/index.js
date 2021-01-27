const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  app_port: process.env.APPLICATION_PORT,
  mongo_db: process.env.MONGO_DB,
  mongo_user: process.env.MONGO_USER,
  mongo_pass: process.env.MONGO_PASS
};