import { useState, useEffect, use } from 'react'

import './App.css'

function App() {
  const serverURL = 'https://pokeapi.co/api/v2/pokemon/';
  const CARD_NUMBER = 12;
  const POKEMON_NUMBER = 151;


  const [pokemonData, setPokemonData] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);


  useEffect(() => {
    console.log(pokemonData);
  }
  , [pokemonData]);
  
  useEffect(() => {
    const pokemonArray = generateRandomSet().map(pokemonId => fetchPokemon(pokemonId));
    const fetchData = async () => {
      const data = await Promise.all(pokemonArray);
      setPokemonData(data);
    }
    fetchData();

    
  }
  , []);

  

  async function fetchPokemon(pokemonId){
    const response = await fetch(`${serverURL}${pokemonId}`);
    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default
    };
  }

  // helper function to generate a random set of pokemon id's
  function generateRandomSet() {
    const array = [];
    while(array.length < CARD_NUMBER) {
      let randomNumber = Math.floor(Math.random() * POKEMON_NUMBER) + 1;
      if(!array.includes(randomNumber)) {
        array.push(randomNumber);
      }
    }
    return array;
  }

}

export default App
