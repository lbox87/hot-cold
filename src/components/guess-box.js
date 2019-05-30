import React from 'react';
import './guess-box.css';
import GuessedNumbers from './guessed-numbers';
import UserGuess from './user-guess';
import HotCold from './hot-cold';

export default function GuessBox(props) {
  return (
    <div>   
        <UserGuess />
        <GuessedNumbers />
        <HotCold />
    </div>
  );
}