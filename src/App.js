import React, { useEffect, useState } from "react";

import { selectRandomGen1 } from "./api";
import Card from "./components/Card";

import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState(undefined);

  const fetchPokemon = async () => {
    const response = await selectRandomGen1();
    const pokemon = response.data;

    setPokemon(pokemon);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {pokemon && <h2 style={{ color: "white" }}>{pokemon.name}</h2>}
        {pokemon && <Card pokemon={pokemon} />}
      </header>
    </div>
  );
};

export default App;
