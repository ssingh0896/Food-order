import React from 'react'
import sass from './ba-order.scss'
import BAOrderDetails from '../BAOrderDetails/BAOrderDetails'

var BAOrder = React.createClass({

    propTypes: {
        order: React.PropTypes.shape({
            _id: React.PropTypes.string,
            date: React.PropTypes.string,
            favorited: React.PropTypes.bool,
            items: React.PropTypes.arrayOf(React.PropTypes.shape({
                itemName: React.PropTypes.string,
                milkType: React.PropTypes.string,
                price: React.PropTypes.number,
                quantity: React.PropTypes.string,
                size: React.PropTypes.string,

            })),
            specialInstructions: React.PropTypes.string,
            time: React.PropTypes.string,
            timeSelectedForPickup: React.PropTypes.string,
            timeUntilArrival: React.PropTypes.string,
            username: React.PropTypes.string,
            completed: React.PropTypes.bool
        }),
        completeOrder: React.PropTypes.func
    },

    _handleCompleteOrder: function() {
        this.props.completeOrder(this.props.order._id)
    },

    render: function() {

        var orderDetails = this.props.order.items.map(
            function(item, i) {
                return <BAOrderDetails
                            key={i}
                            item={item} />
        });

        if (this.props.order.specialInstructions) {
            var specialInstructions = <div className="special-instructions">"{this.props.order.specialInstructions}"</div>
        }

        return (
            <div>
                <div className={this.props.order.completed ? "ba-order ba-order-complete" : "ba-order"}>
                    <div className="ba-order-left">
                        <h2>{this.props.order.username}</h2> <p>{this.props.order.time} - {this.props.order.date}</p>
                        {orderDetails}
                        {specialInstructions}
                    </div>
                    <div className="ba-order-right">
                        <p>ETA: <span className="ba-order-time">{this.props.order.timeUntilArrival ? this.props.order.timeUntilArrival : this.props.order.timeSelectedForPickup}</span></p>
                        <button onClick={this._handleCompleteOrder}>
                            Complete
                            <i className="fa fa-check-circle fa-2x" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = BAOrder;
