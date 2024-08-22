import axios from "axios";
import React, { useEffect } from "react";
import { colorTypes } from "../../constants";

interface PokemonPreviewProps {
  pokemonURL: string;
}

const PokemonPreview: React.FC<PokemonPreviewProps> = ({ pokemonURL }) => {
  interface PokemonData {
    id: number;
    name: string;
    types: { type: { name: string } }[];
    sprites: {
      versions: {
        "generation-v": {
          "black-white": {
            front_default: string;
          };
        };
      };
    };
  }

  const [pokemon, setPokemon] = React.useState<PokemonData | undefined>();

  useEffect(() => {
    axios
      .get(pokemonURL)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className='text-center bg-violet-700  rounded-[30px] shadow-2xl relative capitalize pb-4 border border-transparent hover:border-violet-300 cursor-pointer group grid gap-2'>
      <header className='h-8'>
        {pokemon && (
          <img
            className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-110 transition-transform pixelated'
            src={
              pokemon.sprites.versions["generation-v"]["black-white"]
                .front_default
            }
            alt='pokemon'
          />
        )}
      </header>
      <span className='text-sm text-slate-400'>Nº{pokemon?.id}</span>
      <h4 className='text-lg'>{pokemon?.name}</h4>
      <ul className='flex gap-2 justify-center'>
        {pokemon?.types.map((type) => (
          <li
            className={`p-1 rounded-md px-2 text-white text-sm ${
              colorTypes[type.type.name as keyof typeof colorTypes]
            }`}
            key={type.type.name}
          >
            {type.type.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PokemonPreview;
