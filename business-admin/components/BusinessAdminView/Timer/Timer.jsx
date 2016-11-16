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
        this.counterInterval = setInterval(this._handleCountDown, 1000);
    },

    _handleCountDown: function() {
        if (this.state.secondsUntilArrival === 0) {
            clearInterval(this.counterInterval);
        } else {
            var newTime = this.state.secondsUntilArrival - 1;
            var formattedSeconds = '';

            if (newTime < 60) {
                if (newTime > 9) {
                    formattedSeconds = '0:' + newTime.toString();
                } else {
                    formattedSeconds = '0:0' + newTime.toString();
                }

            } else if (newTime >= 60) {
                var hour = Math.floor(newTime / 60);
                var minutes = newTime % 60;
                if (minutes < 10) {
                    formattedSeconds = hour + ':0' + minutes;
                } else {
                    formattedSeconds = hour + ':' + minutes;
                }
            }
            this._handleSetState(newTime, formattedSeconds);
        }
    },

    _handleSetState: function(newTime, formattedSeconds) {
        if (formattedSeconds !== '0:00') {
            this.setState({
                secondsUntilArrival: newTime,
                formattedSeconds: formattedSeconds
            })

        } else if (formattedSeconds === '0:00') {
            this.setState({
                formattedSeconds: '0:00'
            })
        }
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
