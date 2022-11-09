import React from "react";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import ButtonComponent from "./ButtonComponent";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  function buttonClicked() {
    console.log("click !!!");
  }

  function logWhenClicked() {
    console.log("The logo image has been clicked.");
  }

  return (
    <div>
      <Logo appName="Pokedex" handleClicked={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
      <PokemonMovesSelector />
      <PokemonCity />
      <button onClick={buttonClicked}>Click me</button>
      <ButtonComponent buttonClicked={buttonClicked} />
    </div>
  );
}

export default App;
