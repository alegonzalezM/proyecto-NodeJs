const mysql = require("mysql")

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'base_funkos_23569',
    port: 3000,
  });
  
  connection.connect();

module.exports = connection;