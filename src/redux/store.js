import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './authReducer'
import villageReducer from './villageReducer'

const reducers = combineReducers({authReducer, villageReducer})

export default createStore(reducers, applyMiddleware(promiseMiddleware))