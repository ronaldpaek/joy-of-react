import React from "react";

function GuessInput({ guesses, setGuesses, answer, isGameOver, setIsGameOver }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) return;

    const newGuess = {
      guess,
      id: Date.now(),
    };
    const nextGuesses = [...guesses, newGuess];

    if (guess === answer) {
        setIsGameOver(true);
    }

    if (nextGuesses.length === 6) {
        setIsGameOver(true);
    }

    setGuesses(nextGuesses);
    setGuess("");
  }

  function handleGuessChange(event) {
    const newGuess = event.target.value.toUpperCase();

    if (newGuess.length > 5) return;

    setGuess(newGuess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={isGameOver}
        value={guess}
        onChange={handleGuessChange}
      />
    </form>
  );
}

export default GuessInput;
