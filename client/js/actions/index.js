import {
	EXAMPLE_TYPE,
	SAVE_JWT
} from './types';

export const exampleType = (example) => {
	return {
		type: EXAMPLE_TYPE,
		payload: example
	}
}

export const saveJWT = (jwt) => {
	return {
		type: SAVE_JWT,
		payload: jwt
	}
}