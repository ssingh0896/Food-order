import React from 'react'
import sass from './ba-order-details.scss'

var BAOrderDetails = React.createClass({

    propTypes: {
        item: React.PropTypes.shape({
            itemName: React.PropTypes.string,
            milkType: React.PropTypes.string,
            price: React.PropTypes.number,
            quantity: React.PropTypes.string,
            size: React.PropTypes.string,
        }),
    },

    render: function() {

        if (this.props.item.size) {
            var itemSize = <div className="item-size">• {this.props.item.size}</div>;
        }

        if (this.props.item.milkType) {
            var milkType = <div className="item-milk-type">• {this.props.item.milkType}</div>;
        }

        return (
            <div className="ba-order-details-container">
            <span className="item-quantity">{this.props.item.quantity}</span><span className="item-name">{this.props.item.itemName}</span>
            {itemSize}
            {milkType}
            </div>
        )
    }
})

module.exports = BAOrderDetails;
