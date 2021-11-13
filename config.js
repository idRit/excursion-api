require('dotenv').config()

module.exports = {
    MONGO_CON_URL: process.env.MONGO_CON_URL,
    DB_NAME: process.env.DB_NAME,
    PORT: process.env.PORT,
};