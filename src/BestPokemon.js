import React from "react";

const BestPokemon = (props) => {
  console.log(props);
  const ability = props.abilities;
  console.log(ability);
  return (
    <div>
      <p>My favorite Pokémon is Squirtle</p>
      <ul>
        {ability.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
