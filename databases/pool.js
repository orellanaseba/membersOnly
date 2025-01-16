require("dotenv").config();

const { Pool } = require("pg")

const { HOST, DATABASE, USER, PASSWORD, PORT } = process.env;

const pool = new Pool({
    host: HOST,
    database: DATABASE,
    user: USER,
    password: PASSWORD,
    port: PORT
})

module.exports = pool;