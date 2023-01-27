import React from "react";

function GuessInput({ guesses, setGuesses }) {
    const [guess, setGuess] = React.useState("");

    function handleSubmit(event) {
      event.preventDefault();

      if (guess.length !== 5) return;

      const newGuess = {
        guess,
        id: Date.now(),
      };
      const nextGuesses = [...guesses, newGuess];

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
          value={guess}
          onChange={handleGuessChange}
        />
      </form>
    );
}

export default GuessInput;
