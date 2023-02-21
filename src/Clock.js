import {React, Component} from "react";

export class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>welcome to my home!</h1>
                <h2>it is {this.state.date.toLocaleDateString()}.</h2>
            </div>
        );
    }
}

