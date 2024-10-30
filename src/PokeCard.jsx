import { useState, useEffect } from 'react';
import './App.css';
import PokeDetails from './PokeDetails.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function PokeCard({ id }) {
  const [PokemonName, setPokemonName] = useState("");
  const [PokemonImage, setPokemonImage] = useState("");
  const [viewDetails, setViewDetails] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => {
        setPokemonName(data.species.name);
        setPokemonImage(data.sprites.front_default);
      })
      .catch(error => console.log("Nothing Found", error));
  }, [id]);

  return (
    <div id="PokemonCard">
      <h1>{PokemonName}</h1>
      <img src={PokemonImage} alt={`${PokemonName}`} />
      <button className="poke-wiki-button">Welcome to PokeWiki</button>
      <button onClick={() => setViewDetails(!viewDetails)}>
        {viewDetails ? "Hide Details" : "Poke Details"}
      </button>
      {viewDetails && <PokeDetails id={id} />}
    </div>
  );
}

export default PokeCard;


