import { useState, useEffect } from 'react';
import { Board } from './components/Board';
//import { Header } from './components/Header';

import './App.css'

export default function App() {
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

  // fetch data from the server
  useEffect(() => {
    const pokemonArray = generateRandomSet().map(pokemonId => fetchPokemon(pokemonId));
    const fetchData = async () => {
      const data = await Promise.all(pokemonArray);
      setPokemonData(data);
    }
    fetchData();

    
  }
  , []);

  
  function handleCardClick(id) {
    if(!clickedPokemon.includes(id)){
      setClickedPokemon([...clickedPokemon, id]);
      setScore(score + 1);
      if(score > highScore){
        setHighScore(score);
      }
    }else{
      resetGame();
    }

    setPokemonData(shuffleArray(pokemonData));
  }


  // Reset game when player loses
  function resetGame(){
    setScore(0);
    setClickedPokemon([]);
  } 

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

  // helper function to reshuffle an array randomly
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

return(
  <Board cards={pokemonData} onCardClick={handleCardClick} />
)

}

