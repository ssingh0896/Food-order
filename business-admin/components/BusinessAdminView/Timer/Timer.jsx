import React from 'react'
import sass from './timer.scss'

var Timer = React.createClass({

    propTypes: {
        secondsUntilArrival: React.PropTypes.number
    },

    getInitialState: function() {
        return {
            secondsUntilArrival: this.props.secondsUntilArrival,
            formattedSeconds: ''
        }
    },

    componentWillMount: function() {
        setInterval(this._handleCountDown, 1000);
    },

    _handleCountDown: function() {
        var newTime = this.state.secondsUntilArrival - 1;
        var formattedSeconds = '';

        if (newTime < 60) {
            formattedSeconds = '0:' + newTime.toString();
        } else if (newTime >= 60) {
            var hour = Math.floor(newTime / 60);
            var minutes = newTime % 60;
            if (minutes < 10) {
                formattedSeconds = hour + ':0' + minutes;
            } else {
                formattedSeconds = hour + ':' + minutes;
            }

        }

        this.setState({
            secondsUntilArrival: newTime,
            formattedSeconds: formattedSeconds
        })
    },

    render: function() {
        return (
            <div className="timer-container">
                {this.state.formattedSeconds}
            </div>
        )
    }
})

module.exports = Timer;
