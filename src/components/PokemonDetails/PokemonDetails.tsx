import React, { FC, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PokemonDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemonDetails, setPokemonDetails] = useState<{
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    abilities: { ability: { name: string } }[];
  } | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => setPokemonDetails({
        name: data.name,
        height: data.height,
        weight: data.weight,
        base_experience: data.base_experience,
        abilities: data.abilities,
      }));
  }, [id]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto text-center">
      <h3 className="text-4xl font-bold my-2">{pokemonDetails.name} Details</h3>
      <div className="border border-gray-300 rounded p-4 mx-auto max-w-sm bg-gradient-to-r from-blue-200 to-blue-300 shadow-md">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={pokemonDetails.name}
          className="mx-auto rounded-full"
        />
        <p className="text-xl font-semibold">{pokemonDetails.name}</p>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div>
            <p className="text-gray-800">Height:</p>
            <p>{pokemonDetails.height} Meters</p>
          </div>
          <div>
            <p className="text-gray-800">Weight:</p>
            <p>{pokemonDetails.weight} Kgs</p>
          </div>
          <div>
            <p className="text-gray-800">Base Experience:</p>
            <p>{pokemonDetails.base_experience}</p>
          </div>
          <div>
            <p className="text-gray-800">Ability:</p>
            <p>{pokemonDetails.abilities[0].ability.name}</p>
          </div>
        </div>
      </div>
      <Link to="/" className="block mt-6 text-blue-600 hover:underline">Back to Homepage</Link>
    </div>
  );
};

export default PokemonDetails;
