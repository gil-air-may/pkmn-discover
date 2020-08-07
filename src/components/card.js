import React from "react";
import { usePalette } from "react-palette";

const Card = ({ pokemon }) => {
  const { data, loading, error } = usePalette(pokemon.sprites.front_default);

  console.log(data);
  return (
    <div>
      <img style={{ width: "300px" }} src={pokemon.sprites.front_default} />
    </div>
  );
};

export default Card;
