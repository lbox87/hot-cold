import React from 'react';
import './App.css';
import Header from './header';
import GuessBox from './guess-box';

export default function App(props) {

  return (
    <div>
      <Header />
      <main role='main'>
        <GuessBox />
      </main>
    </div>
  );
}