import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import PokemonList from "../PokemonList";
import { useIntersectionObserver } from "../../hooks/intersectionObserver";

interface Pokemon {
  name: string;
  id: number;
  img: string;
}

const INITIAL_LIMIT = 898;
const INCREASE_LIMIT = 20;

const Pokedex: React.FC = () => {
  const [allPokemons, setAllPokemons] = React.useState<Pokemon[]>([]);
  const [pokemonName, setPokemonName] = React.useState("");

  const [limit, setLimit] = React.useState(INITIAL_LIMIT);

  const targetObserver = useRef<HTMLSpanElement>(null);
  const entry = useIntersectionObserver(targetObserver, {});
  const isVisible = !!entry?.isIntersecting;

  const pokemonsByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName),
  );

  const handleChangePokemonName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (isVisible) {
      const maxPokemons = pokemonsByName.length;
      const newLimit = limit + INCREASE_LIMIT;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit);
    }
  }, [isVisible]);

  useEffect(() => {
    setLimit(INITIAL_LIMIT);
  }, [pokemonName]);

  return (
    <section className='p-4 py-5'>
      <form>
        <div className='bg-white p-4 flex rounded-2xl text-lg'>
          <input
            className='outline-none flex-1'
            type='text'
            placeholder='Search your Pokemon'
            name='pokemonName'
            autoComplete='off'
            onChange={handleChangePokemonName}
          />
          <button className='bg-indigo-700 p-2 rounded-xl hover:bg-indigo-500 transition-colors '>
            <IconSearch color='white' stroke={2} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemonsByName.slice(0, limit)} />
      {/* Target Observer */}
      <span ref={targetObserver}></span>
    </section>
  );
};

export default Pokedex;
