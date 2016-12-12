import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { saveJWT } from '../actions/index';

import axios from 'axios';

class SignUp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: '',
			lastName: '',
			username: '',
			password: '',
			retypedPassword: '',
		}
	}

	handleSignUp() {
		const that = this;
		if (this.state.password !== this.state.retypedPassword) {
			console.error('Passwords Do NOT match');
		} else {	
			axios.post('/api/signUp', {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				username: this.state.username,
				password: this.state.password,
			})
			.then((response) => {
				console.log('Inside handleSignUp', response);
				that.props.saveJWT(response.data);
				browserHistory.push('/');
			})
			.catch((err) => {
				console.log(err);
			})
		}
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

	handleRetypedPassword(e) {
		this.setState({
			retypedPassword: e.target.value
		})
	}

	handleFirstName(e) {
		this.setState({
			firstName: e.target.value
		})
	}

	handleLastName(e) {
		this.setState({
			lastName: e.target.value
		})
	}

	trySignUp(e) {
		if (e.keyCode === 13) {
			this.handleSignUp();
		}
	}

	testJWT() {
		console.log('Bearer {' + this.state.jwt + '}');
		axios.get('/api/protected', { headers: { Authentication: 'Bearer {' + this.state.jwt + '}' } })
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			})
	}

	render() {
		return (
			<div>
				<div>
					<h1>MySQL</h1>
				</div>
				<div>
					<input onChange={ this.handleFirstName.bind(this) } type="text" placeholder='First Name'/>
				</div>
				<div>
					<input onChange={ this.handleLastName.bind(this) } type="text" placeholder='Last Name'/>
				</div>
				<div>
					<input onChange={ this.handleUsername.bind(this) } type='text' placeholder='Username'/>
				</div>
				<div>
					<input onChange={ this.handlePassword.bind(this) } type='text' placeholder='Password'/>
				</div>
				<div>
					<input onChange={ this.handleRetypedPassword.bind(this) } onKeyDown={ this.trySignUp.bind(this) } type="text" placeholder='Retype Password'/>
				</div>
				<div>
					<button onClick={ this.handleSignUp.bind(this) }>Sign Up!</button>
				</div>
				<div>
					<button onClick={ this.testJWT.bind(this) }>Test JWT</button>
				</div>
			</div>
		)
	}
}

export default connect(null, { saveJWT })(SignUp);