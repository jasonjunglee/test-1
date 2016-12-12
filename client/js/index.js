import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import styles from '../styles/main.scss';

import App from './components/App';
// import Splash from './components/Splash';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Content from './components/Content';

const router =
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Login}/>
			</Route>
			<Route path='/SignUp' component={SignUp}></Route>
			<Route path='/Login' component={Login}></Route>
			<Route path='/Content' component={Content}></Route>
		</Router>
	</Provider>

render(router, document.getElementById('root'));
