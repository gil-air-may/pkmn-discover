import { combineReducers } from "@reduxjs/toolkit";

import player from "./player";
import { pokemonReducer } from "./pokemons";

export default combineReducers({ player, pokemons: pokemonReducer });
