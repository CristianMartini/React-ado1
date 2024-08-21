import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from './Products'; // Importe o componente Products

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const promises = [];
      for (let i = 1; i <= 20; i++) {
        promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
      }
      const responses = await Promise.all(promises);
      const data = responses.map(response => ({
        id: response.data.id,
        title: response.data.name,
        description: response.data.types.map(type => type.type.name).join(', '), 
        imageUrl: `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${response.data.id.toString().padStart(3, '0')}.png`
      }));
      setPokemonData(data);
    };

    fetchData();
  }, []);

  return (
    <Products products={pokemonData} /> // Passe os dados para o componente Products
  );
};

export default Pokemon;
