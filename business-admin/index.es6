import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import routes from './routes'
import store from './store'
import style from './style.scss'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
)



// list orders by time until arrival
// timer for orders placed at pickup time
// create timer based on time until arrival that counts down and then renders 'customer is here' when it hits 0:00
// create responsive navigation
// add email or text notification options for user on consumer side
// create upcoming orders and 'triggered orders' sections
// create notification and 'ding' sound when order comes in
// create notification animation thing when an order is completed

// Create previous orders page -- all completed orders
