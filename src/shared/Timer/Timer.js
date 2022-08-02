import React from 'react';
import * as moment from 'moment';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // time: new Date().toLocaleString()
            time: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        });
    }
    render() {
        return <small> {this.state.time}.</small>;
    }
}

export default Timer;
