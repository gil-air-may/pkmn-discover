import React, { useEffect, useState } from "react";

import "./App.css";

import { selectRandomGen1 } from "./api";

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
        {pokemon && (
          <img style={{ width: "30%" }} src={pokemon.sprites.front_default} />
        )}
      </header>
    </div>
  );
};

export default App;
