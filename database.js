const mysql = require('mysql2');

const pool = mysql.createPool({
     host: "200.132.13.90",
     user: "roger",
     password: "roger",
     database: "christianjoao",
     multipleStatements: true
});

module.exports = pool.promise();