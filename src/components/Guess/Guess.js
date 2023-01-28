import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  let guessResults;
  if (guess) {
    guessResults = checkGuess(guess, answer);
  }
  return (
    <p className="guess">
      {!guess &&
        range(5).map((_, index) => <span key={index} className="cell" />)}

      {guessResults &&
        guessResults.map(({ letter, status }, index) => (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        ))}
    </p>
  );
}

export default Guess;
