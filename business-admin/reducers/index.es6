import { combineReducers } from 'redux';
import { orderReducer } from './orderReducer';

const appReducer = combineReducers({
    orders: orderReducer
})

module.exports = appReducer;
