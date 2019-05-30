import React from 'react';
import GuessedNumbers from './guessed-numbers';
// import './user-guess.css';

export default class UserGuess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbersGuessed: [],
            alreadyGuessed: "",
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            hotCold: ""
        }
    }

    inRange = (x, min, max) => {
        return ((x-min)*(x-max) <= 0);
    }

    submitNumber = (event) => {
        event.preventDefault();
        this.setState({alreadyGuessed: ""})
        let currentNumbers = this.state.numbersGuessed;
        if (currentNumbers.includes(this.input.value)) {
            this.setState({alreadyGuessed: "You already guessed this number! Try again!"})
        }
        else if (parseInt(this.input.value) == this.state.correctAnswer){
            this.setState({hotCold: "CORRECT!"})
        }
        
        else if (this.inRange(this.input.value,this.state.correctAnswer-5,this.state.correctAnswer+5)){
            this.setState({hotCold: "HOT!"})
            currentNumbers.push(this.input.value)
            this.setState({numbersGuessed: currentNumbers})  
        }

        else {
            this.setState({hotCold: "cold."})
            currentNumbers.push(this.input.value)
            this.setState({numbersGuessed: currentNumbers})  
        }
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
                <p>the correct answer is {this.state.correctAnswer}</p>
                <p>you are {this.state.hotCold}</p>
            </div>
        );
    }
}
