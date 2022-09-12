const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
    user: process.env.DBUSER,
    database: process.env.DBNAME,
    password: '',
    host: process.env.DBHOST,
    port: process.env.DBPORT,
});

db.connect(function(err) {
    if(err) console.log(err);
    else console.log("connected to db");
});

module.exports = db;