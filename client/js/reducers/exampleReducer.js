import { EXAMPLE_TYPE } from '../actions/types';

const INITIAL_STATE = { example: [] };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EXAMPLE_TYPE: {
			INITIAL_STATE.example.push(action.payload);
			return INITIAL_STATE;
		}
	}
	return state;
}