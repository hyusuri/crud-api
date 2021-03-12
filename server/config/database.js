const { createPool } = require("mysql");

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MY_SQLDB,
    connectionLimit: 10
})

module.exports = pool;