import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import socketReducer from './socketReducer'
import authReducer from './authReducer'
import villageReducer from './villageReducer'
import attackReducer from './attackReducer'

const reducers = combineReducers({authReducer, villageReducer, attackReducer, socketReducer})

export default createStore(reducers, applyMiddleware(promiseMiddleware))