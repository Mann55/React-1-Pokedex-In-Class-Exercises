import React from "react";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
    </div>
  );
}

export default App;
