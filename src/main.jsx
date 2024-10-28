// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import PokeCard from './PokeCard.jsx'
// import PokeDetails from './PokeDetails.jsx'

// const NumPokemon = 151;

// const PokemonContainer = []

// for (let i = 1; i <= NumPokemon; i++) {
//   let Pokey =  <PokeCard id = {i}/>
//   PokemonContainer.push(Pokey)
// }

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       {PokemonContainer}
//   </StrictMode>,
// )


import { useState, useEffect } from 'react';
import './App.css';
import PokeDetails from './PokeDetails.jsx';

function PokeCard({ id }) {
  const [PokemonName, SetPokemonName] = useState("");
  const [PokemonImage, SetPokemonImage] = useState("");
  const [VeiwDetails, SetVeiwDetails] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => {
        SetPokemonName(data.species.name);
        SetPokemonImage(data.sprites.front_default);
      })
      .catch(error => console.log("Nothing Found", error));
  }, [id]);

  return (
    <div id="PokemonCard">
      <h1>{PokemonName}</h1>
      <img src={PokemonImage} alt="pokemon" />
      <button onClick={() => SetVeiwDetails(!VeiwDetails)}>
        {VeiwDetails ? "Hide Details" : "Poke Details"}
      </button>

      {VeiwDetails && <PokeDetails id={id} />}
    </div>
  );
}

export default PokeCard;
