const pg = require("pg")
require("dotenv").config();

const { Pool } = pg

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PASSWORD,
    database: process.env.PGDATABASE,
    PORT: process.env.PGPORT,
    ssl: {
        rejectUnauthorized: false,
    }
})

module.exports = pool;