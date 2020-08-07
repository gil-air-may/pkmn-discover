import React, { useEffect, useState } from "react";

import { selectRandomGen1 } from "./api";
import Card from "./components/Card";

import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState(undefined);
  const [input, setInput] = useState("");
  const [correctScore, setCorrectScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [timer, setTimer] = useState(30);

  const fetchPokemon = async () => {
    const response = await selectRandomGen1();
    const pokemon = response.data;

    setPokemon(pokemon);
  };

  const tick = () => {
    const counter = setTimeout(() => setTimer(timer - 1), 1000);
    if (timer === 0) {
      clearTimeout(counter);
    }
  };

  const resetGame = () => {
    setTimer(30);
    setWrongScore(0);
    setCorrectScore(0);
    setInput("");
    tick();
    fetchPokemon();
  };

  useEffect(() => {
    tick();
  }, [timer]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      fetchPokemon();
      setInput("");
      if (input.toLowerCase() === pokemon.name) {
        console.log("ACERTOUUU");
        setCorrectScore(correctScore + 1);
      } else {
        setWrongScore(wrongScore + 1);
        console.log("ERRROU =c");
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{timer}</h1>
        <p>Acertos {correctScore}</p>
        <p>Erros {wrongScore}</p>
        {timer === 0 ? (
          <button onClick={resetGame}>Try Again</button>
        ) : (
          <input
            type="text"
            value={input}
            onChange={handleInput}
            onKeyUp={handleEnter}
          />
        )}
        {pokemon && <Card pokemon={pokemon} />}
      </header>
    </div>
  );
};

export default App;
