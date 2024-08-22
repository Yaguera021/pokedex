import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect } from "react";
import PokemonList from "../PokemonList";

const Pokedex: React.FC = () => {
  const [allPokemons, setAllPokemons] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className='p-4 py-5'>
      <form>
        <div className='bg-white p-4 flex rounded-2xl text-lg'>
          <input
            className='outline-none flex-1'
            type='text'
            placeholder='Search your Pokemon'
          />
          <button className='bg-indigo-700 p-2 rounded-xl hover:bg-indigo-500 transition-colors '>
            <IconSearch color='white' stroke={2} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={allPokemons} />
    </section>
  );
};

export default Pokedex;
