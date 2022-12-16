var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'test',
  password : '1111',
  database : 'user'
});
 
connection.connect();
 
connection.query('SELECT * from u', function (error, results, fields) {
  console.log('users: ', results);
});
 
connection.end();