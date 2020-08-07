import React from "react";
import { usePalette } from "react-palette";
import { CardStyled } from "./styles";

const Card = ({ pokemon }) => {
  const { data, loading, error } = usePalette(pokemon.sprites.front_default);

  //console.log(data);
  return (
    <CardStyled bgColor={data.vibrant}>
      <img style={{ width: "300px" }} src={pokemon.sprites.front_default} />
    </CardStyled>
  );
};

export default Card;
