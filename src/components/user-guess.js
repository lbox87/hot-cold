import React from 'react';
import GuessedNumbers from './guessed-numbers';
// import './user-guess.css';

export default class UserGuess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbersGuessed: []
        }
    }
    submitNumber = (event) => {
        event.preventDefault();
        console.log(this.input.value)
        let currentNumbers = this.state.numbersGuessed;
        currentNumbers.push(this.input.value)
        
        this.setState({numbersGuessed: currentNumbers})
        console.log(this.state.numbersGuessed)

        // if (this.props.onMakeGuess) {
        //     const value = this.input.value;
        //     this.props.onMakeGuess(value);
        // }
        // this.input.value = '';
        // this.input.focus();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitNumber}>
                    <input
                        type="number"
                        id="userGuess"
                        min="1"
                        max="100"
                        ref={input => (this.input = input)}
                        required
                    />
                    <button
                        type="submit"
                        id="guessButton"
                        className="button"
                    >
                        Guess
          </button>
                </form>
                <GuessedNumbers />
            </div>
        );
    }
}
