import React from 'react';
import './App.css';
import Header from './header';
import GuessBox from './guess-box';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }
  render() {
    return (
      <div>
      <Header />
      <main role='main'>
        <GuessBox number={this.state.correctAnswer}/>
        {/* <p>the correct answer is {this.state.correctAnswer} </p> */}
      </main>
    </div>
    );
  }
}
