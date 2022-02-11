const mysql = require("mysql2");
var pool = mysql.createPool({
	host: "127.0.0.1",
	user: "root",
	password: "12345",
	database : "testdb"
});

module.exports = {
	executeQuery: function (sql, data, callback) {
		pool.getConnection(function (err, connection) {
			if (err) {
				console.log(err);
			} else {
				connection.query(sql, data, function (err1, results) {
					connection.release();
					callback(err1, results);
				});
			}
		});
	}
};
