import React from 'react';
// import './guessed-numbers.css';

export default class GuessedNumbers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let numbers = this.props.numbers.join(", ");
        return (
        <div>
            <p>You have guessed the following numbers:</p>
            <p>{numbers}</p>
        </div>
        );
    }
}
