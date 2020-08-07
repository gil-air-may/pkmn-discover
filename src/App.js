import React, { useEffect, useState } from "react";

import { selectRandomGen1 } from "./api";
import Card from "./components/Card";

import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState(undefined);
  const [input, setInput] = useState("");
  const [correctScore, setCorrectScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  

  const fetchPokemon = async () => {
    const response = await selectRandomGen1();
    const pokemon = response.data;

    setPokemon(pokemon);
  };

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
        <p>Acertos {correctScore}</p>
        <p>Erros {wrongScore}</p>

        {pokemon && <Card pokemon={pokemon} />}
        <input
          type="text"
          value={input}
          onChange={handleInput}
          onKeyUp={handleEnter}
        />
      </header>
    </div>
  );
};

export default App;
