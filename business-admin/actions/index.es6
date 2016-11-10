import axios from 'axios'

export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR';

function fetchOrdersSuccess(response) {
    return {
        type: FETCH_ORDERS_SUCCESS,
        orders: response
    };
}

function fetchOrdersError(err) {
    return {
        type: FETCH_ORDERS_ERROR,
        payload: err
    }
}

export function fetchOrders() {
    console.log('fetch orders called');
  return function(dispatch) {
    axios.get('/api/orders')
      .then((response) => {
        dispatch(fetchOrdersSuccess(response))
      })
      .catch((err) => {
          console.log(err);
        dispatch(fetchOrdersError(err))
      })
  }
}
