const orderReducer = (state=[], action) => {
    
  switch (action.type) {
    case 'FETCH_ORDERS':
        console.log('fetching orders reducer');
        return state;
    default:
        return state;
  }
}

module.exports = { orderReducer }
