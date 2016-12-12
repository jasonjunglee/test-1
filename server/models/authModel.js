const db = require('../db/db');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

module.exports = {

	//////////////////
	///// SIGNUP /////
	//////////////////

	signUp: (req, res) => {
		// how is the database autoincrementing if I am passing in 0 as the id param;
		const counter = 0;
		const firstName = req.body.firstName;
		const lastName = req.body.lastName;
		const username = req.body.username;
		const plainPassword = req.body.password;

// 		bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(plainPassword, salt, (err, hash) => {
//   		 if (err) {
//   		 	console.log('ERROR MAKING HASH - ', err);
//   		 } else {
// 					db.connection.query('INSERT INTO sql3144269.Users VALUES (' + counter + ',' + firstName + ',' + lastName + ',' + username + ',' + hash + ')', (err, result) => {
// 						if (err) {
// 							console.log(err);
// 						} else {
// 							console.log(result);
// 						}
// 					})
//   		 }
//     });
// });
		
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(plainPassword, salt, (err, hash) => {
			db.connection.query('INSERT INTO sql3144269.Users VALUES ("' + counter + '","' + firstName + '","' + lastName + '","' + username + '","' + hash + '")', (err, result) => {
							if (err) {
								console.log(err);
							} else {
								console.log(result);
							}
						})
		})
	})
		
		// console.log('compareSync - ', bcrypt.compareSync(plainPassword, hash));
		// var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

		// return new Promise(function(resolve, reject){
  //       bcrypt.genSalt(10, function(err, salt) {
  //         bcrypt.hash(password, salt, null, function(err, hash) {
  //           if(err){ return err; }
  //           model.set('password',hash);
  //           resolve();
  //         })
  //       })
  //     })

	},

	///////////////////
	////// LOGIN //////
	///////////////////

	checkCredentials: (req, res) => {
		var username = req.body.username;
		var plainPassword = req.body.password;
		var hashedPassword;
		console.log('Inside checkCredentials in LoginModel');
		db.connection.query('SELECT password FROM sql3144269.Users WHERE username = "' + username + '" ', (err, result) => {
			if (err) {
				console.log('ERROR IN checkCredentials: ', err);
			} else {
				hashedPassword = result[0].password;	
				console.log('hashedPassword - ', hashedPassword);

				bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
					if (err) {
						console.log('COMPARED - error - ', err);
					} else {
						console.log('plainPassword - ', plainPassword);
						console.log('COMPARED - result - ', result);
					}
				})
				// console.log('check HASH - ', result);
				// console.log('plainPassword - ', plainPassword);
				// console.log('HASH - ', hashedPassword);			
				// If password matches password stored in database, send the user a JSON web token
				// console.log('Are the passwords equal - ', bcrypt.compareSync(plainPassword, hashedPassword));
				// bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
				// 	if (err) {
				// 		console.log('something new - error - ', err);
				// 	} else {
				// 		console.log('something new - result - ', result);
				// 	}
				// });

				// if (bcrypt.compareSync(password, hashedPassword)) {
				// 	const myToken = jwt.sign({ username: username }, 'shh... it`s a secret');
				// jwt.verify(myToken, 'shh... it`s a secret', (err, decoded) => {
				// 	if (err) {
				// 		console.log(err);
				// 	} else {
				// 		console.log('JWT decoded: ', decoded);
				// 		res.json(myToken);
				// 	}
				// })
				// }
			}
		});
	},

	////////////////
	///// MISC /////
	////////////////

	fetchUsers: (req, res) => {
		db.connection.query('SELECT * FROM sql3144269.Users WHERE id', (err, result) => {
			if (err) {
				console.log('ERROR IN Users fetchUsers: ', err);
			} else {
				console.log('fetchUsers: ', result);
				res.json(result);
			}
		})
	},

	clearDB: (req, res) => {
		console.log('Inside clearDB in LoginModel');
		db.connection.query('DELETE FROM sql3144269.Users');
	}

}