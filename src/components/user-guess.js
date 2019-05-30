import React from 'react';
import GuessedNumbers from './guessed-numbers';
// import './user-guess.css';

export default function UserGuess(props) {
  return (
    <div>   
        <form>
        <input type="number" id="userGuess" min="1" max="100" required/>
        <button type="submit" id="guessButton">Guess</button>
      </form>
      <GuessedNumbers />
    </div>
  );
}