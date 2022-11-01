import React from "react";
import { useState } from "react";

const CaughtPokemon = () => {
  const [caught, setCaught] = useState([]);

  const date = new Date().toLocaleDateString();

  const pokemons = ["a", "b", "c"];
  function catchPokemon() {
    setCaught(
      caught.concat(pokemons[Math.floor(Math.random() * pokemons.length)])
    );
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokémon on {date}
        <button onClick={catchPokemon}> Catch Pokemon</button>
      </p>
      <ul>
        {caught.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
