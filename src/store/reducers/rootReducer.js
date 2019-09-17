import authReducers from './authReducers'
import giftReducer from './giftReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducers,
  gift: giftReducer 
});

export default rootReducer
