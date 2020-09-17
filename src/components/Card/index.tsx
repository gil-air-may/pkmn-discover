import React from "react";
import { usePalette } from "react-palette";
import { useSelector } from "react-redux";

import { Pokemon } from "../../redux/actions/pokemons";
import { CardStyled } from "./styles";

const defaultImg =
  "https://www.vippng.com/png/full/257-2570870_pokemon-pokeball-pokemon-master-ball-pixel-art.png";

const Card: React.FC = () => {
  const pokemon = useSelector(
    ({ pokemons }: { pokemons: Pokemon[] }) => pokemons[pokemons.length - 1]
  );
  const { data } = usePalette(
    pokemon ? pokemon.sprites.front_default : defaultImg
  );

  if (!pokemon) {
    return <div>Carregando...</div>;
  }

  return (
    <CardStyled bgColor={data.vibrant}>
      <img
        style={{ width: "300px", filter: "brightness(0%)" }}
        src={pokemon.sprites.front_default}
      />
    </CardStyled>
  );
};

export default Card;
