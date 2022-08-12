const mongo = require('mongodb');
var url = "mongodb://localhost:27017/mydb";


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database Opened");
    db.close();
  });
  

module.exports = pool.promise();