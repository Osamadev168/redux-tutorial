import counterReducer from './counter'
import authReducer from './authState'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    counter: counterReducer,
    auth: authReducer
})

export default reducers;