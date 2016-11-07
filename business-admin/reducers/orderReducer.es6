const orderReducer = (state=[], action) => {

  switch (action.type) {
    case 'FETCH_ORDERS':
        return state;
    default:
        return state;
  }
}

module.exports = { orderReducer }
