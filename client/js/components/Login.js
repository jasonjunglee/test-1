import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import axios from 'axios';

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			bcrypt: ''
		}
	}

	handleLogin() {
		// Send to Server for password hashing(bcrypt) and compare with DB
		axios.post('/api/login', {
			username: this.state.username,
			password: this.state.password
		})
		.then((response) => {
			console.log(response);
			browserHistory.push('/Content');
		})
		.catch((err) => {
			console.log(err);
		})
	}

	handleUsername(e) {
		this.setState({
			username: e.target.value
		})
	}

	handlePassword(e) {
		this.setState({
			password: e.target.value
		})
	}

	tryLogin(e) {
		if (e.keyCode === 13) {
			this.handleLogin();
		}
	}

	handleBcrypt(e) {
		this.setState({
			bcrypt: e.target.value
		})
	}

	// postBcrypt() {
	// 	axios.post('/api/bcrypt', { data: this.state.bcrypt })
	// 		.then((response) => {
	// 			console.log(response);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		})
	// }

	// tryBcrypt(e) {
	// 	if (e.keyCode === 13) {
	// 		this.postBcrypt();
	// 	}
	// }

				// <div>
				// 	<input
				// 		onChange={ this.handleBcrypt.bind(this) }
				// 		onKeyDown={ this.tryBcrypt.bind(this) }
				// 		placeholder='bcrypt me'
				// 		type="text"/>
				// </div>
				
	render() {
		return (
			<div className='loginContainer'>
				<div className='usernameInput'>
					<input
						onChange={ this.handleUsername.bind(this) }
						type='text'
						placeholder='Username'/>
				</div>
				<div className='passwordInput'>
					<input
					onKeyDown={ this.tryLogin.bind(this) }
					onChange={ this.handlePassword.bind(this) }
					type='text'
					placeholder='Password'/>
				</div>
				<div>
					<button
						onClick={ this.handleLogin.bind(this) }>
							Login
					</button>
				</div>
					<Link to={'/SignUp'}>
						New User? SignUp!
					</Link>
			</div>
		)
	}
}

export default Login;