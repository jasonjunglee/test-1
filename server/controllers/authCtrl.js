var AuthModel = require('../models/authModel');

module.exports = {
	'/login': {
		get: (req, res) => {
			console.log('/login GET route');
		},
		post: (req, res) => {
			console.log('/login POST route');
			AuthModel.checkCredentials(req, res);
		},
		put: (req, res) => {
			console.log('/login PUT route');
		},
		delete: (req, res) => {
			console.log('/login DELETE route');
		}
	},
	'/signUp': {
		get: (req, res) => {
			console.log('/signUp GET route');
		},
		post: (req, res) => {
			console.log('/signUp POST route');
			AuthModel.signUp(req, res);
		},
		put: (req, res) => {
			console.log('/signUp PUT route');
		},
		delete: (req, res) => {
			console.log('/signUp DELETE route');
		},
	},
	'/bcrypt': {
		get: (req, res) => {
			console.log('/bcrypt GET route');
		},
		post: (req, res) => {
			console.log('/bcrypt POST route');
			AuthModel.bcrypt(req, res);
		},
		put: (req, res) => {
			console.log('/bcrypt PUT route');
		},
		delete: (req, res) => {
			console.log('/bcrypt DELETE route');
		}
	}
}