const mysql = require('mysql2');

const pool = mysql.createPool({
     host: "",
     user: "",
     password: "",
     database: "",
     multipleStatements: true
});

module.exports = pool.promise();