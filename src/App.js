import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "./components/Card";
import { resetGame, addNewPokemon, submitName } from "./redux/actions";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(30);

  const dispatch = useDispatch();
  const [correctScore, wrongScore, highScore] = useSelector(({ player }) => [
    player.correctScore,
    player.wrongScore,
    player.highScore,
  ]);

  const tick = () => {
    const counter = setTimeout(() => setTimer(timer - 1), 1000);
    if (timer === 0) {
      clearTimeout(counter);
    }
  };

  const resetAllGame = () => {
    setTimer(30);
    setInput("");
    dispatch(resetGame());
    tick();
  };

  useEffect(() => {
    tick();
  }, [timer]);

  useEffect(() => {
    dispatch(addNewPokemon());
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      dispatch(submitName(input));
      setInput("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{timer}</h1>
        <p>Acertos {correctScore}</p>
        <p>Erros {wrongScore}</p>
        <p>High Score: {highScore}</p>
        {timer === 0 ? (
          <button onClick={resetAllGame}>Try Again</button>
        ) : (
            <input
              type="text"
              value={input}
              onChange={handleInput}
              onKeyUp={handleEnter}
            />
          )}
        <Card />
      </header>
    </div>
  );
};

export default App;
