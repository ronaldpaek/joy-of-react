import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessResults from "../GuessResults";
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [isGameOver, setIsGameOver] = React.useState(false);

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} isGameOver={isGameOver} />
      <GuessInput guesses={guesses} setGuesses={setGuesses} answer={answer} isGameOver={isGameOver} setIsGameOver={setIsGameOver} />
    </>
  );
}

export default Game;
