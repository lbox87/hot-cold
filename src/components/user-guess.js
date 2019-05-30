import React from 'react';
import GuessedNumbers from './guessed-numbers';
// import './user-guess.css';

export default class UserGuess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbersGuessed: [],
            alreadyGuessed: ""
        }
    }
    submitNumber = (event) => {
        event.preventDefault();
        this.setState({alreadyGuessed: ""})
        let currentNumbers = this.state.numbersGuessed;
        if (currentNumbers.includes(this.input.value)) {
            this.setState({alreadyGuessed: "You already guessed this number! Try again!"})
        }
        else {currentNumbers.push(this.input.value)}
        this.setState({numbersGuessed: currentNumbers})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitNumber}>
                    <input type="number" id="userGuess" min="1" max="100" ref={input => (this.input = input)} required/>
                    <button type="submit" id="guessButton" className="button">Guess</button>
                </form>
                <p>{this.state.alreadyGuessed}</p>
                <GuessedNumbers numbers={this.state.numbersGuessed}/>
                
            </div>
        );
    }
}
