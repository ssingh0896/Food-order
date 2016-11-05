import React from 'react'
import sass from './orders-container.scss'
import BAOrder from '../BAOrder/BAOrder'

var OrdersContainer = React.createClass({

    propTypes: {
        orders: React.PropTypes.array
    },

    render: function() {

        var orders = this.props.orders.map(
            function(order) {
                return <BAOrder
                            key={order._id}
                            order={order} />
        }, this);

        return (
            <div className="ba-orders-container">
                {orders}
            </div>
        )
    }
});

module.exports = OrdersContainer;
