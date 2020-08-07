import React, { useEffect, useState } from "react";

import { selectRandomGen1 } from "./api";
import Card from "./components/Card";

import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState(undefined);
  const [input, setInput] = useState("");

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
    if(e.keyCode === 13){
      if(input === pokemon.name){
        console.log('ACERTOUUU')
      }else{
        console.log('ERRROU =c')
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {pokemon && <Card pokemon={pokemon} />}
        <input type="text" value={input} onChange={handleInput} onKeyUp={handleEnter} />
      </header>
    </div>
  );
};

export default App;
