import { FETCH_ORDERS_SUCCESS, FETCH_ORDERS_ERROR } from '../actions/index'

const orderReducer = (state=null, action) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
        return action.orders.data;
    case FETCH_ORDERS_ERROR:
        return state;
    default:
        return state;
  }
}

module.exports = { orderReducer }
