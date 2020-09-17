import { combineReducers } from "redux";

import player from "./player";
import pokemons from "./pokemons";

export default combineReducers({ player, pokemons });
