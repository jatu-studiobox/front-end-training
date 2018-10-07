import React, { Component } from 'react';

class Clock extends Component {
    SetTime = (time) => {
        time = time * 1000;
        let hour = Math.floor((time % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
        let formatHour = ("0" + hour).slice(-2);
        let min = Math.floor((time % (1000 * 60 * 60))/ (1000 * 60));
        let formatMin = ("0" + min).slice(-2);
        let sec = Math.floor((time % (1000 * 60))/ 1000);
        let formatSec = ("0" + sec).slice(-2);        
        return formatHour + ":" + formatMin + ":" + formatSec;
    }
    render() {
        const { time } = this.props;

        return (
            <div style={{color:'blue',fontWeight:'bold'}}>Play Time [{this.SetTime(time)}]</div>
        );
    }
}

export default Clock;