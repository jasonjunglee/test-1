import { combineReducers } from 'redux';

import example from './exampleReducer';
import savejwt from './savejwtReducer';

const rootReducer = combineReducers({
	example,
	savejwt
});

export default rootReducer;