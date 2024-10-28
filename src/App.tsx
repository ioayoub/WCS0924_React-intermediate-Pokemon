import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";

import data from "./assets/data/pokemonList.json";
import { useEffect, useState } from "react";

import type { PokemonType } from "./lib/definitions";

function App() {
  const pokemonList: PokemonType[] = data;
  const pokemonNames: string[] = pokemonList.map((p) => p.name);

  const [currentPokemon, setCurrentPokemon] = useState(pokemonNames[0]);
  const [pokemon, setPokemon] = useState(pokemonList[0]);

  useEffect(() => {
    console.log("montage du composant");
  }, []);

  useEffect(() => {
    const foundPokemon = pokemonList.find((p) => p.name === currentPokemon);
    if (foundPokemon) {
      setPokemon(foundPokemon);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPokemon]);

  return (
    <>
      <header>
        <Navbar
          pokemonNames={pokemonNames}
          currentPokemon={currentPokemon}
          setCurrentPokemon={setCurrentPokemon}
        />
      </header>
      <main>
        <Card pokemon={pokemon} />
      </main>
    </>
  );
}

export default App;
