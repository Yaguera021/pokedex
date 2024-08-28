import React from "react";
import PokemonPreview from "../PokemonPreview";

interface Pokemon {
  name: string;
  url?: string;
}

const PokemonList: React.FC<{ pokemons: Pokemon[] }> = ({ pokemons }) => {
  return (
    <section className='pt-12 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-10'>
      {pokemons.map((pokemon: Pokemon, index: number) => (
        <PokemonPreview key={index} pokemonURL={pokemon.url ?? ""} />
      ))}
    </section>
  );
};

export default PokemonList;
