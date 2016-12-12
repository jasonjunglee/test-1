import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk, logger())(createStore);
const store = createStoreWithMiddleware(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f, autoRehydrate());

persistStore(store);

export default store;