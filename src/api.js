import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const selectRandomGen1 = async () => {
  const randomNumber = Math.floor(Math.random() * 151);
  return axios.get(BASE_URL + randomNumber);
};
