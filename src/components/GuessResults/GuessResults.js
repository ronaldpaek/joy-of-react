import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer }) {
  const numOfGuesses = guesses.length;

  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => {

        return <Guess key={id} guess={guess} answer={answer} />;
      })}
      {range(numOfGuesses, NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <Guess key={index} />
      ))}
    </div>
  );
}

export default GuessResults;
