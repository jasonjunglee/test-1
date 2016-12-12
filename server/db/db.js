const mysql = require('mysql');

module.exports = {
	connection: mysql.createConnection({
		host: 'sql3.freemysqlhosting.net',
		user: 'sql3144269',
		password: 'pVHpFjpnn5',
		port: 3306
	}),
	database: 'sql3144269'
}