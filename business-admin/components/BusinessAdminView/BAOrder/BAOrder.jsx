import React from 'react'
import sass from './ba-order.scss'

var BAOrder = React.createClass({
    // 
    // propTypes: {
    //     order: React.PropTypes.shape({
    //         date: React.PropTypes.string,
    //         favorited: React.PropTypes.bool,
    //         items: React.PropTypes.arrayOf(React.PropTypes.shape({
    //             itemName: React.PropTypes.string,
    //             milkType: React.PropTypes.string,
    //             price: React.PropTypes.number,
    //             quantity: React.PropTypes.string,
    //             size: React.PropTypes.string,
    //
    //         })),
    //         specialInstructions: React.PropTypes.string,
    //         time: React.PropTypes.string,
    //         timeSelectedForPickup: React.PropTypes.string,
    //         timeUntilArrival: React.PropTypes.string,
    //         username: React.PropTypes.string
    //     }),
    // },

    render: function() {
        return (
            <div>
                <div className="ba-order">
                    <div className="ba-order-left">
                        <h2>{this.props.order.username}</h2>
                        <span>{this.props.order.time} - {this.props.order.date}</span>
                        <p>1 - 16oz. Mocha Latte</p>
                    </div>
                    <div className="ba-order-right">
                        <p>Time until arrival: <span className="ba-order-time">{this.props.order.timeUntilArrival ? this.props.order.timeUntilArrival : this.props.order.timeSelectedForPickup}</span></p>
                        <button>
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
