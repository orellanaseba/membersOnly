require("dotenv").config();

const { Pool } = require("pg")

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;


const pool = new Pool({
    host: PGHOST,
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
    port: PGPORT
})

module.exports = pool;