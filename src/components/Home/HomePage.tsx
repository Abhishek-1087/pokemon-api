import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Pokemon {
  name: string;
  url: string;
}

const HomePage: FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, []);

  return (
    <div className="container mx-auto">
      <h3 className="text-4xl font-bold my-8 text-center">Explore Pokemon</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemons.map((pokemon, index) => (
          <div key={pokemon.name} className="rounded-lg overflow-hidden shadow-md bg-blue-100">
            <Link to={`/pokemon/${index + 1}`}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
                className="w-full h-auto max-h-60 object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-semibold text-center">{pokemon.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
