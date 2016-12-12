import { SAVE_JWT } from '../actions/types';

const INITIAL_STATE = { jwt: '' };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SAVE_JWT: {
			INITIAL_STATE.jwt = action.payload;
			return INITIAL_STATE;
		}
	}
	return state;
}