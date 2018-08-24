import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

//Reducers 
import {testReducer} from '../reducers/testReducer';


//Union
const middleware = applyMiddleware(promiseMiddleware(), logger());
const reducers = combineReducers({ 
  //reducers
  test: testReducer
});

//CreateStore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(middleware));

export default store;