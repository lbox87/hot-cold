import React from 'react';
import './guess-box.css';
import UserGuess from './user-guess';
import HotCold from './hot-cold';

export default class GuessBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
            <UserGuess />
            <HotCold />
            {/* <p>the correct answer is {this.props.number} </p> */}
        </div>
        );
    }
}