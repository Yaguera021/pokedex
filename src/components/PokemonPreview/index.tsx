import axios from "axios";
import React, { useEffect } from "react";

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
    <article>
      <header>
        {pokemon && (
          <img
            src={
              pokemon.sprites.versions["generation-v"]["black-white"]
                .front_default
            }
            alt='pokemon'
          />
        )}
      </header>
      <span>Nº {pokemon?.id}</span>
      <h4>{pokemon?.name}</h4>
      <ul>
        {pokemon?.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </article>
  );
};

export default PokemonPreview;
