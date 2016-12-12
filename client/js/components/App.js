import React, { Component } from 'react';

import SignUp from './SignUp';

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='app'>
				<div>
					<h1>Make this a NavBar</h1>
				</div>
				<div>
					{ this.props.children }
				</div>
			</div>
		)
	}
}

export default App;