import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer, isGameOver }) {
  const numOfGuesses = guesses.length;
  const isGameWon = numOfGuesses !== NUM_OF_GUESSES_ALLOWED && isGameOver;
  const isGameLost = numOfGuesses === NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <div className="guess-results">
        {guesses.map(({ guess, id }) => {
          return <Guess key={id} guess={guess} answer={answer} />;
        })}
        {range(numOfGuesses, NUM_OF_GUESSES_ALLOWED).map((_, index) => (
          <Guess key={index} />
        ))}
      </div>
      {isGameWon &&  (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{numOfGuesses} guesses</strong>.
          </p>
        </div>
      )}
      {isGameLost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GuessResults;
