import React from 'react'
import BusinessAdminView from './BusinessAdminView/BusinessAdminView/BusinessAdminView'
import request from 'superagent'

var App = React.createClass({

    getInitialState: function() {
        return {
            orders: []
        }
    },

    componentWillMount: function() {
        request.get('/api/orders')
            .end((err, res) => {
                this.setState({
                    orders: res.body
                })
            });
    },

    render: function() {

        return (
            <div>
                <BusinessAdminView
                orders={this.state.orders} />
            </div>
        )
    }
})

module.exports = App;
