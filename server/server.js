const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressJWT = require('express-jwt');
const jwt = require('jsonwebtoken');
const routes = require('./routes/authRoutes');

app.use(express.static('../client'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', routes);
app.use(expressJWT({ secret: 'shh... it`s a secret' }).unless(
	{ path:['/favicon.ico', '/SignUp','/api/signUp', '/api/login', '/api/application', '/api/bcrypt'] }));

app.get('*', (req, res) => {
		res.sendFile(path.resolve('../client/', 'index.html'));
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Server is listening to port, ' + port);
})