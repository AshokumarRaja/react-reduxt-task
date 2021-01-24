import { createStore } from 'redux';
import formReducer from './formReducer';
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
const middleware = [thunk]
export const store = createStore(formReducer, composeWithDevTools(applyMiddleware(...middleware)))