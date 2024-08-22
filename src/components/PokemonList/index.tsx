import React from "react";
import PokemonPreview from "../PokemonPreview";

interface Pokemon {
  name: string;
  url: string;
}

const PokemonList: React.FC<{ pokemons: Pokemon[] }> = ({ pokemons }) => {
  return (
    <section>
      {pokemons.map((pokemon: Pokemon, index: number) => (
        <PokemonPreview key={index} pokemonURL={pokemon.url} />
      ))}
    </section>
  );
};

export default PokemonList;
